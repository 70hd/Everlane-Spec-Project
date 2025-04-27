import { PrismaClient } from "@prisma/client";

const database = new PrismaClient();

export async function GET() {
  try {
    const products = await database.product.findMany();
    const colors = await database.color.findMany();

    if (!products || products.length === 0 || !colors || colors.length === 0) {
      return new Response(
        JSON.stringify({ success: false, message: "No products or colors found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Update status for out-of-stock products
    const outOfStockUpdates = await Promise.all(
      products
        .filter((p) => p.inventory === 0)
        .map((p) =>
          database.product.update({
            where: { id: p.id },
            data: { status: "Out of Stock" },
          })
        )
    );

    return new Response(
      JSON.stringify({ success: true, products, colors }),
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
