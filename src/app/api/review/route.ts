import { db } from "@/lib/db";
import { reviewSchema } from "@/lib/validations/review-validation";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(request: Request) {
  const res = await request.json();
  const { data, productId } = res;

  if (!productId || typeof productId !== "string")
    return NextResponse.json(
      { message: "Please provide a valid productId" },
      { status: 400 }
    );

  try {
    const validData = reviewSchema.parse(data);

    await db.review.create({
      data: {
        productId,
        ...validData,
      },
    });
    return NextResponse.json({ message: "Review created" }, { status: 200 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ message: "Invalid data" }, { status: 400 });
    }

    return NextResponse.json({ message: "Internal issue" }, { status: 500 });
  }
}
