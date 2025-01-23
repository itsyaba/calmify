import type { Metadata } from "next";
import { Stint_Ultra_Expanded, Pontano_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Providers } from "@/components/provider";
import { Toaster } from "@/components/ui/toaster";

const stinntUltra = Stint_Ultra_Expanded({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-stint-ultra-expanded",
});

const pontanoSans = Pontano_Sans({
  variable: "--font-pontano-sans",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "CALMIFY.",
  description: "Your AI based therapist",
};
// TODO : axios , react query
// TODO : Change form fetch to axios
// TODO : create the chat models (4 models) 1. Friendly 2. Father vibes 3. monk mode 4. tries to flirt

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${stinntUltra.variable} ${pontanoSans.variable} antialiased`}>
        <Providers>
          <div className="w-11/12 mx-auto">
            <Navbar />
            {children}
            <Footer />
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
