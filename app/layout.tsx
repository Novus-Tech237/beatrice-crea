import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Beatrice Designs ',
  description: 'Découvrez Vêtements Afritudes, où chaque vêtement raconte une histoire. Styles authentiques et modernes inspirés de nos racines.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Anna.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
