import './globals.css';
import './docsearch.css';

import { Inter } from 'next/font/google';
import { Footer, Navbar } from './components';
import { SearchProvider } from './contexts';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

export const metadata = {
  title: 'Docs | Fastwa',
  icons: {
    icon: '/logo/logo_blue.png'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} style={{ colorScheme: 'dark' }}>
      <body className="bg-black">
        <SearchProvider>
          <Navbar />
          {children}
          <Footer />
        </SearchProvider>
      </body>
    </html>
  );
}
