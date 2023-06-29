import { FC, ReactNode } from 'react';

import './globals.css';
import { Inter } from 'next/font/google';

import Footer from '~/components/layout/Footer';
import Header from '~/components/layout/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Flexible Clone',
  description: 'Find and show off developer projects',
};

type Props = {
  children: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
