// app/api/updateAccount/route.js
import prisma from "../../../lib/prisma";
import bcrypt from "bcryptjs";

export async function PUT(req) {
  try {
    const body = await req.json();
    const { authData, updateData } = body || {};

    if (!authData || !updateData) {
      return new Response(
        JSON.stringify({ error: "Invalid request format." }),
        { status: 400 }
      );
    }

    const { email, username } = authData;
    const { password, ...fieldsToUpdate } = updateData;

    if (!email || !username || !password) {
      return new Response(
        JSON.stringify({ error: "Missing credentials or password." }),
        { status: 400 }
      );
    }

    const user = await prisma.account.findFirst({
      where: { email, username },
    });

    if (!user) {
      return new Response(
        JSON.stringify({ error: "Account not found." }),
        { status: 404 }
      );
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      return new Response(
        JSON.stringify({ error: "Incorrect password." }),
        { status: 401 }
      );
    }

    const updatedAccount = await prisma.account.update({
      where: { id: user.id },
      data: fieldsToUpdate,
    });

    return new Response(JSON.stringify(updatedAccount), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("PUT /api/updateAccount error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error", details: error.message }),
      { status: 500 }
    );
  }
}
