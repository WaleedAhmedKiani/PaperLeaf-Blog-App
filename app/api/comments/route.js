import { getServerSession } from "next-auth";
import { prisma } from "../../../utils/prisma";
import { NextResponse } from "next/server";
import { authOptions } from "../../../utils/auth";

// * Get All Comments for Posts 
export const GET = async (req) => {
    try {
        const { searchParams } = new URL(req.url);
        const postId = searchParams.get("postId");
        if (!postId) {
            return NextResponse.json({ error: "Post ID is required" }, { status: 400 });
        }

        const comments = await prisma.comment.findMany({
            where: {
                postId: postId,
            },
            include: {
                user: true,
            },
            orderBy: {
                createdAt: "desc",
            },

        });

        return NextResponse.json(comments, { status: 200 });
    } catch (error) {
        console.log("Error fetching posts:", error);
        return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
    }
};

// * Create a new comment
export const POST = async (req) => {
    try {
        const session = await getServerSession(authOptions);

      if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
    const { desc, postId } = await req.json();

    if (!desc || !postId) {
      return NextResponse.json(
        { error: "Description and Post ID are required" },
        { status: 400 }
      );
    }

    // ~ find logged-in user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const newComment = await prisma.comment.create({
      data: {
        desc,
        postId,
        userId: user.id,
      },
      include: {
        user: true,
      },
    });

    return NextResponse.json(newComment, { status: 201 });
       
    } catch (error) {
        console.log("Error creating comment:", error);
        return NextResponse.json({ error: "Failed to create comment" }, { status: 500 });
    }
};
