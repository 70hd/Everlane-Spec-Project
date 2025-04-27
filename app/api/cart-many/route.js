import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma'; // relative path instead of @


export async function POST(req) {
  const { authData, cart } = await req.json();

  console.log("📩 Received authData:", authData);
  console.log("🛒 Received cart:", cart);

  try {
    const account = await prisma.account.findUnique({
      where: { username: authData.username },
    });

    if (!account) {
      console.log("❌ Account not found");
      return NextResponse.json({ error: "Account not found" }, { status: 404 }) , redirect("/account");
    }

    for (const item of cart) {
      const product = await prisma.product.findFirst({
        where: {
          title: item.title,
          price: item.originalPrice 
        },
      });

      if (!product) {
        console.log("❌ Product not found:", item.title, item.price);
        return NextResponse.json(
          { error: `Product not found: ${item.title} - $${item.price}` },
          { status: 404 }
        );
      }

      const existing = await prisma.productCartDetailes.findFirst({
        where: {
          productId: product.id,
          accountId: account.id,
          size: item.size,
          selectedColor: item.selectedColor,
        },
      });

      if (existing) {
        console.log("🔁 Updating existing cart item...");
        await prisma.productCartDetailes.update({
          where: { id: existing.id },
          data: {
            quantity: existing.quantity + item.quantity,
          },
        });
      } else {
        console.log("🆕 Creating new cart item...");
        await prisma.productCartDetailes.create({
          data: {
            size: item.size,
            selectedColor: item.selectedColor,
            selectedColorName: item.selectedColorName,
            accountId: account.id,
            quantity: item.quantity,
            productId: product.id,
          },
        });
      }
    }

    return NextResponse.json("Product(s) added to cart successfully", { status: 200 });
  } catch (error) {
    console.error("💥 Error in POST handler:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
