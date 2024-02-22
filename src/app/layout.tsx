import React from 'react'
import { Onest } from 'next/font/google'
import './globals.css'

const onest = Onest({
  subsets : [ 'latin' ],
  variable: '--font-onest',
  weight  : [ '300', '400', '500', '600', '700' ]
})

export default function RootLayout(props: Readonly<{children: React.ReactNode}>) {
  return (
    <html className={`${onest.variable}`} lang='en'>
      <body>{props.children}</body>
    </html>
  )
}
