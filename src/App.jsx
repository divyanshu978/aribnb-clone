import { useCallback, useEffect, useRef, useState } from 'react'
import BookingCard from './components/BookingCard'
import Header from './components/Header'
import { AmenitiesModal, Lightbox, PhotoTour, Toast } from './components/Overlays'
import Overview from './components/Overview'
import Reviews from './components/Reviews'
import StickyNav from './components/StickyNav'
import { HeroGallery, TitleBar } from './components/TitleAndGallery'
import { Location, MeetHost, SimilarStays, ThingsToKnow } from './components/WideSections'
import { tourPhotos, tourRooms } from './data/listing'

const TOAST_MS = 1800

function useToast() {
  const [toast, setToast] = useState({ message: '', visible: false })
  const timer = useRef()
  const show = useCallback((message) => {
    clearTimeout(timer.current)
    setToast({ message, visible: true })
    timer.current = setTimeout(() => setToast((t) => ({ ...t, visible: false })), TOAST_MS)
  }, [])
  return [toast, show]
}

// Focus rings are only shown after the visitor presses Tab, and hidden again on the next click.
function useKeyboardMode() {
  useEffect(() => {
    const onKey = (e) => e.key === 'Tab' && document.body.classList.add('kbd')
    const onMouse = () => document.body.classList.remove('kbd')
    window.addEventListener('keydown', onKey)
    window.addEventListener('mousedown', onMouse)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('mousedown', onMouse)
    }
  }, [])
}

const roomOfPhoto = (src) => tourRooms.findIndex((room) => room.rows.flat().some((p) => p.src === src))

export default function App() {
  const [toast, showToast] = useToast()
  const [saved, setSaved] = useState(false)
  const [tour, setTour] = useState(null) // { room } while open; a new object per open re-runs its scroll
  const [lightbox, setLightbox] = useState(null) // index into tourPhotos
  const [amenitiesOpen, setAmenitiesOpen] = useState(false)
  useKeyboardMode()

  const anyOverlay = tour || lightbox != null || amenitiesOpen
  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', Boolean(anyOverlay))
  }, [anyOverlay])

  const navigate = useCallback((step) => {
    setLightbox((i) => Math.min(tourPhotos.length - 1, Math.max(0, i + step)))
  }, [])

  // Escape closes the top-most layer; arrow keys page through the lightbox.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        if (lightbox != null) setLightbox(null)
        else if (amenitiesOpen) setAmenitiesOpen(false)
        else if (tour) setTour(null)
      } else if (lightbox != null && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) {
        navigate(e.key === 'ArrowRight' ? 1 : -1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, amenitiesOpen, tour, navigate])

  const toggleSave = () => {
    showToast(saved ? 'Removed from wishlist' : 'Saved to wishlist')
    setSaved(!saved)
  }
  const reserve = () => showToast("You won't be charged yet")

  return (
    <>
      <a
        className="absolute top-0 -left-[999px] z-[200] rounded-br-lg bg-white px-4 py-2.5 text-ink focus:left-0"
        href="#main"
      >
        Skip to content
      </a>
      <Header />
      <StickyNav onReserve={reserve} />

      <main id="main">
        <div className="mx-auto max-w-[1280px] px-20 tab:px-10 mob:px-6">
          <TitleBar saved={saved} onShare={() => showToast('Share options')} onToggleSave={toggleSave} />
          <HeroGallery onOpenPhoto={(src) => setTour({ room: roomOfPhoto(src) })} onShowAll={() => setTour({ room: null })} />

          <div className="grid grid-cols-[minmax(0,1fr)_372px] items-stretch gap-x-24 gap-y-0 tab:grid-cols-1">
            <Overview onShowAmenities={() => setAmenitiesOpen(true)} />
            <BookingCard onReserve={reserve} />
          </div>

          <div className="border-t border-line-soft">
            <Reviews />
            <Location />
            <MeetHost />
            <ThingsToKnow />
            <SimilarStays />
          </div>
        </div>
      </main>

      <PhotoTour open={Boolean(tour)} target={tour} onClose={() => setTour(null)} onOpenPhoto={setLightbox} />
      <Lightbox index={lightbox} onClose={() => setLightbox(null)} onNavigate={navigate} />
      <AmenitiesModal open={amenitiesOpen} onClose={() => setAmenitiesOpen(false)} />
      <Toast message={toast.message} visible={toast.visible} />
    </>
  )
}
