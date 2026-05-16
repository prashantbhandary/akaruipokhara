import type { Metadata } from "next";
import "./globals.css";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: "Akarui Education Pokhara | Akarui Education Consultancy",
    template: "%s | Akarui Education Pokhara",
  },
  description:
    "Premium education consultancy in Pokhara guiding students for study abroad with trusted counseling, visa support, and global admissions.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        <Navbar />
        <main className="flex min-h-[70vh] flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
