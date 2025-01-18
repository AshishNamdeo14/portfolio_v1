import '@/app/ui/globals.css';
import { Metadata} from 'next';
import Analytics from './components/Analytics'
import { inter } from './ui/fonts';

export const metadata: Metadata = {
  title: 'Ashish Namdeo',
  description: "Explore Ashish Namdeo's professional portfolio showcasing expertise in web development, ReactJS, NodeJS, and Java. Discover projects, achievements, and skills in building efficient and innovative software solutions.",
};

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
     
      <html lang="en">
        <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"></link>
        </head>
        <Analytics/>
        <body className={`${inter.className} antialiased bg-slate-900 leading-relaxed text-slate-400 selection:bg-teal-300 selection:text-teal-900`}>{children}</body>
      </html>
    );
  }