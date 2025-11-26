import React from "react";
import Header from "@/components/Header";
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
    <div className="">
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-black px-4 ">
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
            <Link href="/signup">Sign in</Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default page;
