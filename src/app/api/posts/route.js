import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {

  const { searchParams } = new URL(req.url)

  const page = parseInt(searchParams.get("page")) || 1;

  const cat = searchParams.get('cat')
  
  const POST_PER_PAGE = 2;

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
    where: {
      ...(cat && { catSlug: cat }),
    }
  }

  try {
    const totalPosts = await prisma.post.count({where: query.where});
      // Calculate the last page
    const lastPage = Math.ceil(totalPosts / POST_PER_PAGE);
    
    const posts = await prisma.post.findMany(query);
    return new NextResponse(JSON.stringify({ posts, totalPosts, lastPage }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 500 }
    );
  }
};
