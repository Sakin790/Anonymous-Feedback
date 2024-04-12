import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/verificationEmail";
import { apiResponse } from "@/types/apiResponse";

export async function sendVerificationEmail(
  username: string,
  email: string,
  verifyCode: string
): Promise<apiResponse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Verification Code || Feedback",
      react: VerificationEmail({ username, otp: verifyCode }),
    });

    return {
      success: true,
      message: "verifiaction email send successFully",
    };
  } catch (Emailerror) {
    console.error(
      "Something went Wrong While sending verifiction email",
      Emailerror
    );
    return {
      success: false,
      message: "Something went Wrong While sending verifiction email",
    };
  }
}
