import { useEffect, useRef } from 'react'
import { amenityGroups, tourPhotos, tourRooms } from '../data/listing'
import { ArrowLeft, Close, Grid, Heart, LightboxNext, LightboxPrev, Share } from './icons'
import { AmenityRow } from './Overview'
import { cx, iconButton } from './styles'

const ROOM_TOP_GAP = 24 // a room heading lands 24px below the tour header

// Overlays fade (and optionally slide) out, and only turn `invisible` once the fade has finished.
const overlayState = (open, closed, shown) => (open ? shown : closed)

export function PhotoTour({ open, target, onClose, onOpenPhoto }) {
  const scroller = useRef(null)

  const scrollToRoom = (room, behavior) => {
    const el = scroller.current
    if (room == null) return el.scrollTo({ top: 0, behavior })
    const section = document.getElementById(`tour-room-${room}`)
    const top = section.getBoundingClientRect().top - el.getBoundingClientRect().top + el.scrollTop - ROOM_TOP_GAP
    el.scrollTo({ top, behavior })
  }

  // Opening jumps straight to the requested room (or the top); `target` is a fresh object per open.
  useEffect(() => {
    if (open && target) scrollToRoom(target.room, 'instant')
  }, [open, target])

  return (
    <div
      className={cx(
        'fixed inset-0 z-[120] flex flex-col bg-white',
        overlayState(
          open,
          'invisible translate-y-[28px] opacity-0 [transition:opacity_.3s_var(--ease-airbnb),translate_.3s_var(--ease-airbnb),visibility_0s_linear_.3s]',
          'visible translate-y-0 opacity-100 [transition:opacity_.3s_var(--ease-airbnb),translate_.3s_var(--ease-airbnb)]',
        ),
      )}
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
    >
      <header className="z-[5] flex h-[88px] shrink-0 items-center bg-white px-8">
        <button className={cx(iconButton, '-ml-2')} type="button" aria-label="Back" onClick={onClose}>
          <span className="inline-block h-[18px] w-[18px]">
            <ArrowLeft />
          </span>
        </button>
        <h2 className="absolute left-1/2 -translate-x-1/2 text-[16px] font-medium">Photo tour</h2>
        <div className="ml-auto flex gap-0.5">
          <button className={iconButton} type="button" aria-label="Share">
            <span className="inline-block h-[18px] w-[18px]">
              <Share />
            </span>
          </button>
          <button className={iconButton} type="button" aria-label="Save">
            <span className="inline-block h-[18px] w-[18px]">
              <Heart />
            </span>
          </button>
        </div>
      </header>

      <div ref={scroller} className="min-h-0 flex-1 overflow-y-auto">
        <div className="mx-auto max-w-[1024px] px-6 pb-24">
          <nav className="mb-10 grid grid-cols-8 gap-3 tab:grid-cols-4 mob:grid-cols-2" aria-label="Photo categories">
            {tourRooms.map((room, i) => (
              <button
                key={room.name}
                className="group flex flex-col gap-2 border-none bg-transparent p-0 text-left in-[.kbd]:focus-visible:outline-offset-[3px]"
                type="button"
                aria-label={room.name}
                onClick={() => scrollToRoom(i, 'smooth')}
              >
                <img
                  className="block aspect-[106/100] w-full rounded-lg object-cover transition-[scale,filter] duration-[250ms,200ms] ease-[var(--ease-airbnb),ease] group-hover:scale-[1.04] group-hover:brightness-[.94] group-active:scale-[.99]"
                  loading="lazy"
                  alt=""
                  src={room.rows[0][0].src}
                />
                <span className="text-[14px] text-muted2">{room.name}</span>
              </button>
            ))}
          </nav>

          <div>
            {tourRooms.map((room, i) => (
              <section key={room.name} className="grid grid-cols-2 items-start gap-x-[60px] gap-y-5 pt-4 pb-1 tab:grid-cols-1" id={`tour-room-${i}`}>
                <div className="sticky top-5 tab:static">
                  <div className="text-[32px] leading-[1.1] font-medium tracking-[-.02em]">{room.name}</div>
                  {room.details && <div className="mt-2 text-[16px] leading-[1.4] text-muted2">{room.details}</div>}
                </div>
                <div className="flex flex-col gap-3">
                  {room.rows.map((row, r) => (
                    <div key={r} className={cx('grid gap-3', row.length === 1 ? 'grid-cols-1' : 'grid-cols-2 mob:grid-cols-1')}>
                      {row.map((photo) => (
                        <button
                          key={photo.index}
                          className="group relative block aspect-[3/2] w-full overflow-hidden rounded-lg border-none bg-[#eee] p-0 after:absolute after:inset-0 after:bg-transparent after:transition-[background] after:duration-200 after:content-[''] hover:after:bg-[#00000014] in-[.kbd]:focus-visible:outline-offset-[3px]"
                          type="button"
                          aria-label={`Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image ${photo.index + 1}`}
                          onClick={() => onOpenPhoto(photo.index)}
                        >
                          <img
                            className="block h-full w-full object-cover transition-[scale] duration-[400ms] ease-airbnb group-hover:scale-[1.04] group-active:scale-100"
                            loading="lazy"
                            alt={room.name}
                            src={photo.src}
                          />
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Lightbox({ index, onClose, onNavigate }) {
  const open = index != null
  const photo = open ? tourPhotos[index] : null
  const navButton =
    'absolute top-1/2 z-[3] inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-ink bg-white transition-[background,scale] duration-[160ms,80ms] hover:bg-grey100 active:scale-[.92] disabled:cursor-default disabled:border-[#ccc] disabled:opacity-[.28] disabled:hover:bg-white'

  return (
    <div
      className={cx(
        'fixed inset-0 z-[140] flex items-center justify-center bg-white',
        overlayState(open, 'invisible opacity-0 [transition:opacity_.25s_ease,visibility_0s_linear_.25s]', 'visible opacity-100 [transition:opacity_.25s_ease]'),
      )}
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
    >
      <header className="absolute inset-x-0 top-0 z-[3] flex h-[72px] items-center px-6">
        <button className={cx(iconButton, '-ml-2')} type="button" aria-label="Show all photos" onClick={onClose}>
          <span className="inline-block h-[18px] w-[18px]">
            <Grid />
          </span>
        </button>
        <div className="absolute left-1/2 -translate-x-1/2 text-[16px] font-medium">{photo?.room}</div>
        <div className="ml-auto flex items-center gap-3">
          <span className="text-[14px]">{photo && `${index + 1} of ${tourPhotos.length}`}</span>
          <button className={iconButton} type="button" aria-label="Close" onClick={onClose}>
            <span className="inline-block h-[18px] w-[18px]">
              <Close />
            </span>
          </button>
        </div>
      </header>
      <button className={cx(navButton, 'left-5')} type="button" aria-label="Previous" disabled={!open || index === 0} onClick={() => onNavigate(-1)}>
        <span className="inline-block h-[18px] w-[18px]">
          <LightboxPrev />
        </span>
      </button>
      <div className="flex h-full w-full items-center justify-center px-24 py-[88px] mob:px-3 mob:py-20">
        {photo && <img key={index} className="h-auto max-h-full w-auto max-w-[min(1100px,100%)] object-contain" src={photo.src} alt={photo.room} />}
      </div>
      <button
        className={cx(navButton, 'right-5')}
        type="button"
        aria-label="Next"
        disabled={!open || index === tourPhotos.length - 1}
        onClick={() => onNavigate(1)}
      >
        <span className="inline-block h-[18px] w-[18px]">
          <LightboxNext />
        </span>
      </button>
    </div>
  )
}

export function AmenitiesModal({ open, onClose }) {
  return (
    <div
      className={cx(
        'fixed inset-0 z-[150] flex items-center justify-center bg-black/50',
        overlayState(open, 'invisible opacity-0 [transition:opacity_.2s_ease,visibility_0s_linear_.2s]', 'visible opacity-100 [transition:opacity_.2s_ease]'),
      )}
      aria-hidden={!open}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className={cx(
          'flex max-h-[calc(100vh-96px)] w-[780px] max-w-[calc(100vw-48px)] flex-col overflow-hidden rounded-xl bg-white transition-[translate] duration-[250ms] ease-airbnb',
          open ? 'translate-y-0' : 'translate-y-5',
        )}
        role="dialog"
        aria-modal="true"
        aria-label="What this place offers"
      >
        <div className="flex h-16 shrink-0 items-center px-6">
          <button className={cx(iconButton, '-ml-2')} type="button" aria-label="Close" onClick={onClose}>
            <span className="inline-block h-[18px] w-[18px]">
              <Close />
            </span>
          </button>
        </div>
        <div className="overflow-y-auto px-12 pb-12">
          <h2 className="mt-3 mb-6 text-[22px] font-medium">What this place offers</h2>
          {amenityGroups.map((group) => (
            <div key={group.title} className="mb-[30px]">
              <h3 className="mb-1 text-[18px] font-medium">{group.title}</h3>
              {group.items.map((item, i) => (
                <AmenityRow key={i} item={item} className="flex items-center gap-4 border-b border-line-soft py-4 text-[16px]" />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Toast({ message, visible }) {
  return (
    <div
      className={cx(
        'pointer-events-none fixed bottom-8 left-1/2 z-[200] -translate-x-1/2 rounded-lg bg-ink px-[22px] py-3.5 text-[14px] font-medium text-white transition-[opacity,translate] duration-200',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0',
      )}
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  )
}
