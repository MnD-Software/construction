"use client";

import type { Route } from "next";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { type FormEvent, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const params = useSearchParams();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);

    const result = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false
    });

    setLoading(false);

    if (result?.error) {
      toast.error("Invalid login details.");
      return;
    }

    const callbackUrl = params.get("callbackUrl");
    router.push((callbackUrl?.startsWith("/") ? callbackUrl : "/admin") as Route);
    router.refresh();
  }

  return (
    <div className="section-shell flex min-h-[70vh] items-center justify-center">
      <Card className="w-full max-w-md rounded-2xl">
        <CardHeader>
          <CardTitle>Admin Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
