import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'New assembly app',
  description: "A new app which allows you to assemble your citizens assemblys"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}><main className="flex min-h-screen">{children}</main></body>
    </html>
  )
}