import './globals.css'

export const metadata = {
  title: 'Gula Burgers || Hamburgesas Infernales',
  description: 'Veni a probar tu pecado mortal, Hamburgesas Infernales - Av.Libertador 14810 Acassuso, San Isidro',
    icons: {
      icon: [''],
      apple: [''],
      shortcut: [''],
    },
    manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
