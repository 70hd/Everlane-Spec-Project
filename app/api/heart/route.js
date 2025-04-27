
import prisma from "../../../lib/prisma";

export async function PUT(req) {
  try {
    const body = await req.json();
    const { productId, email, username } = body; // Ensure email is passed

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

    // Check if productId exists (You can add more checks here if needed)
    const productExists = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!productExists) {
      return new Response(
        JSON.stringify({ error: "Product not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    // Check if the product is already hearted by the account
    const isHearted = await prisma.heart.findFirst({
      where: {
        accountId: account.id,
        products: {
          some: { id: productId },
        },
      },
    });

    if (isHearted) {
      // If already hearted, remove it
      await prisma.heart.update({
        where: { id: isHearted.id },
        data: {
          products: {
            disconnect: { id: productId },
          },
        },
      });

      return new Response(
        JSON.stringify({ message: "Product removed from heart" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } else {
      // Create a heart if it doesn't exist
      let heart = account.hearts[0];

      if (!heart) {
        heart = await prisma.heart.create({
          data: { accountId: account.id },
        });
      }

      // Connect the product to the heart
      const updatedCart = await prisma.heart.update({
        where: { id: heart.id },
        data: {
          products: {
            connect: { id: productId },
          },
        },
      });

      return new Response(JSON.stringify(updatedCart), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error("Error in PUT request:", error);
    return new Response(
      JSON.stringify({ error: "Failed to update heart", details: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
