import { useEffect, useRef, useState } from 'react'
import { coHosts, hostStats, listing, similarStays, thingsToKnow } from '../data/listing'
import { Balloon, CheckCircle, ChevronLeft, ChevronRight, House, Minus, Plus, School, Search, Shield, Star } from './icons'
import { ShowMoreButton } from './Overview'
import { cx, hideScrollbar, sectionTitle } from './styles'
import { Avatar } from './ui'

const section = 'border-t border-line-soft py-12'
const subTitle = 'mb-4 text-[18px] font-medium'
const mapButtonShadow = 'shadow-[0_2px_6px_#0003]'

export function Location() {
  return (
    <section className={section} id="location">
      <h2 className={sectionTitle}>Where you’ll be</h2>
      <div className="mb-6 text-[16px]">Candolim, Goa, India</div>
      <div className="relative h-[480px] overflow-hidden rounded-xl bg-[#e8eef0]">
        <div className="absolute inset-0 [background:radial-gradient(circle_at_30%_40%,#cfe3c8_0_6%,transparent_6%),radial-gradient(circle_at_70%_60%,#cfe3c8_0_8%,transparent_8%),linear-gradient(115deg,#acd3e6_0_34%,#e9f0e4_34%_100%)] before:absolute before:inset-0 before:[background-image:linear-gradient(90deg,rgba(180,180,170,.5)_1px,transparent_1px),linear-gradient(0deg,rgba(180,180,170,.35)_1px,transparent_1px)] before:[background-size:90px_90px,90px_90px] before:opacity-50 before:content-['']" />
        <button
          className={cx('absolute top-3 left-3 flex h-10 w-10 items-center justify-center rounded-full border-none bg-white', mapButtonShadow)}
          aria-label="Search"
        >
          <span className="h-4 w-4">
            <Search />
          </span>
        </button>
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {[
            ['Zoom in', Plus],
            ['Zoom out', Minus],
          ].map(([label, Icon]) => (
            <button key={label} className={cx('flex h-10 w-10 items-center justify-center rounded-lg border-none bg-white', mapButtonShadow)} aria-label={label}>
              <span className="h-4 w-4">
                <Icon />
              </span>
            </button>
          ))}
        </div>
        <div className="absolute top-1/2 left-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-white shadow-[0_4px_12px_#0000004d]">
          <House />
        </div>
      </div>
      <div className="mt-[18px] text-[14px] text-ink">Exact location will be provided after booking.</div>
      <div className="mt-10 mb-3 text-[18px] font-medium">Neighbourhood highlights</div>
      <div className="text-[15px] leading-[1.5]">
        Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.
      </div>
      <ShowMoreButton className="mt-[18px]">Show more</ShowMoreButton>
    </section>
  )
}

