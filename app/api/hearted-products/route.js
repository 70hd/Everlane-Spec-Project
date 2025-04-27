import prisma from "../../../lib/prisma";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");
    const username = searchParams.get("username");

    if (!email || !username) {
      return new Response(
        JSON.stringify({ error: "Missing email, productId, or username" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Find the account based on email or username
    const account = await prisma.account.findFirst({
      where: {
        OR: [
          { email: email },
          { username: username }
        ]
      },
      include: { hearts: true },
    });

    if (!account || account.length === 0) {
      return new Response(
        JSON.stringify({ success: false, message: "Not loggef in" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      ), redirect("/account");
    }

    const products = await prisma.heart.findMany({
      where: {
        accountId: account.id
      },
      include: {
        products: true,  // Make sure this matches your relation field in the Heart model
      },
    });

    if (!products || products.length === 0) {
      return new Response(
        JSON.stringify({ success: false, message: "No products found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(JSON.stringify({ success: true, products }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  } finally {
    await prisma.$disconnect();
  }
}
