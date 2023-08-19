import { useEffect } from 'react'

function Contact() {
useEffect(() => {
    document.title = 'Contact'
})
    return (
      <main>
        <h1>Contact Page!</h1>

        <form>
          <label>Phone:<br />
            <input type="text" /><br />
          </label>
          <label>Email:<br />
            <input type="text" /><br />
          </label>
          <label>Message:<br />
            <textarea></textarea><br />
          </label>

          <button>Send message</button>
        </form>

      </main>
    )
  }
  
  export default Contact