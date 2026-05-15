import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mokhtar Ibrahim | Luxury Real Estate Expert Egypt",
    template: "%s | Mokhtar Ibrahim",
  },
  description:
    "Visionary real estate advisory for high-net-worth individuals. Discover unparalleled architectural mastery across the North Coast, Cairo, Alexandria and the New Capital.",
  keywords: [
    "luxury real estate Egypt",
    "North Coast properties",
    "Cairo real estate",
    "Alexandria properties",
    "New Capital Egypt",
    "Mokhtar Ibrahim", // إعادة تعيين الكلمات المفتاحية لاسمك
  ],
  openGraph: {
    title: "Mokhtar Ibrahim | Luxury Real Estate Expert Egypt",
    description:
      "Curating Egypt's most exclusive addresses for discerning investors.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600&family=Manrope:wght@200;300;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-background min-h-screen relative overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}