import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";
import NavBar from "./NavBar"
import Footer from "./Footer";
import { PocketBaseContext, PocketBaseProvider}  from "./libs/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PocketBaseProvider >

        <NavBar />
        <div className="flex flex-col min-h-screen">
          <div className="mb-auto">
        {children}
          </div>
        <Footer />
        </div>
        </PocketBaseProvider>

        </body>
      <PrelineScript />
    </html>
  );
}
