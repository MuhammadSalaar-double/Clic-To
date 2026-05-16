import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClicTo — Creative Playground",
  description: "A premium interactive canvas where every click becomes art.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
