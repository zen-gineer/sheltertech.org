import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export const CoreLayout = ({ children }) => (
  <div className='app'>
    <Header />
    {children}
    <Footer />
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
