function Header({handleNav}) {
return (
    <header>
        <h1>
            Gevorgs Portfolio
        </h1>
        <nav>
        <a onClick={handleNav} href="#">About</a>
        <a onClick={handleNav} href="#">Contact</a>
        <a onClick={handleNav} href="#">Portfolio</a>
        <a onClick={handleNav} href="#">Resume</a>
      </nav>

    </header>
)
}

export default Header;