import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "username at least 2 charactor")
  .max(32, "username cannot be more than 32 ");

export const signUpSchema = z.object({
  usernamae: usernameValidation,
  email: z.string().email({
    message: "Please enter a valid email",
  }),
  password: z
    .string()
    .min(2, { message: "password at least 2 charactor" })
    .max(20, "Password cannnot be more than 20 caractor"),
});
