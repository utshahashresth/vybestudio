import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <Label>Email</Label>
            <Input type="email" placeholder="john@example.com" />
            <Label>Password</Label>
            <Input type="password" />
            <Button>Login</Button>
          </div>
        </CardContent>
        <CardFooter>
          Dont have a account?
          <Link href="/contact">Signin</Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;
