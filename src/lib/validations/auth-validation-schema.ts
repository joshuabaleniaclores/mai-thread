import { z } from "zod";

// Input for signup
export const signupSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" }),
  email: z.email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  confirmPassword: z.string().min(6, { message: "Password must be at least 6 characters" }),
  role: z.enum(["ADMIN", "CUSTOMER"]).optional(),
});

// Type inferred from Zod schema
export type SignupInput = z.infer<typeof signupSchema>;
