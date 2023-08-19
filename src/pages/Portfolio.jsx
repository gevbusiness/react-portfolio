import { useEffect } from 'react'

function Portfolio() {
useEffect(() => {
    document.title = 'Portfolio'
})
    return (
      <main>
        <h1>Portfolio</h1>

        <ul>
          <li>
            <a href="https://garagio-16dff4078a93.herokuapp.com/" target="_blank">Garagio</a>
          </li>
          <li>
            <a href="https://leftovers.herokuapp.com/" target="_blank">Leftovers</a>
          </li>
          <li>
            <a href="https://gevbusiness.github.io/spin-the-globe1/" target="_blank">Spin The Globe</a>
          </li>
        </ul>
      </main> 
    )
  }
  
  export default Portfolio