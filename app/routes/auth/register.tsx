import React, { useState } from "react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Input } from "~/components/ui/input";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Card className="w-5/6">
      <CardHeader>Register</CardHeader>
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
            <label htmlFor="username">Username:</label>
            <Input
              type="text"
              id="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
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
          <Button type="submit">Register</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Register;
