"use client";

import Loader from "@/components/loader";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ChatPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Loader size={64} />{" "}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to Calmify Chat, {session?.user?.name || "User"}!
      </h1>
      <p className="text-lg text-gray-600">
        This is where you can start your conversation with our AI therapist.
      </p>
      {/* Add your chat interface components here */}
    </div>
  );
}
