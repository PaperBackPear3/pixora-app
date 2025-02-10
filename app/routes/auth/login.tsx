"use client";

import React, { useState } from "react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { useIsMobile } from "~/hooks/use-mobile";
import { authApi } from "~/api";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";

const formSchema = z.object({
  email: z.string().email("must be a valid Email").min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z
    .string()
    .min(8, { message: "Passowrd must be at least 8 characters." }),
});

const Login: React.FC = () => {
  const isMobile = useIsMobile();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onsubmit = async (
    values: z.infer<typeof formSchema>,
    event: React.FormEvent
  ) => {
    event.preventDefault();
    try {
      console.log(values);
      const res = await authApi.login({
        email: values.email,
        password: values.password,
      });
      console.log(res);
    } catch (error) {}
  };

  return (
    <Card className={`${isMobile}? "w-5/6" : "w-1/3"`}>
      <CardHeader>Login</CardHeader>
      <CardContent className="flex flex-col">
        <Form {...form}>
          <form
            onSubmit={(event) =>
              form.handleSubmit((values) => onsubmit(values, event))(event)
            }
            method="POST"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="user@your-email.com" {...field} />
                  </FormControl>
                  <FormDescription>Your account Email</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="********" {...field} />
                  </FormControl>
                  <FormDescription>Your account Password</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Login</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default Login;
