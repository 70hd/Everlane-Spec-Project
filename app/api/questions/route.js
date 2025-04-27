import { PrismaClient } from "@prisma/client";

const database = new PrismaClient();

export async function GET() {
  try {
    const questions = await database.faq.findMany();

    if (!questions || questions.length === 0) {
      return new Response(
        JSON.stringify({ success: false, message: "No questions found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true, questions }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  } finally {
    await database.$disconnect();
  }
}
