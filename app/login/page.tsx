import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoginForm } from "@/app/login/login-form";

function LoginCardFallback() {
  return (
    <div className="section-shell flex min-h-[70vh] items-center justify-center">
      <Card className="w-full max-w-md rounded-2xl">
        <CardHeader>
          <CardTitle>Admin Login</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required disabled />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required disabled />
            </div>
            <Button type="button" className="w-full" disabled>
              Sign In
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<LoginCardFallback />}>
      <LoginForm />
    </Suspense>
  );
}
