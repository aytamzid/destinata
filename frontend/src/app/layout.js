import { Space_Grotesk, Roboto } from 'next/font/google'
import "./global.css";
import GlobalProvider from '@/providers/GlobalProvider';
import { Suspense } from 'react'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  weight: ['100', '300', '400', '500', '700', '900'],
})

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata = {
  title: 'Limousine',
  description: 'This is a limousine website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="auto" className={`${space_grotesk.variable} ${roboto.variable}`}>
      <head>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBo3nhh6QGMXU1Hw1C7XIy8V1P8KYCKx78&libraries=places"></script>
      </head>
      <body>
        <Suspense>
          <GlobalProvider>
            {children}
          </GlobalProvider>
        </Suspense>
      </body>
    </html>
  );
}
