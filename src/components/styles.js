// Tailwind class strings shared by several components.
export const cx = (...classes) => classes.filter(Boolean).join(' ')

// Size (height, padding, font size) is added at each use site.
export const reserveButton =
  'rounded-full border-none bg-[linear-gradient(to_right,#e61e4d_0%,#e31c5f_50%,#d70466_100%)] font-medium text-white transition-[filter,scale] duration-[150ms,50ms] hover:bg-[linear-gradient(to_right,#d81b5f_0%,#c31a5b_50%,#bd0463_100%)] active:scale-[.985]'

export const outlineButton =
  'rounded-xl border border-ink bg-white px-[23px] py-[13px] text-[16px] font-medium transition-[background,scale] duration-[150ms,50ms] hover:bg-grey100 active:scale-[.98]'

// Round icon button used in the photo tour, lightbox and amenities modal.
export const iconButton =
  'inline-flex h-10 w-10 items-center justify-center rounded-full border-none bg-transparent transition-[background,scale] duration-[160ms,80ms] hover:bg-grey200 active:scale-90'

export const sectionTitle = 'mb-6 text-[22px] leading-[26px] font-medium'

export const hideScrollbar = '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
