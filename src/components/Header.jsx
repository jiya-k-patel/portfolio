function Header() {
  return (
    <header className="border-b border-[#3B3561] bg-[#DDDBF1]/95 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <p className="text-sm font-semibold tracking-wide text-[#000000F]">JIYA PATEL</p>
        <ul className="flex gap-6 text-sm text-[#3B3561]">
          <li>
            <a href="#about" className="transition hover:text-[#000000F]">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="transition hover:text-[#000000F]">
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" className="transition hover:text-[#000000F]">
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="transition hover:text-[#000000F]">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
