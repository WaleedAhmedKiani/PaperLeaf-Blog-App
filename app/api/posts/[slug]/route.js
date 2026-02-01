import { prisma } from "../../../../utils/prisma";
import { NextResponse } from "next/server";

//* Get a single post by slug
export const GET = async (req, { params }) => {

    try {
        const { slug } = await params; // Get the slug from the URL

        if (!slug) {
            return NextResponse.json({ error: "Invalid slug" }, { status: 400 });
        }


        const post = await prisma.post.findUnique({
            where: {
                slug: slug.toLowerCase().trim(),
            },
            include: {
                user: true,
                category: true,
            },
        });


        if (!post) {
            return NextResponse.json({ error: "Post not found" }, { status: 404 });
        }

        return NextResponse.json(post, { status: 200 });
    } catch (error) {
        console.log("Error fetching posts:", error);
        return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
    }
};
