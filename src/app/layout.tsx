import ReduxProvider from "@/Provider/ReduxProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Multi-Vendor Marketplace | Buy & Sell Products Online",
  description: "Explore a wide range of products from multiple vendors in our online marketplace. Easy shopping, secure checkout, and manage your own store as a vendor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <ReduxProvider>{children}
          <Toaster position="top-center" />
        </ReduxProvider>
      </body>
    </html>
  );
}
