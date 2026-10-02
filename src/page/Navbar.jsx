import { useEffect, useState } from 'react'
import logo from '../assets/new-logo.png'
import { Link } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/', active: true },
  { label: 'Features', to: '/' },
  { label: 'Platform', to: '/', menu: true },
  { label: 'Pricing', to: '/' },
  { label: 'Resources', to: '/', menu: true },
  { label: 'About', to: '/' },
]

const Chevron = ({ className = 'w-3 h-3' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
)

const Arrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
    className="w-3.5 h-3.5"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
)

const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.8}
    stroke="currentColor"
    className="w-4 h-4"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9S9.5 5.5 12 3Z"
    />
  </svg>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Mobile menu: lock page scroll, close on Escape / when resizing to desktop
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header
      className={`anim-drop fixed top-0 left-0 w-full z-50 font-sans transition-all duration-300 border-b
        ${scrolled || open
          ? 'bg-slate-950/90 backdrop-blur-md border-white/10 shadow-lg'
          : 'bg-transparent border-transparent'}`}
    >
      <div className="w-full max-w-[1060px] mx-auto px-4 flex items-center justify-between h-[70px]">

        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" onClick={close}>
            <img src={logo} alt="NESTHIRE Logo" className="h-9 sm:h-11 w-auto object-contain" />
          </Link>
        </div>

        {/* Desktop navigation (lg and up) */}
        <nav className="hidden lg:flex items-center" aria-label="Main">
          <ul className="flex items-center gap-7 text-[15px] font-medium text-white/90">
            {links.map((item) => (
              <li
                key={item.label}
                className={`${item.menu ? 'flex items-center gap-1' : ''} ${
                  item.active ? 'relative font-semibold text-white' : ''
                }`}
              >
                <Link to={item.to} className={item.active ? '' : 'anim-underline'}>
                  {item.label}
                </Link>
                {item.menu && <Chevron />}
                {item.active && (
                  <span className="absolute -bottom-3 left-0 w-full h-[2px] bg-cyan-400 rounded-full" />
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">

          {/* Desktop: language + buttons */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="flex items-center gap-2 text-[15px] text-white">
              <GlobeIcon />
              <span className="hover:text-sky-300">EN</span>
              <span className="text-cyan-400">|</span>
              <span className="hover:text-sky-300">العربية</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                className="h-[36px] w-[64px] rounded-[8px] border border-cyan-400/60 bg-transparent hover:bg-white text-[12px] font-medium text-white flex items-center justify-center transition hover:border-cyan-400 hover:text-sky-700"
              >
                Login
              </button>

              <button
                className="h-[36px] w-[102px] rounded-[8px] bg-gradient-to-r from-[#0066FF] via-[#0099FF] to-[#00D9FF] text-[12px] font-medium text-white flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(0,180,255,0.25)] hover:brightness-110 transition"
              >
                <span>Get Started</span>
                <Arrow />
              </button>
            </div>
          </div>

          {/* Tablet: compact CTA next to the burger */}
          <button
            className="hidden sm:flex lg:hidden h-10 px-4 rounded-lg bg-gradient-to-r from-[#0066FF] via-[#0099FF] to-[#00D9FF] text-[13px] font-semibold text-white items-center justify-center gap-2 shadow-[0_4px_15px_rgba(0,180,255,0.25)] active:brightness-110 transition"
          >
            <span>Get Started</span>
            <Arrow />
          </button>

          {/* Burger (below lg) */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="lg:hidden -mr-2 w-11 h-11 flex items-center justify-center rounded-lg text-white active:bg-white/10"
          >
            <span className="relative block w-6 h-4">
              <span
                className={`absolute left-0 h-0.5 w-6 rounded bg-white transition-all duration-300 ${
                  open ? 'top-[7px] rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-6 rounded bg-white transition-all duration-300 ${
                  open ? 'opacity-0 scale-x-0' : ''
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-6 rounded bg-white transition-all duration-300 ${
                  open ? 'top-[7px] -rotate-45' : 'top-[14px]'
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile / tablet menu panel */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`lg:hidden absolute top-full left-0 w-full max-h-[calc(100dvh-70px)] overflow-y-auto overscroll-contain bg-slate-950/95 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all duration-300 ${
          open ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-3 pointer-events-none'
        }`}
      >
        <div className="max-w-[1060px] mx-auto px-4 pt-2 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
          <ul>
            {links.map((item, i) => (
              <li
                key={item.label}
                className={`border-b border-white/10 transition-all duration-300 ${
                  open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
                style={{ transitionDelay: open ? `${80 + i * 45}ms` : '0ms' }}
              >
                <Link
                  to={item.to}
                  onClick={close}
                  className={`flex items-center justify-between py-4 text-[17px] font-medium active:text-cyan-300 ${
                    item.active ? 'text-cyan-400' : 'text-white/90'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    {item.active && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                    {item.label}
                  </span>
                  {item.menu && <Chevron className="w-4 h-4 text-white/50" />}
                </Link>
              </li>
            ))}
          </ul>

          <div
            className={`mt-5 transition-all duration-300 ${
              open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
            style={{ transitionDelay: open ? '400ms' : '0ms' }}
          >
            <div className="flex items-center gap-2 text-[15px] text-white mb-4">
              <GlobeIcon />
              <span>EN</span>
              <span className="text-cyan-400">|</span>
              <span>العربية</span>
            </div>

            <div className="flex gap-3">
              <button
                onClick={close}
                className="flex-1 h-12 rounded-lg border border-cyan-400/60 text-[15px] font-medium text-white active:bg-white/10 transition"
              >
                Login
              </button>
              <button
                onClick={close}
                className="flex-1 h-12 rounded-lg bg-gradient-to-r from-[#0066FF] via-[#0099FF] to-[#00D9FF] text-[15px] font-semibold text-white flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(0,180,255,0.25)] active:brightness-110 transition"
              >
                <span>Get Started</span>
                <Arrow />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}