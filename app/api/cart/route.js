import { redirect } from "next/dist/server/api-utils";
import prisma from "../../../lib/prisma";

export async function POST(req) {
  const body = await req.json();

  try {
    const account = await prisma.account.findUnique({
      where: {
        username: body.authData.username,
      },
    });

    if (!account) {
      return new Response("Account not found", { status: 404 }), redirect("/account")
    }

    const product = await prisma.product.findFirst({
      where: {
        id: body.product.id,
      },
    });

    if (!product) {
      return new Response("Product not found", { status: 404 });
    }

    const isCarted = await prisma.productCartDetailes.findFirst({
      where: {
        productId: product.id,
        accountId: account.id,
        size: body.size,
        selectedColor: body.color,
        selectedColorName: body.colorHex,
      },
    });

    let isCartedQuantity = body.quantity;
    if (isCarted) {
      isCartedQuantity += isCarted.quantity; // Increment the existing quantity
    }

    if (isCarted) {
      await prisma.productCartDetailes.update({
        where: {
          id: isCarted.id,
        },
        data: {
          quantity: isCartedQuantity,
        },
      });
    } else {
      await prisma.productCartDetailes.create({
        data: {
          size: body.size,
          selectedColor: body.color,
          selectedColorName: body.colorHex,
          accountId: account.id,
          quantity: body.quantity,
          productId: product.id, // Assuming you need to associate product
        },
      });
    }

    return new Response("Product added to cart successfully", { status: 200 });
  } catch (error) {
    console.error("Error:", error.message);
    return new Response("Internal Server Error", { status: 500 });
  }
}
