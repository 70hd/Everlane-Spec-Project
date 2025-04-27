import { prisma } from "../../../lib/prisma";

export async function POST(req) {
  try {
    const item = await req.json();

    // if (!item.email || typeof item.email !== "string") {
    //   return new Response(JSON.stringify({ error: "Invalid email" }), { status: 400 });
    // }
    const isExisting = await prisma.newsLetter.findUnique({
      where: {
        email: item.email,
      },
    });
    
    if (isExisting) {
      return new Response(JSON.stringify({ error: "This email is already signed up" }), { status: 400 });
    }


    const postItem = await prisma.newsLetter.create({
      data: {
        email: item.email,
      },
    });
    

    return new Response(JSON.stringify(postItem), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
