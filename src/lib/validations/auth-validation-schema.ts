import { z } from "zod";

// Input for login
export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

// Type inferred from Zod schema
export type LoginInput = z.infer<typeof loginSchema>;

// Input for signup
export const signupSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  role: z.enum(["ADMIN", "CUSTOMER"]).optional(), // optional, defaults to CUSTOMER
});

// Type inferred from Zod schema
export type SignupInput = z.infer<typeof signupSchema>;
