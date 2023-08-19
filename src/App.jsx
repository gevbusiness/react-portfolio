//useState hook react re renders the page
import { useState } from 'react'
import Page from './components/Page'

function App() {
  const [count, setCount] = useState(0)
  const [currentPage, setCurrentPage] = useState('About')

  const handleNav = event => {
    event.preventDefault()
    setCurrentPage(event.target.textContent)
  }

  return (
    <div>
      <nav>
        <a onClick={handleNav} href="#">About</a>
        <a onClick={handleNav} href="#">Contact</a>
        <a onClick={handleNav} href="#">Portfolio</a>
        <a onClick={handleNav} href="#">Resume</a>
      </nav>

      <Page currentPage={currentPage} />
    

    </div>
  )
}

export default App
