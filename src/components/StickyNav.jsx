import { useEffect, useState } from 'react'
import { listing } from '../data/listing'
import { cx, reserveButton } from './styles'

const sections = [
  ['photos', 'Photos'],
  ['amenities', 'Amenities'],
  ['reviews', 'Reviews'],
  ['location', 'Location'],
]

// Measured on the original: the bar appears once the photo grid's bottom edge is within 40px of the
// viewport top, and a section becomes active when its top reaches 110px.
const SHOW_BELOW_GRID = 40
const ACTIVE_LINE = 110
const SCROLL_OFFSET = 80

export default function StickyNav({ onReserve }) {
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState('photos')

  useEffect(() => {
    const update = () => {
      const grid = document.getElementById('heroGrid')
      setVisible(grid.getBoundingClientRect().bottom < SHOW_BELOW_GRID)
      let current = sections[0][0]
      for (const [id] of sections) {
        if (document.getElementById(id).getBoundingClientRect().top <= ACTIVE_LINE) current = id
      }
      setActive(current)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const jump = (event, id) => {
    event.preventDefault()
    const top = document.getElementById(id).getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <div
      className={cx(
        'fixed inset-x-0 top-0 z-[45] border-b border-line-soft bg-white transition-[translate,opacity] duration-[250ms]',
        visible ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-full opacity-0',
      )}
      aria-hidden={!visible}
    >
      <div className="mx-auto flex h-[66px] max-w-[1280px] items-center justify-between px-20">
        <nav className="flex gap-1" aria-label="Listing sections">
          {sections.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => jump(e, id)}
              className={cx(
                'relative px-2 py-[22px] text-[14px] font-medium text-ink hover:text-black',
                active === id && "after:absolute after:inset-x-2 after:bottom-3 after:h-0.5 after:bg-ink after:content-['']",
              )}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-5">
          <div className="text-right text-[13px] leading-[1.2]">
            <div>
              <span className="text-[15px] font-medium">{listing.price}</span> <span className="text-ink">{listing.priceNote}</span>
            </div>
            <div className="mt-0.5 text-[13px] text-ink">
              <svg className="inline-block h-[11px] w-[11px] align-[-1px] fill-current" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M16 2l4 9 10 1-7.5 6.5L25 29l-9-5-9 5 2.5-10.5L2 12l10-1z" />
              </svg>{' '}
              {listing.rating} · <span>{listing.reviewCount} reviews</span>
            </div>
          </div>
          <button className={cx(reserveButton, 'h-10 px-5 text-[14px]')} type="button" onClick={onReserve}>
            Reserve
          </button>
        </div>
      </div>
    </div>
  )
}
