import './clerk.css'
import './globals.css'
import './prism.css'

import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata, Viewport } from 'next'

import { ThemeProvider } from '~/app/(main)/ThemeProvider'
import { url } from '~/lib'
import { zhCN } from '~/lib/clerkLocalizations'
import { sansFont } from '~/lib/font'
import { seo } from '~/lib/seo'

export const metadata: Metadata = {
  metadataBase: seo.url,
  title: {
    template: '%s | Nik',
    default: seo.title,
  },
  description: seo.description,
  keywords: 'Nik,nikdev,王旭,开发者,前端,FPV飞手,探索者,创新',
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: {
      default: seo.title,
      template: '%s | Nik',
    },
    description: seo.description,
    siteName: 'Nik',
    locale: 'zh_CN',
    type: 'website',
    url: 'https://nikdev.cn',
  },
  twitter: {
    site: '@thecalicastle',
    creator: '@thecalicastle',
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
  },
  alternates: {
    canonical: url('/'),
    types: {
      'application/rss+xml': [{ url: 'rss', title: 'RSS 订阅' }],
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000212' },
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={zhCN}>
      <html
        lang="zh-CN"
        className={`${sansFont.variable} m-0 h-full p-0 font-sans antialiased`}
        suppressHydrationWarning
      >
        <body className="flex h-full flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
