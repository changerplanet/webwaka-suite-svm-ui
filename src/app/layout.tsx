import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WebWaka Suite SVM UI',
  description: 'Single Vendor Marketplace - Declarative UI consumer of canonical control layers',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
