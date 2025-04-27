import prisma from "../../../lib/prisma";

// Shared delete logic (you could extract this to another file if reused)
async function handleDelete({ id, color, size, username, colorHex }) {
  const account = await prisma.account.findUnique({
    where: { username },
  });

  if (!account) {
    throw new Error("Account not found during delete") , redirect("/account");
  }

  const cartItem = await prisma.productCartDetailes.findFirst({
    where: {
      productId: id,
      accountId: account.id,
      size,
      selectedColor: color,
      selectedColorName: colorHex,
    },
  });

  if (!cartItem) {
    throw new Error("Cart item not found during delete");
  }

  await prisma.productCartDetailes.delete({
    where: { id: cartItem.id },
  });

  return { message: "Item deleted successfully" };
}

export async function PUT(req) {
  try {
    const body = await req.json();
    const { username, id, size, color, colorHex, value } = body;

    if (!username || !id || !size || !color || typeof value !== "number") {
      return new Response(JSON.stringify({ error: "Invalid input" }), { status: 400 });
    }

    const account = await prisma.account.findUnique({
      where: { username },
    });

    if (!account) {
      return new Response(JSON.stringify({ error: "Account not found" }), { status: 404 });
    }

    const cartItem = await prisma.productCartDetailes.findFirst({
      where: {
        productId: id,
        accountId: account.id,
        size,
        selectedColor: color,
        selectedColorName: colorHex,
      },
    });

    if (!cartItem) {
      return new Response(JSON.stringify({ error: "Cart item not found" }), { status: 404 });
    }

    // Handle deletion if quantity would drop to 0
    if (cartItem.quantity === 1 && value === -1) {
      try {
        const deleted = await handleDelete({ id, color, size, username, colorHex });
        return new Response(JSON.stringify(deleted), { status: 200 });
      } catch (err) {
        console.error("Delete failed:", err);
        return new Response(JSON.stringify({ error: "Delete failed" }), { status: 500 });
      }
    }

    // Update quantity
    const updatedCart = await prisma.productCartDetailes.update({
      where: { id: cartItem.id },
      data: {
        quantity: cartItem.quantity + value,
      },
    });

    return new Response(JSON.stringify(updatedCart), { status: 200 });
  } catch (err) {
    console.error("Error updating cart quantity:", err);
    return new Response(JSON.stringify({ error: "Cannot update quantity" }), { status: 500 });
  }
}
