import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Button,
} from "@react-email/components";

interface EmailTemplateProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({
  username,
  otp,
}: EmailTemplateProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verification Code</title>

      </Head>
      <Preview> Verification Code : {otp} </Preview>

      <Section>
        <Row>
          <Heading as="h2"> Hello {username}</Heading>
        </Row>
        <Row>
          <Text>
            Thank you for signing up for [Your App Name]. To verify your account
            and access all its features, please use the following one-time
            password (OTP):
          </Text>
        </Row>
        <Row>
          <Text>{otp}</Text>
        </Row>
        <Row>
          <Text>
            This OTP is valid for few minutes. For
            your security, please do not share this code with anyone.
          </Text>
        </Row>
      </Section>
    </Html>
  );
}