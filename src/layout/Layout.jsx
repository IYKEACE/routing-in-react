import React from 'react'
import {Navbar, Footer} from "../components/index"

const Layout = ({children}) => {
  return (
    <section>
       <Navbar />
      {children}
      <Footer />
    </section>
  )
}

export default Layout
