import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { AlarmManager } from "@/components/dsa/AlarmManager";

export const metadata: Metadata = {
  title: 'DSA Alarm',
  description: 'An app to enforce your DSA study habits.',
  manifest: '/manifest.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#121217',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <div className="relative flex min-h-screen w-full flex-col">
            <AlarmManager />
            <main className="flex-1">{children}</main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
