import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stripe Webhook Failure Debugger',
  description: 'Debug failed Stripe webhook deliveries instantly. Analyze failure reasons and get actionable fix recommendations with code examples.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="fc36fea2-6812-4cb2-b461-29e0cd2f44e0"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
