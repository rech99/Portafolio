import type { Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import { LanguageProvider } from '@/app/lib/useLanguage'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const lexend = Lexend({ 
  subsets: ['latin'],
  variable: '--font-lexend',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Raul Campbell - Portfolio',
  description: 'Full-Stack Developer | Django & Next.js Specialist | Enterprise Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lexend.variable}`}>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
