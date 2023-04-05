"use client";

import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Navbar />
          <Hero />
          <Card />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
