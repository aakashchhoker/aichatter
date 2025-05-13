import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../components/ui/input-otp";

export const InputOTPPage = () => {
  const inputOTPContent = { 
    name: "input-otp",
    title: "Input OTP Component",
    description: `The Input OTP (One-Time Password) component is designed for entering verification codes, PINs, or other short numeric/alphanumeric sequences. It provides a user-friendly interface for entering codes digit by digit.

Key Features:
- Individual input slots for each character
- Automatic focus management
- Support for numeric and alphanumeric input
- Customizable length
- Accessible by default
- Mobile-friendly design

Best Practices:
1. Use appropriate length for the code
2. Provide clear instructions
3. Handle paste events
4. Consider mobile usability
5. Include error handling`,
    codeExample: `import { InputOTP, InputOTPGroup, InputOTPSlot } from '../components/ui/input-otp';

function ExampleInputOTP() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
}`,
    usage: `The Input OTP component is perfect for:
- Verification codes
- PIN entry
- Security codes
- Two-factor authentication
- Access codes
- Confirmation numbers`,
    props: [
      {
        name: "maxLength",
        type: "number",
        description: "The maximum length of the OTP code",
      },
      {
        name: "value",
        type: "string",
        description: "The current value of the OTP input",
      },
      {
        name: "onChange",
        type: "function",
        description: "Callback when OTP value changes",
      },
      {
        name: "disabled",
        type: "boolean",
        description: "Whether the OTP input is disabled",
      },
    ],
    examples: [
      {
        title: "Basic OTP Input",
        description: "A simple 6-digit OTP input",
        content: (
          <div className="flex flex-col items-center space-y-4">
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        ),
      },
      {
        title: "4-Digit PIN",
        description: "A 4-digit PIN input with custom styling",
        content: (
          <div className="flex flex-col items-center space-y-4">
            <InputOTP maxLength={4}>
              <InputOTPGroup className="gap-2">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        ),
      },
      {
        title: "Disabled OTP Input",
        description: "An OTP input that cannot be interacted with",
        content: (
          <div className="flex flex-col items-center space-y-4">
            <InputOTP maxLength={6} disabled>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        ),
      },
    ],
  };

  return <ComponentDetail {...inputOTPContent} />;
}; 