import React from "react";
import {
  Html,
  Head,
  Preview,
  Heading,
  Row,
  Section,
  Text,
} from "@react-email/components";

interface EmailTemplateProps {
  username: string;
  otp: string;
}

const VerificationEmail: React.FC<EmailTemplateProps> = ({ username, otp }) => {
  return (
    <Html lang="en">
      <Head>
        <title>Verification Code</title>
  
      </Head>
      <Preview>Verification Code: {otp}</Preview>

      <Section>
        <Row>
          <Heading as="h2">Hello {username}</Heading>
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
            This OTP is valid for a few minutes. For your security, please do
            not share this code with anyone.
          </Text>
        </Row>
      </Section>
    </Html>
  );
};

export default VerificationEmail;
