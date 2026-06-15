import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Асистент за јавни набавки",
  description: "AI веб-апликација за стручни мислења и анализа на јавни набавки",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mk">
      <body>{children}</body>
    </html>
  );
}
