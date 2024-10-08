import './globals.css'

export const metadata = {
  title: 'AnimeOrange',
  description: 'Assistir animes online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
