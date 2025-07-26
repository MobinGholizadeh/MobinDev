import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mobin Gholizadeh - Full-Stack Developer",
  description:
    "Professional portfolio of Mobin Gholizadeh, a passionate full-stack developer specializing in .NET, React, and modern web technologies.",
  keywords: "Full-Stack Developer, .NET, React, Tailwind CSS, MongoDB, SQL Server, Microservices, SignalR, RabbitMQ",
  authors: [{ name: "Mobin Gholizadeh" }],
  openGraph: {
    title: "Mobin Gholizadeh - Full-Stack Developer",
    description: "Professional portfolio showcasing expertise in modern web development technologies",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
