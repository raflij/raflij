import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rafli J - Software Engineer',
  description: 'Experienced full stack developer with web applications',
  keywords: ['Rafli, Rafli J, Rafli Junior, Nasrullah Abdulrahman Rafli, Rafli Abdulrahman, Abdulrahman Rafli'],
  copyright: 'Rafli J',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rafli J - Software Engineer',
    description: 'Experienced full stack developer with web applications',
    images: ['https://raflij.web.app/images/og.png'],
  },
  coverage: 'worldwide',
  openGraph: {
    title: 'Rafli J - Software Engineer',
    description: 'Experienced full stack developer with web applications',
    url: 'https://raflij.web.app/',
    locale: 'id_ID',
    site_name: 'Rafli J',
    images: [
      {
        url: 'https://raflij.web.app/images/og.png',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth hover:scroll-auto'>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
