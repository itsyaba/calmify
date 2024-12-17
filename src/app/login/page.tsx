import { GalleryVerticalEnd } from "lucide-react";

import { LoginForm } from "@/components/login-form";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="w-2/4 h-full flex items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-xs">
          <LoginForm />
        </div>
      </div>
      <div className="w-2/4 h-full hidden lg:block  bg-red-400">
        <Image src={"/login.jpg"} alt="Login Image" width={1200} height={1200} className="" />
      </div>
    </div>
  );
}
