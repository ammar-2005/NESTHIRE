import { Link } from 'react-router-dom'
import logo from '../assets/new-logo.png'
import bgHero from '../assets/bg-heroSection.jpg'
import useAnimOnView from '../hooks/Useanimonview'



const CTA = { label: 'Explore the Platform', to: '/platform' }
const footerColumns = [
  {
    title: 'Features',
    links: [
      { label: 'Multi-Source Evidence', to: '/features' },
      { label: 'AI-Powered Matching', to: '/features' },
      { label: 'Explainable Intelligence', to: '/features' },
      { label: 'Human-in-the-Loop', to: '/features' },
    ],
  },
  {
    title: 'Platform',
    links: [
      { label: 'Jobs', to: '/platform' },
      { label: 'Candidates', to: '/platform' },
      { label: 'Assessments', to: '/platform' },
      { label: 'Interviews', to: '/platform' },
      { label: 'Analytics', to: '/platform' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Pricing', to: '/pricing' },
      { label: 'Blog', to: '/blog' },
      { label: 'Case Studies', to: '/case-studies' },
      { label: 'Terms of Service', to: '/terms' },
      { label: 'Privacy Policy', to: '/privacy' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Careers', to: '/careers' },
      { label: 'Contact Us', to: '/contact' },
    ],
  },
]

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
  { label: 'Contact', to: '/contact' },
]

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
  },
  {
    label: 'X',
    href: 'https://x.com/',
    icon: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/',
    icon: (
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    ),
  },
]

export default function Footer() {
  useAnimOnView()

  return (
    <footer className="relative bg-slate-950 bg-cover bg-bottom anim-onview anim-aurora" style={{ backgroundImage: `url(${bgHero})` }}>
      <div className="anim-beam" aria-hidden="true" />
     
      <div className="w-full max-w-[1060px] mx-auto px-4 py-10 grid gap-10 md:grid-cols-[2fr_3fr] relative z-10">
       
        <div>
          <span className="block mb-2 anim-track-in anim-d1 text-[11px] font-semibold tracking-[0.18em] text-cyan-400 uppercase">
            The NESTHIRE Platform
          </span>

          <h2 className="text-2xl font-bold leading-tight tracking-tight text-white">
            <span className="anim-mask">
              <span className="anim-mask-inner anim-d2">From Application to Hired</span>
            </span>
          </h2>

          <p className="anim-fade-up anim-d4 mt-3 max-w-[340px] text-[13px] leading-6 text-white/70">
            A complete recruitment and talent intelligence platform, designed
            for companies, recruiters, and organizations of all sizes.
          </p>

          <Link
            to={CTA.to}
            className="
              anim-fade-up anim-d5 anim-shine anim-nudge
              mt-5 inline-flex items-center justify-center gap-2
              h-9 px-5 rounded-lg
              bg-gradient-to-r from-[#0066FF] via-[#0099FF] to-[#00D9FF]
              text-[13px] font-semibold text-white
              shadow-[0_4px_15px_rgba(0,180,255,0.25)]
              hover:brightness-110 transition
            "
          >
            <span>{CTA.label}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-3.5 h-3.5 anim-nudge-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {footerColumns.map((col, i) => (
            <div key={col.title} className={`anim-fade-up anim-d${i + 3}`}>
              <h3 className="text-[13px] font-semibold text-white">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="anim-link-slide text-[13px] text-gray-300 hover:text-sky-300 transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 relative z-10 anim-fade-in anim-d7">
        <div className="w-full max-w-[1060px] mx-auto px-4 py-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/" className="flex flex-col gap-1">
            <img
              src={logo}
              alt="NESTHIRE Logo"
              className="h-7 w-auto object-contain self-start"
            />
            <span className="text-[7px] tracking-[0.2em] text-white/50 uppercase">
              Smart Hiring. Better Decisions.
            </span>
          </Link>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <ul className="flex items-center gap-5 text-[12px] text-white/70">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="anim-link-slide hover:text-sky-300 transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="flex items-center gap-3.5">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="anim-pop text-white/70 hover:text-sky-300 transition"
                  >
                    <span className="sr-only">{item.label}</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}