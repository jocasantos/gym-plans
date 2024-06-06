import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gym Plans",
  description: "Gym plans for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: "#60a5fa" },
        baseTheme: neobrutalism,
      }}
    >
      <html lang="en">
        <body className={cn("font-poppins antialiased", poppins.className)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
