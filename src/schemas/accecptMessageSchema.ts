import { z } from "zod";

export const isAccecptingMessage = z.object({
  accecptMessage: z.boolean(),
});
