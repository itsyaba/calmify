"use client";

import { SignupForm } from "@/components/signup-form";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/components/loader";

export default function SignupPage() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/chat");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Loader size={24} />{" "}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-md">
          <SignupForm />
        </div>
      </div>
      <div className="w-1/2 h-full hidden lg:block">
        <Image
          src="/signup.jpg"
          alt="Signup Image"
          width={1200}
          height={1200}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
