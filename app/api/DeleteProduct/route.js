import prisma from "../../../lib/prisma";

export async function PUT(req) {
  try {
    const body = await req.json();

    // Find the account based on username
    const account = await prisma.account.findUnique({
      where: {
        username: body.username,
      },
    });

    if (!account) {
      return new Response(JSON.stringify({ error: "Account not found" }), {
        status: 404,
      }) , redirect("/account");
    }

    // Find the matching cart item
    const findCart = await prisma.productCartDetailes.findFirst({
      where: {
        productId: body.id,
        accountId: account.id,
        size: body.size,
        selectedColor: body.color,
        selectedColorName: body.colorHex,
      },
    });

    if (!findCart) {
      return new Response(JSON.stringify({ error: "Cart item not found" }), {
        status: 404,
      });
    }

    // Delete the cart item
    await prisma.productCartDetailes.delete({
      where: {
        id: findCart.id,
      },
    });

    return new Response(JSON.stringify({ message: "Deleted successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error deleting cart item:", error);
    return new Response(
      JSON.stringify({ error: "Cannot delete item" }),
      { status: 500 }
    );
  }
}
