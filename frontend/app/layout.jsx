import Head from './cabecera'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head />
      <body className='bg-slate-600'>{children}</body>
    </html>
  )
}