export function MeetHost() {
  return (
    <section className={section}>
      <h2 className={sectionTitle}>Meet your host</h2>
      <div className="grid grid-cols-[340px_1fr] items-start gap-12 tab:grid-cols-1">
        <div>
          <div className="grid grid-cols-[1fr_100px] items-center rounded-[20px] border border-card-border px-6 py-[30px] shadow-card">
            <div className="text-center">
              <div className="relative mx-auto mb-3 h-[88px] w-[88px]">
                <img className="h-[88px] w-[88px] rounded-full object-cover" src={listing.host.avatar} alt="" />
                <span className="absolute right-0 bottom-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-rausch text-white">
                  <CheckCircle />
                </span>
              </div>
              <div className="text-[26px] font-medium">{listing.host.name}</div>
              <div className="mt-1 text-[13px]">Host</div>
            </div>
            <div className="border-l border-line-soft pl-5">
              {hostStats.map((stat, i) => (
                <div key={stat.label} className={cx('py-2.5', i > 0 && 'border-t border-line-soft')}>
                  <div className="text-[20px] font-medium">{stat.value}</div>
                  <div className="text-[12px]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-[22px] flex flex-col gap-3.5">
            {[
              [Balloon, 'Born in the 80s'],
              [School, 'Where I went to school: NICMAR GOA'],
            ].map(([Icon, text]) => (
              <div key={text} className="flex items-center gap-3.5 text-[15px]">
                <span className="h-6 w-6 text-ink">
                  <Icon />
                </span>
                {text}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className={subTitle}>Co-Hosts</div>
          <div className="mb-[30px] grid grid-cols-3 gap-x-2 gap-y-4">
            {coHosts.map((person) => (
              <div key={person.name} className="flex items-center gap-2.5 text-[14px]">
                <Avatar
                  person={person}
                  className="h-[34px] w-[34px] rounded-full object-cover"
                  initialClassName="flex h-[34px] w-[34px] items-center justify-center rounded-full text-[13px] font-medium"
                />
                <span>{person.name}</span>
              </div>
            ))}
          </div>
          <div className={subTitle}>Host details</div>
          <div className="text-[15px] leading-[1.6]">
            Response rate: 100%
            <br />
            Responds within an hour
          </div>
          <button className="mt-[18px] rounded-lg border-none bg-grey200 px-6 py-3.5 text-[15px] font-medium hover:bg-grey300">Message host</button>
          <div className="mt-[30px] flex items-start gap-2.5 text-[12px] text-muted2">
            <span className="h-6 w-6 shrink-0">
              <Shield />
            </span>
            <span>To help protect your payment, always use Airbnb to send money and communicate with hosts.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ThingsToKnow() {
  return (
    <section className={section}>
      <h2 className={sectionTitle}>Things to know</h2>
      <div className="grid grid-cols-3 gap-8 tab:grid-cols-1 tab:gap-6">
        {thingsToKnow.map(({ Icon, title, lines }) => (
          <div key={title}>
            <div className="mb-[18px] h-6 w-6 text-ink">
              <Icon />
            </div>
            <div className="mb-3.5 text-[16px] font-medium">{title}</div>
            {lines.map((line) => (
              <p key={line} className="mb-2 text-[14px] leading-[1.5]">
                {line}
              </p>
            ))}
            <a className="text-[14px] font-medium underline" href="#">
              Learn more
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export function SimilarStays() {
  const track = useRef(null)
  const [pager, setPager] = useState({ page: 1, pages: 1, atStart: true, atEnd: false })

  useEffect(() => {
    const el = track.current
    const update = () => {
      const max = el.scrollWidth - el.clientWidth
      const pages = Math.ceil(el.scrollWidth / el.clientWidth)
      setPager({
        page: Math.min(pages, Math.round(el.scrollLeft / el.clientWidth) + 1),
        pages,
        atStart: el.scrollLeft <= 1,
        atEnd: el.scrollLeft >= max - 1,
      })
    }
    update()
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const page = (direction) => track.current.scrollBy({ left: direction * track.current.clientWidth, behavior: 'smooth' })
  const pagerButton = 'flex h-8 w-8 items-center justify-center rounded-full border border-hairline bg-white disabled:opacity-30'

  return (
    <section className={section}>
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-[22px] leading-[26px] font-medium">More stays nearby</h2>
        <div className="flex items-center gap-2">
          <span className="mr-1.5 text-[14px] text-muted2">
            {pager.page} / {pager.pages}
          </span>
          <button className={pagerButton} disabled={pager.atStart} onClick={() => page(-1)}>
            <span className="h-3 w-3">
              <ChevronLeft />
            </span>
          </button>
          <button className={pagerButton} disabled={pager.atEnd} onClick={() => page(1)}>
            <span className="h-3 w-3">
              <ChevronRight />
            </span>
          </button>
        </div>
      </div>
      <div ref={track} className={cx('flex gap-5 overflow-x-auto scroll-smooth pb-1', hideScrollbar)}>
        {similarStays.map((stay) => (
          <div
            key={stay.title}
            className="min-w-0 flex-[0_0_calc((100%-80px)/5)] tab:basis-[calc((100%-40px)/3)] mob:basis-[calc((100%-20px)/2)]"
          >
            <img className="block aspect-square w-full rounded-xl object-cover" src={stay.image} alt="" loading="lazy" />
            <div className="mt-2 line-clamp-2 text-[14px] font-medium text-ellipsis">{stay.title}</div>
            <div className="mt-1 text-[13px]">
              {stay.price} &nbsp;{' '}
              <span className="inline-block h-2.5 w-2.5 align-[-1px]">
                <Star />
              </span>{' '}
              {stay.rating}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
