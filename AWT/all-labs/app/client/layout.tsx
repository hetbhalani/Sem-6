import React from 'react'

function client({children}:Readonly<{children:React.ReactNode}>) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}

export default client