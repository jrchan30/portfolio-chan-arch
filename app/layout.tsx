import BaseNavigation from '@/components/Base/BaseNavigation';
import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Merriweather } from 'next/font/google';
import { LenisScroller } from '@/components/LenisScoller';
import BaseFooter from '@/components/Base/BaseFooter';

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const merriweather = Merriweather({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
});

export const metadata: Metadata = {
  title: 'Russ-Arch',
  description: 'Jonathan Russell Chan - Portfolio Project',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <LenisScroller />
      <body
        className={`${merriweather.variable} ${poppins.variable} font-poppins relative shadow-md`}
      >
        <div className="sticky top-0 z-20">
          <BaseNavigation />
        </div>
        <main className="leading-chill">{children}</main>
        <BaseFooter />
      </body>
    </html>
  );
}
