import type { Metadata } from "next";
import { Stint_Ultra_Expanded, Pontano_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${stinntUltra.variable} ${pontanoSans.variable} antialiased`}>
        <div className="w-11/12 mx-auto">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
