import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Footer } from '@/components/footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
})

export const metadata: Metadata = {
  title: 'Sonic Chess Academy | Learn Chess, Build Confidence, Master Strategy',

  description:
    'Sonic Chess Academy helps young minds learn strategy, build confidence, and grow through chess. Expert coaching in Hindi, English, Marathi & Tamil. Join our community today!',

  keywords: [
    'Sonic Chess Academy',
    'chess academy',
    'online chess coaching',
    'chess coaching',
    'learn chess',
    'online chess',
    'chess tournaments',
    'chess for kids',
    'FIDE coach',
    'online chess classes India',
    'Hindi chess coaching',
    'Marathi chess coaching',
    'Tamil chess coaching'
  ],

  authors: [{ name: 'Sonic Chess Academy' }],

  verification: {
    google: 'Jeiyx3a9_5DHKIXDx0KqoKMguVh7Ezw8j1MmoyL0ruA',
  },

  openGraph: {
    title:
      'Sonic Chess Academy | Learn Chess, Build Confidence, Master Strategy',

    description:
      'Helping young minds learn strategy, build confidence, and grow through chess.',

    url: 'https://sonic-chess-academy.vercel.app/',

    siteName: 'Sonic Chess Academy',

    type: 'website',

    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Sonic Chess Academy',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Sonic Chess Academy',
    description:
      'Helping young minds learn strategy, build confidence, and grow through chess.',
    images: ['/logo.png'],
  },

  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-sans antialiased min-h-screen bg-background">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
