/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';

import PropTypes from 'prop-types';

import ThemeProvider from 'src/theme';
import { primaryFont, subtitleFont } from 'src/theme/typography';

import { SpeakersProvider } from 'src/contexts/speakers-context';
import { primary } from 'src/theme/palette';

export const viewport = {
  themeColor: primary.main,
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata = {
  title: 'Speakers Chase',
  description: 'Welcome to Speakers Chase. Select your speaker now.',
  keywords: 'speakers chase, speakers, chase, select speaker',
  manifest: '/manifest.json',
  icons: [
    { rel: 'icon', url: '/favicon/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon/favicon-16x16.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon/favicon-32x32.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/favicon/apple-touch-icon.png' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${primaryFont.className} ${subtitleFont.className}`}>
      <body>
        <SpeakersProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </SpeakersProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node,
};
