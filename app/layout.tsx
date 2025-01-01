import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./Provider";
import Hero from "./components/ui/Hero";
import HeroSection from "./components/ui/HeroSection";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: 'Aaron A. Perez - FullStack Developer',
  description: 'Modern web developer portfolio showcasing full-stack projects',
  openGraph: {
    title: 'Your Name - Portfolio',
    description: 'Full Stack Developer Portfolio',
    images: ['/og-image.png'],
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" suppressHydrationWarning>
       
      <body>
     <HeroSection/>
          {children}
      </body>
    </html>
  );
}
