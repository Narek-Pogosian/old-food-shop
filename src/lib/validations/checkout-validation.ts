import * as z from "zod";

export const checkoutSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }).trim(),
  lastName: z.string().min(1, { message: "Last name is required" }).trim(),
  email: z.string().email().trim(),
  address: z.string().min(1, { message: "Address is required" }).trim(),
  city: z.string().min(1, { message: "City is required" }).trim(),
  zip: z
    .string()
    .regex(/^\d{3}(?:\s?\d{2})$/, { message: "Invalid ZIP code" })
    .trim(),
  cardNumber: z
    .string()
    .regex(/^(\d{4}\s?){4}$/, { message: "Invalid card number" })
    .trim(),
  expirationMonth: z
    .string()
    .regex(/^(0[1-9]|1[0-2])$/, { message: "Invalid" })
    .trim(),
  expirationYear: z
    .string()
    .regex(/^(2[3-9]|3[0-9])$/, { message: "Invalid" })
    .trim(),
  cvc: z
    .string()
    .regex(/^\d{3}$/)
    .trim(),
});

export type CheckoutSchemaType = z.infer<typeof checkoutSchema>;
