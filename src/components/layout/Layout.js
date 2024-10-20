import React from 'react'
import './Style.css'

const Layout = ({children}) => {
  return (
    <div className="layout">
      {children}
    </div>
  )
}

export default Layout
