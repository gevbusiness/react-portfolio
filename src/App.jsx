//useState hook react re renders the page
import { useState } from 'react'
import Page from './components/Page'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
  const [currentPage, setCurrentPage] = useState('About')

  const handleNav = event => {
    event.preventDefault()
    setCurrentPage(event.target.textContent)
  }

  return (
    <div>
      <Header handleNav={handleNav} /> 
      <Page currentPage={currentPage} />
      <Footer />
    </div>
  )
}

export default App
