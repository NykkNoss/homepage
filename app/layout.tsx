import type { Metadata } from "next";
import "./globals.css"; // importa i CSS globali

export const metadata: Metadata = {
  title: "nicoberghi.net",
  description: "Homepage di Nico Berghi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
