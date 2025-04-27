import prisma from "../../../lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {

    const body = await req.json();

    const existingAccount = await prisma.account.findFirst({
      where: {
        OR: [
          { username: body.username },
          { email: body.email }
        ],
      },
    });

    if (existingAccount) {
      return new Response(
        JSON.stringify({ error: "This account already exists." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const HASHEDPASSWORD = await bcrypt.hash(body.password, 10);

    const newAccount = await prisma.account.create({
      data: {
        username: body.username,
        email: body.email,
        password: HASHEDPASSWORD,
      },
    });
      const heart = await prisma.heart.create({
        data: {
          accountId: newAccount.id,
        },
      });
    return new Response(
      JSON.stringify(
        newAccount,
        heart,
        // cart,
      ),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Server Error:", error.message, error);
    return new Response(
      JSON.stringify({ error: "Internal server error." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
