import prisma from "../../../lib/prisma";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const username = searchParams.get("username");

    if (!username) {
      console.error("Missing username in query");
      return new Response("Username is required", { status: 400 });
    }

    // Get the account
    const account = await prisma.account.findUnique({
      where: { username: username }, // Make sure the field name is correct
    });

    if (!account) {
      console.error("No account found for username:", username);
      return new Response("Account not found", { status: 404 }),  redirect("/account");
    }



    // Fetch the cart items with product info
    const cart = await prisma.productCartDetailes.findMany({
      where: {
        accountId: account.id,
      },
      include: {
        product: {
          select: {
            id: true,
            title: true,
            price: true,
            images: true,
            colors: true,
          },
        },
      },
    });

    if (cart.length === 0) {
      console.log("No cart items found for account ID:", account.id);
    }

    return new Response(JSON.stringify(cart), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Cart API error:", error); // full error logging
    return new Response("Internal Server Error", { status: 500 });
  }
}
