import './globals.css';

import { Footer, Navbar } from './components';

export const metadata = {
  icons: {
    icon: '/logo/logo.png'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
