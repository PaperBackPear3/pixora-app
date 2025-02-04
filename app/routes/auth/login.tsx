import React, { useState } from "react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { useIsMobile } from "~/hooks/use-mobile";
import { authApi } from "~/api";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isMobile = useIsMobile();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const res = await authApi.login({ email: email, password: password });
      console.log(res);
    } catch (error) {}
  };

  return (
    <Card className={`${isMobile}? "w-5/6" : "w-1/3"`}>
      <CardHeader>Login</CardHeader>
      <CardContent className="flex flex-col">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit">Login</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Login;
