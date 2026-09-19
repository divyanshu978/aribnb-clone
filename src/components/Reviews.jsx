import { useState } from 'react'
import { categoryRatings, listing, ratingBars, reviewChips, reviews } from '../data/listing'
import { cx, hideScrollbar, outlineButton } from './styles'
import { Avatar, Stars } from './ui'

function Review({ review }) {
  const [expanded, setExpanded] = useState(false)
  const clamped = review.clamp && !expanded
  return (
    <div>
      <div className="mb-2.5 flex items-center gap-3">
        <Avatar
          person={review}
          className="h-[42px] w-[42px] rounded-full object-cover"
          initialClassName="flex h-[42px] w-[42px] items-center justify-center rounded-full text-[17px] font-medium"
        />
        <div>
          <div className="text-[15px] font-medium">{review.name}</div>
          <div className="text-[13px] text-muted2">{review.meta}</div>
        </div>
      </div>
      <div className="mb-1.5 flex items-center gap-1.5 text-[13px]">
        <Stars className="flex gap-px" starClassName="h-2.5 w-2.5" />
        <span>·</span>
        <span>{review.when}</span>
      </div>
      <div className={cx('text-[15px] leading-[1.4] whitespace-pre-line', clamped && 'line-clamp-4')}>{review.text}</div>
      {review.clamp && (
        <button className="mt-2 border-none bg-transparent p-0 text-[15px] font-medium underline" onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Show less' : 'Show more'}
        </button>
      )}
    </div>
  )
}

export default function Reviews() {
  return (
    <section className="py-12" id="reviews">
      <div className="pt-2 pb-10 text-center">
        <div className="flex items-center justify-center gap-2">
          <img className="h-[110px]" src="/assets/images/ui/laurel-left.png" alt="" />
          <div className="text-[100px] font-medium tracking-[-.03em]">{listing.rating}</div>
          <img className="h-[110px]" src="/assets/images/ui/laurel-right.png" alt="" />
        </div>
        <div className="mt-2 text-[22px] font-medium">Guest favourite</div>
        <div className="mx-auto mt-2 max-w-[420px] text-[15px] leading-[1.35]">
          This home is a guest favourite based on ratings, reviews and reliability
        </div>
        <button className="mt-3.5 border-none bg-transparent px-1.5 py-px text-[14px] font-medium underline">How reviews work</button>
      </div>

      <div className="grid grid-cols-[1.4fr_repeat(6,1fr)] gap-0 pt-2 pb-10 tab:grid-cols-2">
        <div className="px-6 tab:px-0 tab:py-2.5">
          <div className="mb-3 text-[14px] font-medium">Overall rating</div>
          <div className="flex flex-col gap-[3px]">
            {ratingBars.map((bar) => (
              <div key={bar.label} className="grid grid-cols-[8px_1fr] items-center gap-2.5">
                <span className="text-[12px] text-ink">{bar.label}</span>
                <div className="h-1 overflow-hidden rounded-xs bg-line-soft">
                  <div className="h-full bg-ink" style={{ width: `${bar.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        {categoryRatings.map(({ label, value, Icon }) => (
          <div key={label} className="border-l border-line px-6 tab:border-l-0! tab:px-0 tab:py-2.5">
            <div className="mb-3 text-[14px] font-medium">{label}</div>
            <div className="mb-2 text-[18px] font-medium">{value}</div>
            <div className="h-8 w-8 text-ink">
              <Icon />
            </div>
          </div>
        ))}
      </div>

      <div className={cx('flex gap-3 overflow-x-auto pt-1 pb-[30px]', hideScrollbar)}>
        {reviewChips.map(([file, label, count]) => (
          <button
            key={file}
            className="flex shrink-0 items-center gap-2 rounded-2xl border border-line bg-white py-[13px] pr-[18px] pl-3.5 text-[14px] font-medium"
          >
            <img className="block h-5 w-5 shrink-0 object-contain" src={`/assets/images/chips/${file}.png`} alt="" aria-hidden="true" />
            {label} <span className="font-normal text-muted2">{count}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-x-20 gap-y-12 pb-10 tab:grid-cols-1 tab:gap-[30px]">
        {reviews.map((review) => (
          <Review key={review.name} review={review} />
        ))}
      </div>
      <button className={outlineButton}>Show all {listing.reviewCount} reviews</button>
    </section>
  )
}
