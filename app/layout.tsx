import './globals.css';
import { ReactNode } from 'react';
import Nav from '../components/Nav';

export const metadata = {
  title: 'Next App',
  description: 'Learning Next.js deeply',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main style={{ padding: '20px' }}>{children}</main>
      </body>
    </html>
  );
}
