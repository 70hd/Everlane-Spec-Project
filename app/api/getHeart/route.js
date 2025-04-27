import prisma from "../../../lib/prisma"

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const productId = searchParams.get("productId");
    const email = searchParams.get("email");
    const username = searchParams.get("username");

    if (!email || !productId || !username) {
      return new Response(
        JSON.stringify({ error: "Missing email, productId, or username" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Find the account based on email or username
    const account = await prisma.account.findFirst({
      where: { OR: [{ email: email }, { username: username }] },
      include: { hearts: true },
    });

    if (!account) {
      return new Response(
        JSON.stringify({ error: "Account not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      ), redirect("/account");
    }

    // Ensure productId is a number
    const productIdInt = parseInt(productId);
    if (isNaN(productIdInt)) {
      return new Response(
        JSON.stringify({ error: "Invalid productId" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Check if the product exists
    const productExists = await prisma.product.findUnique({
      where: { id: productIdInt },
    });

    if (!productExists) {
      return new Response(
        JSON.stringify({ error: "Product not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    // Check if the product is hearted by the account
    const isHearted = await prisma.heart.findFirst({
      where: {
        accountId: account.id,
        products: {
          some: { id: productIdInt },
        },
      },
    });

    return new Response(
      JSON.stringify({ isHearted: !!isHearted }), // Convert to boolean
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in GET request:", error);
    return new Response(
      JSON.stringify({ error: "Failed to check heart", details: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
