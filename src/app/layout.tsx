import React from 'react'

export default function RootLayout(props: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang='en'>
      <body>{props.children}</body>
    </html>
  )
}
