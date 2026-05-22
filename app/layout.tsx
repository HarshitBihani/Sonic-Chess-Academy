import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Footer } from '@/components/footer'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space'
});

export const metadata: Metadata = {
  title: 'Sonic Chess Academy | Learn Chess, Build Confidence, Master Strategy',
  description: 'Sonic Chess Academy helps young minds learn strategy, build confidence, and grow through chess. Expert coaching in Hindi, English & Tamil. Join our community today!',
  keywords: ['chess academy', 'chess coaching', 'learn chess', 'online chess', 'chess tournament', 'chess for kids'],
  authors: [{ name: 'Sonic Chess Academy' }],
  openGraph: {
    title: 'Sonic Chess Academy | Learn Chess, Build Confidence, Master Strategy',
    description: 'Helping young minds learn strategy, build confidence, and grow through chess.',
    type: 'website',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}>
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
