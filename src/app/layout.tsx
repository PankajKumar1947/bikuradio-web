import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Biku Radio - Your Ultimate Radio Streaming Experience',
  description: 'Biku Radio is a React Native app for streaming radio stations, featuring genre selection, artist-based exploration, favorites management, and trending stations.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black-900`}>{children}</body>
    </html>
  )
}

