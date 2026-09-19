import { useState } from 'react'
import { calendarMonths, highlights, listing, sleepRooms, topAmenities } from '../data/listing'
import { ChevronLeft, ChevronRight, Keyboard, Laurel } from './icons'
import { cx, outlineButton, sectionTitle } from './styles'
import { Stars } from './ui'

const divider = 'border-t border-line-soft py-8'

export function ShowMoreButton({ children, className, ...props }) {
  return (
    <button
      className={cx(
        'inline-flex items-center gap-1.5 border-none bg-transparent p-0 text-[16px] font-medium text-ink underline underline-offset-[3px]',
        className,
      )}
      {...props}
    >
      {children}
      <span className="h-3.5 w-3.5">
        <ChevronRight />
      </span>
    </button>
  )
}

function GuestFavourite() {
  return (
    <div className="mt-2 flex items-center gap-[22px] rounded-2xl border border-line px-7 py-4">
      <div className="flex shrink-0 items-center gap-1 text-ink">
        <span className="inline-flex h-9 items-center">
          <Laurel />
        </span>
        <span className="text-center text-[15px] leading-[1.15] font-medium">
          Guest
          <br />
          favourite
        </span>
        <span className="inline-flex h-9 -scale-x-100 items-center">
          <Laurel />
        </span>
      </div>
      <div className="flex-1 text-[14px] leading-[1.3]">One of the most loved homes on Airbnb, according to guests</div>
      <div className="flex shrink-0 items-center gap-[22px]">
        <div className="text-center">
          <div className="text-[20px] font-bold">{listing.rating}</div>
          <Stars className="mt-0.5 flex justify-center gap-0.5 text-ink" starClassName="h-2.5 w-2.5" />
        </div>
        <div className="h-[34px] w-px bg-line" />
        <div className="text-center">
          <div className="text-[20px] font-bold">{listing.reviewCount}</div>
          <div className="text-[13px] font-medium">Reviews</div>
        </div>
      </div>
    </div>
  )
}

function Description() {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="border-t border-line-soft pt-[26px] pb-8">
      <div className="mb-2 flex items-center gap-2.5 rounded-xl bg-grey100 px-[18px] py-4 text-[14px] text-ink">
        <span>
          Some info has been automatically translated.{' '}
          <a className="font-medium underline" href="#">
            Show original
          </a>
        </span>
      </div>
      <p
        className={cx(
          'text-[16px] leading-[1.5] whitespace-pre-line',
          !expanded && 'max-h-[6.2em] overflow-hidden [mask-image:linear-gradient(#000_62%,transparent)]',
        )}
      >
        {listing.description}
      </p>
      <ShowMoreButton className="mt-3.5" onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Show less' : 'Show more'}
      </ShowMoreButton>
    </div>
  )
}

export function AmenityRow({ item, className, labelClassName }) {
  const { Icon, label, unavailable } = item
  return (
    <div className={cx(className, unavailable && 'text-muted2')}>
      <span className="h-6 w-6 shrink-0">
        <Icon />
      </span>
      <span className={cx(labelClassName, unavailable && 'line-through')}>{label}</span>
    </div>
  )
}

