import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Navbar from './components/Nav';

const poppins = Poppins({ subsets: ['devanagari'], weight: ['500'] });

export const metadata: Metadata = {
  title: 'Latest News',
  description: 'Created by Mary Mali',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
