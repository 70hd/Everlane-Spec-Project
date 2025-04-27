import prisma from "../../../lib/prisma";

export async function POST(req) {
    try {
        const body = await req.json();
        if (!body.email || !body.firstName || !body.lastName || !body.message) {
            return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
        }

        const info = await prisma.contactSignup.create({
            data: {
                email: body.email,
                firstName: body.firstName,
                lastName: body.lastName,
                message: body.message,
            },
        });

        return new Response(JSON.stringify(info), { status: 200 });
    } catch (error) {
        console.error("Error saving data:", error);
        return new Response(JSON.stringify({ error: "Couldn't submit data" }), { status: 500 });
    }
}
