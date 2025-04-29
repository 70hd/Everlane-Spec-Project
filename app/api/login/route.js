import prisma from "../../../lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const body = await req.json();

    const user = await prisma.account.findFirst({
      where: {
        email: body.email,
        username: body.username,
      },
    });

    if (!user) {
      return new Response(
        JSON.stringify({ error: "This account does not exist" }),
        { status: 404 }
      );
    }

    const isPasswordValid = await bcrypt.compare(body.password, user.password);

    if (!isPasswordValid) {
      return new Response(JSON.stringify({ error: "Incorrect password" }), {
        status: 401,
      });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET
    );

    return new Response(JSON.stringify({ user, token }), { status: 200 });
    
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
