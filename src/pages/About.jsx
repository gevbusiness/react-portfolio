//waits for component to render, 
import { useEffect } from 'react'

function About() {
useEffect(() => {
    document.title='About'
})
    return (
      <main>
        <h1>About Page!</h1>

        <p>Gevorg loves to work with motivated individuals. He is passionate about software development projects which help solve world problems.</p>
      </main>
    )
  }
  
  export default About
  