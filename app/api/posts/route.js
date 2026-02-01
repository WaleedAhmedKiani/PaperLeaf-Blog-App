import { prisma } from "../../../utils/prisma";
import { NextResponse } from "next/server";
import { authOptions } from "../../../utils/auth";
import { getServerSession } from "next-auth";
import slugify from "slugify";

// * Get All Posts with Pagination and Category Filter
export const GET = async (req) => {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const categorySlug = searchParams.get("category");
    const pageSize = 3;
    const skip = (page - 1) * pageSize;

    // ~ Find category by slug first
    let categoryId = null;

    if (categorySlug) {
      const category = await prisma.category.findUnique({
        where: { slug: categorySlug.toLowerCase() },
      });

      if (category) {
        categoryId = category.id;
      }
    }

    // ~ Filter by categoryId
    const where = categoryId ? { categoryId } : {};

    const [posts, totalPosts] = await Promise.all([
      prisma.post.findMany({
        where,
        take: pageSize,
        skip,
        include: {
          user: true,
          category: true,
        },
      }),
      prisma.post.count({ where }),
    ]);

    return NextResponse.json({ posts, totalPosts, pageSize }, { status: 200 });
  } catch (error) {
    console.log("Error fetching posts:", error);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
};

// * Create a new Post
export const POST = async (req) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
    const { desc, title, category, imageUrl, videoUrl, content } = await req.json();
    if (!desc || !title || !category) {
      return NextResponse.json(
        { error: "Description, title, and category are required" },
        { status: 400 }
      );
    }

    // find logged-in user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const slug = slugify(title, { lower: true, strict: true });
    
    // convert slug to category id
    const categoryRecord = await prisma.category.findUnique({
      where: { slug: category },
    });

    if (!categoryRecord) {
      return NextResponse.json(
        { error: "Invalid category" },
        { status: 400 }
      );
    }


    const newPost = await prisma.post.create({
      data: {
        title,
        desc,
        slug,
        content, 
        categoryId: categoryRecord.id,
        img: imageUrl || null,
        video: videoUrl || null,
        userId: user.id,
      },
      include: {
        user: true,
        category: true,

      },
    });

    return NextResponse.json(newPost, { status: 201 });

  } catch (error) {
    console.log("Error creating post:", error);
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
};

