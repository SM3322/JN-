import "./globals.css";

export const metadata = {
  title: "Бот за јавни набавки",
  description: "AI асистент за јавни набавки во Македонија",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mk">
      <body>{children}</body>
    </html>
  );
}
