import { useEffect, useState } from 'react'
import logo from '../assets/logo-light.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header  className={`fixed top-0 left-0 w-full z-50 font-sans transition-all duration-300 border-b
        ${scrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-white/10 shadow-lg'
          : 'bg-transparent border-transparent'}`}>

  <div className="
    w-full
    max-w-[1060px]
    mx-auto
    px-4
    flex
    items-center
    justify-between
    h-[70px]
  ">

    {/* Logo */}
    <div className="flex items-center">
      <Link to="/">
        <img
          src={logo}
          alt="Cortexa Logo"
          className="h-11 w-auto object-contain"
        />
      </Link>
    </div>


    {/* Navigation */}
    <nav className="hidden md:flex items-center">
      <ul className="flex items-center gap-7 text-[15px] font-medium text-white/90">

        <li className="relative font-semibold text-white">
          <Link to="/">Home</Link>

          <span className="
            absolute
            -bottom-3
            left-0
            w-full
            h-[2px]
            bg-cyan-400
            rounded-full
          " />
        </li>

        <li>
          <Link to="/">Features</Link>
        </li>

        <li className="flex items-center gap-1">
          <Link to="/">Platform</Link>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </li>

        <li>
          <Link to="/">Pricing</Link>
        </li>

        <li className="flex items-center gap-1">
          <Link to="/">Resources</Link>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </li>

        <li>
          <Link to="/">About</Link>
        </li>

      </ul>
    </nav>


    {/* Right side */}
    <div className="flex items-center gap-5">

      {/* Language */}
      <div className="flex items-center gap-2 text-[15px] text-white">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9S9.5 5.5 12 3Z"
          />
        </svg>

        <span className='hover:text-sky-300'>EN</span>
        <span className="text-cyan-400">|</span>
        <span className='hover:text-sky-300'>العربية</span>

      </div>


      {/* Buttons */}
      <div className="flex items-center gap-2">

        {/* Login */}
        <button className="
          h-[36px]
          w-[64px]
          rounded-[8px]
          border border-cyan-400/60
          bg-transparent
          hover:bg-white
          text-[12px]
          font-medium
          text-white
          flex items-center justify-center
          transition
          hover:border-cyan-400
          hover:text-sky-700

        ">
          Login
        </button>


        {/* Get Started */}
        <button className="
          h-[36px]
          w-[102px]
          rounded-[8px]
          bg-gradient-to-r
          from-[#0066FF]
          via-[#0099FF]
          to-[#00D9FF]
          text-[12px]
          font-medium
          text-white
          flex items-center justify-center
          gap-2
          shadow-[0_4px_15px_rgba(0,180,255,0.25)]
          hover:brightness-110
          transition
        ">
          <span>Get Started</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-3.5 h-3.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>

      </div>

    </div>

  </div>

    </header>
  )
}