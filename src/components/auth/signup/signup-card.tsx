"use client";

import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SignupForm from "./signup-form";

export default function SignupCard() {
   return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Create Account</CardTitle>
          <CardDescription>
            Join our blogging platform by creating an account. You&apos;ll be
            able to write, edit, and share your own blog posts, as well as
            engage with content from other creators. Signing up is quick and
            easy — just fill out the form below to get started.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignupForm />
        </CardContent>
        <CardFooter>
          <p className="text-sm text-center">
            Already have an account?&nbsp;
            <Link href="/login" className="text-blue-600 hover:underline">
              Log in here
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
