import { Category } from "@prisma/client";
import * as z from "zod";

// type OrderBy = keyof Pick<Product, "name" | "price" | "created_at">;

export const searchParamsSchema = z.object({
  category: z.nativeEnum(Category).optional(),

  // TODO: Make sure these are the same as keys in Product somehow
  orderBy: z
    .union([z.literal("name"), z.literal("price"), z.literal("created_at")])
    .optional(),
  dir: z.union([z.literal("asc"), z.literal("desc")]).optional(),
  page: z
    .string()
    .regex(/^(?:100|\d{1,2})$/)
    .optional(),
});

export type SearchParamsSchemaType = z.infer<typeof searchParamsSchema>;
