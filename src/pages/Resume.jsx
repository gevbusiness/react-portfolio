import {useEffect} from 'react'

function Resume() {
useEffect(() => {
    document.title = 'Resume'
})
    return (
      <main>
        <h1>Resume Page!</h1>

        <p>
          <a href="#" target="_blank">LinkedIn Resume</a>
        </p>
      </main>
    )
  }
  
  export default Resume