import { Message } from "@/models/User";
export interface apiResponse {
  success: boolean;
  message: string;
  isAccesptingMessage?: boolean;
  messages?: Array<Message>;
}
