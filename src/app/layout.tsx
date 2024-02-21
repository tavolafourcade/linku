import React from 'react'
import './globals.css'

export default function RootLayout(props: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang='en'>
      <body>{props.children}</body>
    </html>
  )
}
