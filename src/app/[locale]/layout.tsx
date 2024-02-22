import React from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'

type Props = {
  children: React.ReactNode;
  params: { locale: string };
}

// function to get the translations
async function getMessages(locale: string) {
  try {
    return (await import(`../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }
}

// function to generate the routes for all the locales
export async function generateStaticParams() {
  return [ 'en', 'es' ].map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params: { locale }
}: Props) {
  const messages = await getMessages(locale)

  return (
    <html lang='en'>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
