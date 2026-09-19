import { heroImages, listing } from '../data/listing'
import { Grid, Heart, HeartFilled, Share } from './icons'
import { cx } from './styles'

const actionButton =
  'inline-flex items-center gap-2 rounded-lg border-none bg-transparent px-2.5 py-2 text-[14px] font-medium transition-[background,scale] duration-[150ms,50ms] hover:bg-grey200 active:scale-[.96]'

export function TitleBar({ saved, onShare, onToggleSave }) {
  return (
    <section className="flex items-start justify-between gap-4 pt-8 pb-[18px]" id="photos">
      <h1 className="text-[26px] leading-[30px] font-medium tracking-normal">{listing.title}</h1>
      <div className="flex shrink-0 gap-0.5">
        <button className={actionButton} type="button" onClick={onShare}>
          <span className="inline-block h-4 w-4">
            <Share />
          </span>
          <span className="underline underline-offset-2">Share</span>
        </button>
        <button className={actionButton} type="button" onClick={onToggleSave}>
          <span className={cx('inline-block h-4 w-4', saved && 'text-rausch')}>{saved ? <HeartFilled /> : <Heart />}</span>
          <span className="underline underline-offset-2">{saved ? 'Saved' : 'Save'}</span>
        </button>
      </div>
    </section>
  )
}

export function HeroGallery({ onOpenPhoto, onShowAll }) {
  return (
    <section className="relative mb-12" aria-label="Photos of this place">
      <div
        className="grid aspect-[1120/494] grid-cols-[35fr_17fr_17fr] grid-rows-[1fr_1fr] gap-2 overflow-hidden rounded-xl mob:h-[280px] mob:grid-cols-1 mob:grid-rows-[280px]"
        id="heroGrid"
      >
        {heroImages.map((src, i) => (
          <button
            key={src}
            className="relative block overflow-hidden border-none bg-[#eee] p-0 after:absolute after:inset-0 after:bg-transparent after:transition-[background] after:duration-200 after:content-[''] first:row-span-2 hover:after:bg-[#0000001a] active:scale-[.997] in-[.kbd]:focus-visible:outline-offset-[3px] mob:[&:not(:first-child)]:hidden"
            type="button"
            aria-label={`${listing.title} image ${i + 1}`}
            onClick={() => onOpenPhoto(src)}
          >
            <img className="block h-full w-full object-cover transition-[filter] duration-200" src={src} alt="" decoding="async" loading={i === 0 ? 'eager' : 'lazy'} />
          </button>
        ))}
      </div>
      <button
        className="absolute right-6 bottom-6 inline-flex items-center gap-2 rounded-lg border border-ink bg-white px-[15px] py-[7px] text-[12px] leading-4 font-medium shadow-[0_2px_8px_#00000026] transition-[scale,background] duration-[100ms,150ms] hover:bg-grey100 active:scale-[.96]"
        type="button"
        onClick={onShowAll}
      >
        <span className="inline-block h-[15px] w-[15px]">
          <Grid />
        </span>
        Show all photos
      </button>
    </section>
  )
}
