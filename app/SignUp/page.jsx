"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from 'next/link';
import { Input } from "@/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/ui/form";
import { Checkbox } from "@/ui/checkbox";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa6"; // Added FaEnvelope for email

const formSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  confirmPassword: z.string().min(8, {
    message: "Confirm Password must be at least 8 characters.",
  }),
  acceptTerms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions.",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match.",
  path: ["confirmPassword"], // Path of the error
});

export default function SignUpPage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  function onSubmit(values) {
    console.log("Sign Up Attempt with values:", values);
    alert(`Attempting to sign up user: ${values.username} with email: ${values.email}`);
    // Here you would typically send data to an API
  }

  return (
    <div 
      className="bg-[url('/hero.png')] flex flex-col items-center justify-center min-h-screen p-4 bg-cover bg-center"
    >
      <div 
        className="w-full max-w-sm bg p-8 rounded-xl space-y-8 text-center"
      >
        <h1 className="text-4xl font-extrabold tracking-tight text-black shadow-text">
          Sign Up
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
                    <FaUser className="absolute right-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-purple-500"/>
                    <Input 
                      placeholder="Username" 
                      type="text" 
                      className="p-6 bg-transparent border-black rounded-4xl text-black
                       placeholder-gray-200 focus:bg-white transition duration-300"
                      {...field} 
                    />
                  </div>
                  <FormMessage className="text-black" />
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <div className="relative">
                    <FaEnvelope className="absolute right-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-purple-500" />
                    <Input 
                      placeholder="Email" 
                      type="email" 
                      className="p-6 bg-transparent border-black rounded-4xl text-black
                       placeholder-gray-200 focus:bg-white transition duration-300"
                      {...field} 
                    />
                  </div>
                  <FormMessage className="text-black" />
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
                      placeholder="Create Password" 
                      type="password" 
                      className="p-6 bg-transparent border-black rounded-4xl text-black
                       placeholder-gray-200 focus:bg-white transition duration-300"
                      {...field} 
                    />
                  </div>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            {/* Confirm Password Field */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <div className="relative">
                    <FaLock className="absolute right-6 top-1/2 transform -translate-y-1/2 h-5 w-5 text-purple-500" />
                    <Input 
                      placeholder="Confirm Password" 
                      type="password" 
                      className="p-6 bg-transparent border-black rounded-4xl text-black
                       placeholder-gray-200 focus:bg-white transition duration-300"
                      {...field} 
                    />
                  </div>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            {/* Accept Terms Checkbox */}
            <div className="flex items-center justify-start text-sm"> {/* Changed to justify-start */}
              <FormField
                control={form.control}
                name="acceptTerms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="border-black data-[state=checked]:bg-black data-[state=checked]:text-white transition duration-300"
                      />
                    </FormControl>
                    <FormLabel className="mt-0 text-black text-left"> {/* Added text-left */}
                      I agree to the <Link href="/terms" className="underline text-purple-400">Terms</Link> and <Link href="/privacy" className="underline text-purple-400">Privacy Policy</Link>
                    </FormLabel>
                  </FormItem>
                )}
              />
            </div>
            
            <button
              type="submit" 
              className="w-full bg-purple-500 text-white hover:bg-purple-200 font-bold py-3 
              shadow-lg rounded-full transition duration-300 flex items-center justify-center gap-2"
            >
              Sign Up
            </button>
          </form>
        </Form>
        
        {/* Login Link */}
        <div className="mt-6">
          <p className="text-sm text-black font-[500]">
            Already have an account?
          </p>
          <Link href="/login" className="text-black font-[700] hover:underline text-md transition duration-300">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}