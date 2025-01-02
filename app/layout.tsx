import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Aaron A. Perez - FullStack Developer',
  description: 'Modern web developer portfolio showcasing full-stack projects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.className}>
      <body className=" text-white">
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}