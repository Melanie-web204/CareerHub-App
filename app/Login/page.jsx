"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from 'next/link';
import Button  from "@/ui/Buttons";
import { Input } from "@/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/ui/form";
import { Checkbox } from "@/ui/checkbox";
import { FaUser, FaLock } from "react-icons/fa6";

const formSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  rememberMe: z.boolean().default(false).optional(),
});

export default function LoginPage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      rememberMe: false,
    },
  });

  function onSubmit(values) {
    console.log("Login Attempt with values:", values);
    alert(`Attempting login for user: ${values.username}`);
  }

  return (
    <div 
      className="bg-[url('/hero.png')]  flex flex-col items-center justify-center min-h-screen p-4 bg-cover bg-center"
    
    >
      <div 
        className="w-full max-w-sm p-8 rounded-xl  space-y-8 text-center"
      >
        <h1 className="text-4xl font-extrabold tracking-tight text-black shadow-text">
          Login
        </h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Username Field */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <div className="relative">
                    <FaUser className="absolute right-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-purple-500" />
                    <Input 
                      placeholder="Username" 
                      type="text" 
                      className="p-6 bg-transparent border-black rounded-4xl  text-black
                       placeholder-gray-200 focus:bg-white transition duration-300"
                      {...field} 
                    />
                  </div>
                  <FormMessage className="text-red" />
                </FormItem>
              )}
            />
            
            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="relative">
                    <FaLock className="absolute right-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-purple-500" />
                    <Input 
                      placeholder="Enter Password" 
                      type="password" 
                      className="p-6 bg-transparent border-black rounded-4xl  text-black
                       placeholder-gray-200 focus:bg-white transition duration-300"
                      {...field} 
                    />
                  </div>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="border-black data-[state=checked]:bg-black data-[state=checked]:text-white transition duration-300"
                      />
                    </FormControl>
                    <FormLabel className="mt-0 text-black">
                      Remember me
                    </FormLabel>
                  </FormItem>
                )}
              />
              <Link href="/forgot-password" className="text-black hover:underline text-sm font-medium transition duration-300">
                Forgot Password?
              </Link>
            </div>
            
            <button
              type="submit" 
              className="w-full bg-purple-500 text-white hover:bg-purple-200 font-bold py-3 
              shadow-lg rounded-full transition duration-300 flex items-center justify-center gap-2"
            >
              Login
            </button>
          </form>
        </Form>
        
        {/* Register Link */}
        <div className="mt-6">
          <p className="text-sm text-black font-[500]">
            Don't have an account?
          </p>
          <Link href="/SignUp" className="text-black font-[700] hover:underline text-md transition duration-300">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}