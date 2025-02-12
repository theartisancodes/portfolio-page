import React from 'react';
import { Outfit } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import './globals.css';
import type { Metadata } from 'next';
import { metadata as siteMetadata } from './metadata';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = siteMetadata;

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
