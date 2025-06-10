import type { Metadata } from "next";
import "./globals.css";
import { poppins, raleway } from "./fonts";

export const metadata: Metadata = {
  title: "The Next Thing",
  description: "Basement for the new era of startups and innovations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${raleway.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
