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
  metadataBase: new URL('https://octavio-audio.ru/'),
  title: 'Hi-Fi компоненты Octavio: цифровой звук без сложностей',
  description:
    'Откройте мир Hi-Fi с Octavio! Легкая установка, мультирум, отличное звучание и поддержка всех стриминговых платформ.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    images: [
      {
        url: '/link-icon.png',
        width: 500,
        height: 500,
        type: 'image/png',
      },
    ],
  },
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
        <main>{children}</main>
        <Footer />
        <YandexMetric />
        <Script
          strategy="beforeInteractive"
          src="https://api-maps.yandex.ru/2.1/?apikey=3f26b556-b203-412e-aba8-23955b6433f7&lang=ru-RU"
        />
      </body>
    </html>
  );
}
