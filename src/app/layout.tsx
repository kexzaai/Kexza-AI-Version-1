import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Kexza AI | Execution Intelligence for CA Firms",
  description: "Scale your CA firm with Artificial Execution Intelligence. Manage workflows, tracking, and client communication seamlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
