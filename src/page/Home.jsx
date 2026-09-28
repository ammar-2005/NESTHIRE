import { Link } from "react-router-dom";
import { Brain } from "lucide-react";

import laptop from "../assets/laptop.jpg";

export default function Home() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center text-white pt-[70px] bg-slate-950 bg-cover bg-center bg-no-repeat" id="hero">
          {/* Hero Container */}
          <div
            className="
            w-full
            max-w-[1060px]
            mx-auto
            px-4
            pt-5
            flex  items-center justify-between
            gap-5
          "
          >
            {/* Hero Content */}
            <div className="max-w-[560px]">
              {/* Small Heading */}
              <span
                className="
                block
                mb-4
                text-[12px]
                font-semibold
                tracking-[0.18em]
                text-cyan-400
                uppercase
              "
              >
                AI-POWERED EVIDENCE-BASED RECRUITMENT
              </span>

              {/* Main Heading */}
              <h1
                className="
                text-5xl
                md:text-6xl
                font-bold
                leading-[1.05]
                tracking-tight
                text-white
              "
              >
                Smarter Hiring.
                <br />
                <span
                  className="
                  bg-gradient-to-r
                  from-[#0066FF]
                  via-[#0099FF]
                  to-[#00D9FF]
                  bg-clip-text
                  text-transparent
                "
                >
                  Better Decisions.
                </span>
              </h1>

              {/* Description */}
              <p
                className="
                mt-6
                max-w-[500px]
                text-[16px]
                leading-7
                text-white/80
              "
              >
                CORTEXA combines AI and real evidence to help organizations
                find, assess, and hire the right talent — faster, fairer, and
                with full transparency.
              </p>

              {/* Buttons */}
              <div className="flex items-center gap-4 mt-7">
                {/* Get Started */}
                <button
                  className="
                    h-11
                    w-[136px]
                    rounded-lg
                    bg-gradient-to-r
                    from-[#0066FF]
                    via-[#0099FF]
                    to-[#00D9FF]
                    text-[14px]
                    font-semibold
                    text-white
                    flex
                    items-center
                    justify-center
                    gap-2
                    shadow-[0_4px_20px_rgba(0,180,255,0.25)]
                    hover:brightness-110
                    transition
                  "
                >
                  <span>Get Started</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>

                {/* Watch Demo */}
                <button
                  className="
                    h-11
                    w-[146px]
                    rounded-lg
                    border
                    border-cyan-400/70
                    bg-transparent
                    text-[14px]
                    font-semibold
                    text-white
                    flex
                    items-center
                    justify-center
                    gap-2
                    hover:bg-cyan-400/10
                    transition
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-cyan-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                    />
                  </svg>

                  <span>Watch Demo</span>
                </button>
              </div>

              {/* Stats */}
              <div
                className="
                flex
                items-center
                mt-10
              "
              >
                {/* Stat 1 */}
                <div
                  className="
                  pr-7
                  mr-7
                  border-r
                  border-white/20
                "
                >
                  <span
                    className="
                    block
                    text-2xl
                    font-bold
                    text-white
                  "
                  >
                    90%
                  </span>

                  <p
                    className="
                    mt-1
                    text-[11px]
                    text-white/70
                    whitespace-nowrap
                  "
                  >
                    Better Match Accuracy
                  </p>
                </div>

                {/* Stat 2 */}
                <div
                  className="
                  pr-7
                  mr-7
                  border-r
                  border-white/20
                "
                >
                  <span
                    className="
                    block
                    text-2xl
                    font-bold
                    text-white
                  "
                  >
                    70%
                  </span>

                  <p
                    className="
                    mt-1
                    text-[11px]
                    text-white/70
                    whitespace-nowrap
                  "
                  >
                    Faster Hiring Process
                  </p>
                </div>

                {/* Stat 3 */}
                <div
                  className="
                  pr-7
                  mr-7
                  border-r
                  border-white/20
                "
                >
                  <span
                    className="
                    block
                    text-2xl
                    font-bold
                    text-white
                  "
                  >
                    100%
                  </span>

                  <p
                    className="
                    mt-1
                    text-[11px]
                    text-white/70
                    whitespace-nowrap
                  "
                  >
                    Explainable Results
                  </p>
                </div>

                {/* Stat 4 */}
                <div>
                  <span
                    className="
                    block
                    text-2xl
                    font-bold
                    text-white
                  "
                  >
                    0%
                  </span>

                  <p
                    className="
                    mt-1
                    text-[11px]
                    text-white/70
                    whitespace-nowrap
                  "
                  >
                    CV-only Decisions
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
        {/* info -section */}
<section
  id="info"
  className="pt-16 pb-16 bg-white info-section"
>
  <div
    className="
      w-full
      max-w-[1060px]
      mx-auto
      px-4
      flex
      items-center
      justify-between
      gap-12
    "
  >

    {/* LEFT */}
    <div className="w-[40%]">

      {/* Small title */}
      <div className="mb-3">
        <span
          className="
            text-[15px]
            font-semibold
            tracking-[0.18em]
            text-sky-500
            uppercase
          "
        >
          WHY CORTEXA
        </span>

        {/* Small line */}
        <div className="mt-1 w-10 h-px bg-sky-400" />
      </div>


      {/* Heading */}
      <h2
        className="
          text-[40px]
          leading-[1.05]
          font-bold
          tracking-tight
          text-slate-900
        "
      >
        Evidence-Based
        <br />
        Talent Intelligence
      </h2>


      {/* Description */}
      <p
        className="
          mt-5
          max-w-97.5
          text-[14px]
          leading-[1.7]
          text-slate-500
        "
      >
        Unlike traditional recruitment platforms, CORTEXA goes beyond
        the CV. We use multi-source evidence, AI-powered analysis, and
        explainable insights to help you make confident, data-driven
        hiring decisions — with humans always in control.
      </p>


      {/* Discover Link */}
      <Link
        to="/"
        className="
          inline-flex
          items-center
          gap-2
          mt-5
          text-[13px]
          font-semibold
          text-sky-500
          hover:text-sky-600
          transition
        "
      >
        <span>Discover the Platform</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </Link>

    </div>


    {/*RIGHT */}
    <div className="w-[60%]">

      <div className="grid grid-cols-2 gap-3">

        {/* CARD 1 */}
        <div
          className="
            min-h-[105px]
            p-5
            bg-white
            border
            border-slate-200
            rounded-lg
            shadow-[0_2px_10px_rgba(15,23,42,0.04)]
            hover:shadow-md
            transition
          "
        >

          {/* Icon */}
          <div
            className="
              w-9
              h-9
              rounded-full
              bg-sky-50
              flex
              items-center
              justify-center
              text-blue-600
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.7}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
          </div>


          <h3 className="mt-3 text-[15px] font-bold text-slate-900">
            Multi-Source Evidence
          </h3>

          <p className="mt-1 text-[12px] leading-[1.5] text-slate-500">
            Combine CVs, practical tests, and structured interviews
            for a complete talent picture.
          </p>

        </div>


        {/* CARD 2  */}
        <div
          className="
            min-h-[105px]
            p-5
            bg-white
            border
            border-slate-200
            rounded-lg
            shadow-[0_2px_10px_rgba(15,23,42,0.04)]
            hover:shadow-md
            transition
          "
        >

          {/* Icon */}
          <div
            className="
              w-9
              h-9
              rounded-full
              bg-sky-50
              flex
              items-center
              justify-center
            "
          >
            <Brain className="w-5 h-5 text-blue-600" />
          </div>


          <h3 className="mt-3 text-[15px] font-bold text-slate-900">
            AI-Powered Matching
          </h3>

          <p className="mt-1 text-[12px] leading-[1.5] text-slate-500">
            Semantic understanding, not just keywords. Find the real
            fit, not just the right words.
          </p>

        </div>


        {/* CARD 3 */}
        <div
          className="
            min-h-[105px]
            p-5
            bg-white
            border
            border-slate-200
            rounded-lg
            shadow-[0_2px_10px_rgba(15,23,42,0.04)]
            hover:shadow-md
            transition
          "
        >

          {/* Icon */}
          <div
            className="
              w-9
              h-9
              rounded-full
              bg-sky-50
              flex
              items-center
              justify-center
              text-blue-600
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.7}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
              />
            </svg>
          </div>


          <h3 className="mt-3 text-[15px] font-bold text-slate-900">
            Explainable Intelligence
          </h3>

          <p className="mt-1 text-[12px] leading-[1.5] text-slate-500">
            See the evidence behind every recommendation. Full
            transparency and auditability.
          </p>

        </div>


        {/* CARD 4 */}
        <div
          className="
            min-h-[105px]
            p-5
            bg-white
            border
            border-slate-200
            rounded-lg
            shadow-[0_2px_10px_rgba(15,23,42,0.04)]
            hover:shadow-md
            transition
          "
        >

          {/* Icon */}
          <div
            className="
              w-9
              h-9
              rounded-full
              bg-sky-50
              flex
              items-center
              justify-center
              text-blue-600
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.7}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
              />
            </svg>
          </div>


          <h3 className="mt-3 text-[15px] font-bold text-slate-900">
            Human-in-the-Loop
          </h3>

          <p className="mt-1 text-[12px] leading-[1.5] text-slate-500">
            AI assists. Recruiters, hiring managers and authorized
            humans make the final decision.
          </p>

        </div>

      </div>

    </div>

  </div>
</section>
      </main>
    </>
  );
}
