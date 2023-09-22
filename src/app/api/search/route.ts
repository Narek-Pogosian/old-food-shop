import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q");

  if (!query)
    return NextResponse.json(
      { message: "Please provide a query" },
      { status: 400 }
    );

  try {
    const products = await db.product.findMany({
      where: {
        name: { contains: query, mode: "insensitive" },
      },
    });

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
}
