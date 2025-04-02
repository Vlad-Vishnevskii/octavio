import type { Metadata } from 'next';
import { Montserrat, Unbounded } from 'next/font/google';
import { Header, Footer } from './components';
import './globals.scss';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'], // Указываем нужные веса
  variable: '--font-family', // Создаём переменную для CSS
  display: 'swap',
});

// Подключаем Unbounded
const unbounded = Unbounded({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  variable: '--second-family',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Octavio',
  description: 'Octavio – это Hi-Fi компоненты',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${montserrat.variable} ${unbounded.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
