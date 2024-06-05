import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Drive Mate",
  description: "Best carpooling app, connecting drivers and passengers.",
  keywords: [
    "carpooling",
    "ride-sharing",
    "drivers",
    "passengers",
    "transportation",
    "Drive Mate",
  ],
  applicationName: "Drive Mate",
  robots: "index",
  openGraph: {
    type: "website",
    url: "https://www.drivemate.com",
    title: "Drive Mate - Best Carpooling App",
    description: "Best carpooling app, connecting drivers and passengers.",
    images: [
      {
        url: "https://www.drivemate.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Drive Mate Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DriveMate",
    title: "Drive Mate - Best Carpooling App",
    description: "Best carpooling app, connecting drivers and passengers.",
  },
};

/**
 * Root layout component that wraps the entire application.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to render.
 * @returns {React.ReactNode} The rendered root layout component.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
