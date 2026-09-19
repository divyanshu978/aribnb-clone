import { Globe, Logo, Menu } from './icons'

export default function Header() {
  return (
    <header className="relative z-50 border-b border-line-soft bg-white px-20">
      <div className="mx-auto grid h-[88px] max-w-[1760px] grid-cols-[1fr_auto_1fr] items-center">
        <a className="inline-flex items-center justify-self-start text-rausch" href="#" aria-label="Airbnb homepage">
          <span className="block h-8">
            <Logo />
          </span>
        </a>

        <div
          className="inline-flex h-12 items-center justify-self-center rounded-[40px] border border-line bg-white px-2 shadow-[0_1px_4px_#00000014] transition-shadow duration-200 hover:shadow-[0_2px_8px_#0000001f] mob:hidden"
          role="search"
        >
          <button className="inline-flex h-12 items-center gap-2 rounded-[40px] border-none bg-transparent px-4 text-[14px] font-medium" type="button">
            <img className="-ml-1.5 block h-12 w-12 object-fill" src="/assets/images/ui/searchbar-house.png" alt="" aria-hidden="true" />
            Anywhere
          </button>
          <span className="h-6 w-px bg-line" />
          <button className="inline-flex h-12 items-center gap-2 rounded-[40px] border-none bg-transparent px-4 text-[14px] font-medium" type="button">
            Anytime
          </button>
          <span className="h-6 w-px bg-line" />
          <button className="inline-flex h-12 items-center gap-2 rounded-[40px] border-none bg-transparent px-4 text-[14px] font-normal text-muted2" type="button">
            Add guests
          </button>
          <button className="relative ml-2 h-8 w-8 rounded-full border-none bg-rausch" type="button" aria-label="Search">
            <span className="absolute inset-0 flex items-center justify-center">
              <svg className="block h-3.5 w-3.5" viewBox="0 0 32 32" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" aria-hidden="true">
                <circle cx="14" cy="14" r="9" />
                <path d="M21 21l7 7" />
              </svg>
            </span>
          </button>
        </div>

        <nav className="inline-flex items-center gap-2 justify-self-end">
          <a className="rounded-[22px] px-3.5 py-3 text-[14px] font-medium transition-[background] duration-[180ms] hover:bg-grey100 mob:hidden" href="#">
            Become a host
          </a>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border-none bg-grey200 text-ink transition-[background] duration-[180ms] hover:bg-grey300"
            type="button"
            aria-label="Choose a language and currency"
          >
            <span className="inline-block h-4 w-4">
              <Globe />
            </span>
          </button>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border-none bg-grey200 text-ink transition-[background] duration-[180ms] hover:bg-grey300"
            type="button"
            aria-label="Main navigation menu"
          >
            <span className="inline-block h-4 w-4">
              <Menu />
            </span>
          </button>
        </nav>
      </div>
    </header>
  )
}
