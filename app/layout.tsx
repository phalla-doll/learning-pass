import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Learning Pass | Tap to Learn',
  description: 'A modern learning platform that uses a virtual Learning Pass card to unlock real-world and digital education experiences.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans antialiased bg-zinc-950 text-zinc-50" suppressHydrationWarning>{children}</body>
    </html>
  );
}
