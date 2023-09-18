import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// @ts-ignore for params type
export async function GET(request: Request, { params }) {
  const { productId } = params;

  const reviews = await db.review.findMany({
    where: { productId },
  });

  return NextResponse.json(reviews);
}
