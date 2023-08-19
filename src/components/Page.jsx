import About from "../pages/About"
import Portfolio from "../pages/Portfolio"
import Contact from "../pages/Contact"
import Resume from "../pages/Resume"

//npm i , npm run dev, and cntl c to crash

function Page({ currentPage }) {

    switch (currentPage) {
        case 'About':
            return <About />
        case 'Contact':
            return <Contact />
        case 'Portfolio':
            return <Portfolio />
        case 'Resume':
            return <Resume />
        default:
            return <About />



    }
}

export default Page