import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link"
import Navbar from "@/app/components/navbar";



export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body>
       
            <Navbar/>
        {children}
        
      </body>
    </html>
  )
}
