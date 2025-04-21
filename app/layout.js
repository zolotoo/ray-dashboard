import "../styles/globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
