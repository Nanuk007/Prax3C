// src/app/layout.tsx

import React from 'react';
import { Inter } from 'next/font/google';
import NavBar from '../components/NavBar';

const inter = Inter({ subsets: ['latin'] }); // Example of using a Google font

export const metadata = {
  title: 'Zochook',
  description: 'A social media application similar to Instagram.',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
        <NavBar />
      </body>
    </html>
  );
};
 
export default Layout;