import './globals.css';
import { Inter } from 'next/font/google';
import NavMainMenu from './nav-main-menu';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700', '900'] });

export const metadata = {
  title: 'MKT4RESTAURANTS | Restaurant Hospitality & Marketing Consulting',
  description: 'Bespoke strategy, communication, and marketing solutions for restaurants.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <header>
          <NavMainMenu />
        </header>

        <main>
          {children}
        </main>

        <footer>
          <div className="container">
            <p>© 2026 MKT4RESTAURANTS. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}