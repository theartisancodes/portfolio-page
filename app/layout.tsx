import React from 'react';
import { Outfit } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: 'Joe Nzau',
  description: 'Portfolio Website'
};

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
