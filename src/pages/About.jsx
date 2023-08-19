//waits for component to render, 
import { useEffect } from 'react'

function About() {
useEffect(() => {
    document.title='About'
})
    return (
      <h1>About Page!</h1>
    )
  }
  
  export default About
  