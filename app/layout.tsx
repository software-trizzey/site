import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ViewTransitions } from 'next-view-transitions';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://tristandeane.ca'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Tristan Deane',
    template: '%s | Tristan Deane',
  },
  description: 'Software Engineer, hacker, and most recently, a proud dad.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className={`${inter.className}`}>
        <body className="antialiased tracking-tight">
          <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 bg-white text-gray-900">
            <main className="max-w-[60ch] mx-auto w-full space-y-6">
              {children}
            </main>
            <Footer />
            <Analytics />
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}

function Footer() {
  const links = [
    { name: '@softwaretrizzey', url: 'https://x.com/softwaretrizzey' },
    // { name: 'youtube', url: 'https://www.youtube.com/@leerob' }, TODO: uncomment when I have a youtube channel
    { name: 'linkedin', url: 'https://www.linkedin.com/in/software-trizzey' },
    { name: 'github', url: 'https://github.com/software-trizzey' },
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
