import React from "react";
import { ComponentDetail } from "../components/ComponentDetail";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { Checkbox } from "../components/ui/checkbox";

export const FormPage = () => {
  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    bio: z.string().max(160, {
      message: "Bio must not be longer than 160 characters.",
    }),
    terms: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions.",
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      bio: "",
      terms: false,
    },
  });

  const formContent = {
    name: "form",
    title: "Form Component",
    description: `The Form component provides a structured way to handle form inputs, validation, and submission.

Key Features:
- Form validation
- Error handling
- Field components
- Customizable styling
- Accessibility support
- Integration with form libraries

Best Practices:
1. Use appropriate validation
2. Provide clear error messages
3. Handle form submission
4. Consider accessibility
5. Implement proper error states`,
    codeExample: `import { Form } from '../components/ui/form';

function ExampleForm() {
  return (
    <Form>
      <FormField>
        <FormLabel>Username</FormLabel>
        <FormControl>
          <Input />
        </FormControl>
        <FormMessage />
      </FormField>
    </Form>
  );
}`,
    usage: `The Form component is perfect for:
- User registration
- Contact forms
- Settings forms
- Search forms
- Data entry forms`,
    props: [
      {
        name: "onSubmit",
        type: "function",
        default: "undefined",
        description: "Callback when the form is submitted.",
      },
      {
        name: "defaultValues",
        type: "object",
        default: "{}",
        description: "Default values for form fields.",
      },
      {
        name: "validationSchema",
        type: "object",
        default: "undefined",
        description: "Schema for form validation.",
      },
    ],
    examples: [
      {
        title: "Basic Form",
        description: "A simple form with validation",
        content: (
          <div className="flex flex-wrap gap-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit((data) => console.log(data))} className="space-y-8">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter username" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter email" {...field} />
                      </FormControl>
                      <FormDescription>
                        We'll never share your email.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bio</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us a little bit about yourself"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Brief description for your profile.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="terms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          Accept terms and conditions
                        </FormLabel>
                        <FormDescription>
                          You agree to our Terms of Service and Privacy Policy.
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </div>
        ),
      },
    ],
  };

  return <ComponentDetail {...formContent} />;
}; 