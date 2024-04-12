import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";
import { dbConnect } from "@/lib/dbConnect";
import UserModel from "@/models/User";
//import { bcrypt } from "bcryptjs";

export async function POST(request: Request) {
  await dbConnect();
  try {
    const { username, email, password } = await request.json();
  } catch (error) {
    console.error("Error registering Error", error);
    return Response.json(
      {
        success: false,
        message: "Error registering Error",
      },
      {
        status: 500,
      }
    );
  }
}
