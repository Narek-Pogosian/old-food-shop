import * as z from "zod";

export const reviewSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().optional(),
  rating: z.coerce
    .number()
    .min(0, { message: "Rate between 0-5" })
    .max(5, { message: "Rate between 0-5" }),
});

export type ReviewSchemaType = z.infer<typeof reviewSchema>;