function CalendarMonth({ month }) {
  const cells = [...Array(month.offset).fill(null), ...Array.from({ length: month.days }, (_, i) => i + 1)]
  return (
    <div>
      <div className="mb-[18px] text-center text-[16px] font-medium">{month.name}</div>
      <div className="mb-1.5 grid grid-cols-7">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
          <span key={i} className="text-center text-[12px] font-medium text-ink">
            {d}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {cells.map((day, i) => {
          const isStart = day === month.start
          const isEnd = day === month.end
          const inRange = month.start && day > month.start && day < month.end
          return (
            <div
              key={i}
              className={cx(
                'relative flex aspect-square items-center justify-center text-[14px]',
                inRange ? 'rounded-none bg-grey200' : 'rounded-full',
                day === null && 'invisible',
                month.blocked.includes(day) && 'text-[#ddd] line-through',
                (isStart || isEnd) &&
                  "bg-ink text-white before:absolute before:inset-y-0 before:z-[-1] before:w-1/2 before:bg-grey200 before:content-['']",
                isStart && 'before:right-0',
                isEnd && 'before:left-0',
              )}
            >
              {day}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function Calendar() {
  const navButton = 'inline-flex h-8 w-8 items-center justify-center rounded-full border-none bg-transparent hover:bg-grey200'
  return (
    <div className={divider}>
      <div>
        <div className="text-[22px] font-medium">5 nights in Candolim</div>
        <div className="mt-1.5 mb-[22px] text-[14px] text-muted2">18 Oct 2026 - 23 Oct 2026</div>
      </div>
      <div className="relative grid grid-cols-2 gap-x-14 gap-y-0 mob:grid-cols-1">
        <div className="absolute -top-1 flex w-full justify-between">
          <button className={navButton} aria-label="Previous month">
            <span className="h-3 w-3">
              <ChevronLeft />
            </span>
          </button>
          <button className={navButton} aria-label="Next month">
            <span className="h-3 w-3">
              <ChevronRight />
            </span>
          </button>
        </div>
        {calendarMonths.map((month) => (
          <CalendarMonth key={month.name} month={month} />
        ))}
      </div>
      <div className="mt-[18px] flex items-center justify-between">
        <span className="inline-flex h-[22px] w-[30px] items-center justify-center rounded border border-hairline" aria-hidden="true">
          <Keyboard />
        </span>
        <button className="border-none bg-transparent px-1.5 py-px text-[14px] font-medium underline">Clear dates</button>
      </div>
    </div>
  )
}

export default function Overview({ onShowAmenities }) {
  return (
    <div className="min-w-0" id="contentLeft">
      <div className="pb-6">
        <h2 className="text-[22px] leading-[26px] font-medium">{listing.subtitle}</h2>
        <div className="mt-1.5 text-[16px]">{listing.facts}</div>
      </div>

      <GuestFavourite />

      <div className="flex items-center gap-4 py-[26px]">
        <img className="h-[46px] w-[46px] rounded-full object-cover" src={listing.host.avatar} alt="" />
        <div>
          <div className="text-[16px] font-medium">Hosted by {listing.host.name}</div>
          <div className="mt-0.5 text-[14px] text-muted2">{listing.host.meta}</div>
        </div>
      </div>

      <div className="flex flex-col gap-6 border-t border-line-soft pt-8 pb-8">
        {highlights.map(({ Icon, title, text }) => (
          <div key={title} className="flex items-start gap-6">
            <div className="h-6 w-6 shrink-0 text-ink">
              <Icon />
            </div>
            <div>
              <div className="text-[14px] leading-5 font-medium">{title}</div>
              <div className="mt-0.5 text-[14px] text-muted2">{text}</div>
            </div>
          </div>
        ))}
      </div>

      <Description />

      <div className={divider}>
        <h2 className={sectionTitle}>Where you'll sleep</h2>
        <div className="grid grid-cols-2 gap-4 mob:grid-cols-1">
          {sleepRooms.map((room) => (
            <div key={room.title}>
              <img className="block aspect-[3/2] w-full rounded-lg border border-card-border object-cover" src={room.image} alt="" />
              <div className="mt-3.5 text-[15px] font-medium">{room.title}</div>
              <div className="mt-0.5 text-[14px] text-muted2">{room.text}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={divider} id="amenities">
        <h2 className={sectionTitle}>What this place offers</h2>
        <div className="mb-6 grid grid-cols-2 gap-x-2 gap-y-4">
          {topAmenities.map((item) => (
            <AmenityRow key={item.label} item={item} className="flex items-center gap-4 py-1 text-[16px]" />
          ))}
        </div>
        <button className={outlineButton} onClick={onShowAmenities}>
          Show all 50 amenities
        </button>
      </div>

      <Calendar />
    </div>
  )
}
