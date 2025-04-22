import type { Metadata } from 'next';
import { Montserrat, Unbounded } from 'next/font/google';
import { Header, Footer, YandexMetric } from './components';
import Script from 'next/script';
import './globals.scss';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  variable: '--font-family',
  display: 'swap',
});

const unbounded = Unbounded({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  variable: '--second-family',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hi-Fi компоненты Octavio: цифровой звук без сложностей',
  description:
    'Откройте мир Hi-Fi с Octavio! Легкая установка, мультирум, отличное звучание и поддержка всех стриминговых платформ...',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta property="og:image" content="/link-icon.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <link rel="icon" sizes="16x16 32x32 48x48 64x64" type="image/svg+xml" href="/favicon.svg" />
        <Script
          strategy="beforeInteractive"
          src="https://api-maps.yandex.ru/2.1/?apikey=3f26b556-b203-412e-aba8-23955b6433f7&lang=ru-RU"
        />
      </head>
      <body className={`${montserrat.variable} ${unbounded.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <YandexMetric />
      </body>
    </html>
  );
}
