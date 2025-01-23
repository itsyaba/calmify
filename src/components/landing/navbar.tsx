"use client";

import { Menu, LogOut } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button, buttonVariants } from "../ui/button";
import { useState } from "react";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();

  console.log(session);

  return (
    <header
      className={`h-16 flex items-center justify-between font-fredoka transition-colors duration-300`}
    >
      <Link className="flex items-center justify-center" href="/">
        <Image src={"/logo.png"} alt="logo" width={40} height={40} className="rounded-full" />
        <span className="text-xl font-stinntUltra ml-2">CALMIFY.</span>
      </Link>
      <nav className="ml-auto hidden md:flex gap-4 sm:gap-6 items-center font-pontanoSans">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
          Features
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
          Pricing
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#faq">
          FAQ
        </Link>
        {status === "authenticated" ? (
          <>
            <Link href="/chat" passHref>
              <Button variant="ghost">Chat</Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src={session.user?.image || undefined} />
                  <AvatarFallback>{session.user?.name?.[0] || "U"}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => signOut()}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <Link href="/login" className={buttonVariants()}>
            Try For Free
          </Link>
        )}
      </nav>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetTitle>{"  "}</SheetTitle>
          <nav className="flex flex-col gap-4">
            <Link
              className="text-md font-medium hover:underline underline-offset-4"
              href="#features"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              className="text-md font-medium hover:underline underline-offset-4"
              href="/pricing"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              className="text-md font-medium hover:underline underline-offset-4"
              href="#"
              onClick={() => setIsOpen(false)}
            >
              Faq
            </Link>
            {status === "authenticated" ? (
              <>
                <Link
                  href="/chat"
                  className="text-md font-medium hover:underline underline-offset-4"
                  onClick={() => setIsOpen(false)}
                >
                  Chat
                </Link>
                <Button variant="ghost" onClick={() => signOut()}>
                  Log out
                </Button>
              </>
            ) : (
              <Link href="/login" passHref>
                <Button onClick={() => setIsOpen(false)}>Try For Free</Button>
              </Link>
            )}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Navbar;
