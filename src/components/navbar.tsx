"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button, buttonVariants } from "./ui/button";
import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`h-16 flex items-center justify-between font-fredoka transition-colors duration-300 ${
        isScrolled ? "backdrop-blur-lg" : "backdrop-blur-none"
      }`}
    >
      <Link className="flex items-center justify-center" href="/">
        <Image src={"/logo.png"} alt="logo" width={40} height={40} className="rounded-full" />
        <span className="text-xl font-stinntUltra ml-2">CALMIFY.</span>
      </Link>
      <nav className="ml-auto hidden md:flex gap-4 sm:gap-6 items-center font-pontanoSans">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
          Features
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/pricing">
          Pricing
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/faq">
          FAQ
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/chat">
          Chat
        </Link>
        <Link href="/login" className={buttonVariants()}>
          Try For Free
        </Link>
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
              href="#"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              className="text-md font-medium hover:underline underline-offset-4"
              href="/projects"
              onClick={() => setIsOpen(false)}
            >
              Explore Projects
            </Link>
            <Link
              className="text-md font-medium hover:underline underline-offset-4"
              href="#"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Navbar;
