import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, "content at least 10 word")
    .max(300, "content must be no longer than 300 word"),
});
