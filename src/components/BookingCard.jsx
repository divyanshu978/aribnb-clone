import { listing } from '../data/listing'
import { ChevronDown, Flag } from './icons'
import { cx, reserveButton } from './styles'

const label = 'text-[10px] font-bold tracking-[.04em]'
const value = 'mt-0.5 text-[14px]'

export default function BookingCard({ onReserve }) {
  return (
    <aside className="relative self-stretch tab:hidden">
      <div className="sticky top-[100px]">
        <div className="mb-6 flex items-center gap-3 rounded-xl border border-line bg-white p-4">
          <img className="block h-8 w-8 shrink-0 object-contain" src="/assets/images/ui/discount.svg" alt="" aria-hidden="true" />
          <div className="flex-1 text-[14px] leading-[1.3]">
            Get 10% off your next stay.
            <br />
            <a className="font-medium underline" href="#">
              Terms apply
            </a>
          </div>
          <button className="rounded-lg border-none bg-grey100 px-3.5 py-2 text-[14px] font-medium hover:bg-grey200" type="button">
            Claim
          </button>
        </div>

        <div className="rounded-xl border border-card-border px-6 pt-[22px] pb-6 shadow-card">
          <div className="mb-[18px] flex items-baseline gap-1.5">
            <span className="text-[22px] font-medium underline underline-offset-2">{listing.price}</span>
            <span className="text-[15px] text-ink">{listing.priceNote}</span>
          </div>
          <div className="overflow-hidden rounded-lg border border-hairline">
            <div className="grid grid-cols-2">
              <div className="border border-transparent px-3 py-2.5">
                <div className={label}>CHECK-IN</div>
                <div className={value}>10/18/2026</div>
              </div>
              <div className="border border-transparent border-l-hairline px-3 py-2.5">
                <div className={label}>CHECKOUT</div>
                <div className={value}>10/23/2026</div>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-hairline px-3 py-2.5">
              <div>
                <div className={label}>GUESTS</div>
                <div className={value}>2 guests</div>
              </div>
              <span className="h-4 w-4">
                <ChevronDown />
              </span>
            </div>
          </div>
          <div className="my-4 rounded-lg bg-grey100 p-2 text-center text-[13px] text-muted2">
            Free cancellation before <b className="font-medium text-ink">17 October</b>
          </div>
          <button className={cx(reserveButton, 'mt-0.5 h-12 w-full px-6 text-[16px]')} type="button" onClick={onReserve}>
            Reserve
          </button>
          <div className="mt-4 text-center text-[14px] text-muted2">You won't be charged yet</div>
        </div>

        <div className="mt-[26px] flex items-center justify-center gap-2 text-[14px] text-muted2">
          <span className="h-4 w-4">
            <Flag />
          </span>
          <a className="underline" href="#">
            Report this listing
          </a>
        </div>
      </div>
    </aside>
  )
}
