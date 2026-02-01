
import { prisma } from "../../../utils/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        
        const categories = await prisma.Category.findMany();
        return NextResponse.json(categories);
    } catch (error) {
        console.log("Error fetching categories:", error);
        return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 });
        
    }

}