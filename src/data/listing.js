import * as I from '../components/icons'

const img = (id) => `/assets/images/${id}.jpeg`

export const listing = {
  title: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10',
  subtitle: 'Entire serviced apartment in Candolim, India',
  facts: '3 guests · 1 bedroom · 1 bed · 1 bathroom',
  rating: '4.95',
  reviewCount: 19,
  price: '₹28,499',
  priceNote: 'for 5 nights',
  host: { name: 'Mirashya Homes', avatar: '/assets/images/avatars/host.jpeg', meta: '2 years hosting' },
  description:
    '🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it’s ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. ❤️🌴',
}

export const heroImages = [
  img('2367476f-11c4-4a14-a7c6-267be62c1d59'),
  img('090d8b0b-b539-42c0-84f8-e1fb0cdf9a93'),
  img('9be71047-fc52-438a-9270-75cb470f6752'),
  img('67c61c6f-6260-4809-9510-0360e58a345d'),
  img('c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d'),
]

export const highlights = [
  { Icon: I.OutdoorEntertainment, title: 'Outdoor entertainment', text: 'The pool and alfresco dining are great for summer trips.' },
  { Icon: I.CeilingFan, title: 'Designed for staying cool', text: 'Beat the heat with the A/C and ceiling fan.' },
  { Icon: I.SelfCheckIn, title: 'Self check-in', text: 'You can check in with the building staff.' },
]

export const sleepRooms = [
  { image: img('67c61c6f-6260-4809-9510-0360e58a345d'), title: 'Bedroom', text: '1 double bed' },
  { image: img('a9831aeb-f441-44f5-a38f-4cf54e3f0fcf'), title: 'Living room', text: '1 sofa' },
]

export const topAmenities = [
  { Icon: I.Kitchen, label: 'Kitchen' },
  { Icon: I.Wifi, label: 'Wifi' },
  { Icon: I.Workspace, label: 'Dedicated workspace' },
  { Icon: I.Parking, label: 'Free parking on premises' },
  { Icon: I.Pool, label: 'Pool' },
  { Icon: I.HotTub, label: 'Hot tub' },
  { Icon: I.Pets, label: 'Pets allowed' },
  { Icon: I.SecurityCamera, label: 'Exterior security cameras on property' },
  { Icon: I.CoAlarm, label: 'Carbon monoxide alarm', unavailable: true },
  { Icon: I.SmokeAlarm, label: 'Smoke alarm', unavailable: true },
]

export const amenityGroups = [
  {
    title: 'Bathroom',
    items: [
      { Icon: I.Hairdryer, label: 'Hairdryer' },
      { Icon: I.CleaningProducts, label: 'Cleaning products' },
      { Icon: I.Shampoo, label: 'Shampoo' },
      { Icon: I.HotWater, label: 'Hot water' },
      { Icon: I.ShowerGel, label: 'Shower gel' },
    ],
  },
  {
    title: 'Bedroom and laundry',
    items: [
      { Icon: I.WashingMachine, label: 'Washing machine' },
      { Icon: I.Hangers, label: 'Hangers' },
      { Icon: I.BedLinen, label: 'Bed linen' },
      { Icon: I.Blinds, label: 'Room-darkening blinds' },
      { Icon: I.Iron, label: 'Iron' },
      { Icon: I.ClothesStorage, label: 'Clothes storage' },
      { Icon: I.Cot, label: 'Cot' },
    ],
  },
  { title: 'Entertainment', items: [{ Icon: I.Tv, label: 'TV' }] },
  { title: 'Family', items: [{ Icon: I.Cot, label: 'Cot' }] },
  {
    title: 'Heating and cooling',
    items: [
      { Icon: I.AirConditioning, label: 'Air conditioning' },
      { Icon: I.CeilingFan, label: 'Ceiling fan' },
    ],
  },
  {
    title: 'Home safety',
    items: [
      { Icon: I.SecurityCamera, label: 'Exterior security cameras on property' },
      { Icon: I.CoAlarm, label: 'Carbon monoxide alarm', unavailable: true },
      { Icon: I.SmokeAlarm, label: 'Smoke alarm', unavailable: true },
    ],
  },
  {
    title: 'Internet and office',
    items: [
      { Icon: I.Wifi, label: 'Wifi' },
      { Icon: I.Workspace, label: 'Dedicated workspace' },
    ],
  },
  {
    title: 'Kitchen and dining',
    items: [
      { Icon: I.Kitchen, label: 'Kitchen' },
      { Icon: I.Fridge, label: 'Fridge' },
      { Icon: I.Fridge, label: 'Freezer' },
      { Icon: I.Microwave, label: 'Microwave' },
      { Icon: I.Kitchen, label: 'Cooking basics' },
      { Icon: I.Crockery, label: 'Crockery and cutlery' },
      { Icon: I.Kettle, label: 'Kettle' },
      { Icon: I.Coffee, label: 'Coffee' },
      { Icon: I.WineGlasses, label: 'Wine glasses' },
      { Icon: I.Toaster, label: 'Toaster' },
      { Icon: I.Blender, label: 'Blender' },
      { Icon: I.Cooker, label: 'Cooker' },
    ],
  },
  { title: 'Location features', items: [{ Icon: I.PrivateEntrance, label: 'Private entrance' }] },
  {
    title: 'Outdoor',
    items: [
      { Icon: I.Patio, label: 'Patio or balcony' },
      { Icon: I.OutdoorDining, label: 'Outdoor dining area' },
    ],
  },
  {
    title: 'Parking and facilities',
    items: [
      { Icon: I.Parking, label: 'Free parking on premises' },
      { Icon: I.Pool, label: 'Pool' },
      { Icon: I.HotTub, label: 'Hot tub' },
      { Icon: I.Gym, label: 'Gym' },
    ],
  },
  {
    title: 'Services',
    items: [
      { Icon: I.Pets, label: 'Pets allowed' },
      { Icon: I.SprayBottle, label: 'Cleaning available during stay' },
      { Icon: I.LongTermStays, label: 'Long-term stays allowed' },
      { Icon: I.SelfCheckIn, label: 'Self check-in' },
    ],
  },
]

// Static calendar state as rendered by the original (selected stay 18–23 Oct, some Nov dates blocked).
export const calendarMonths = [
  { name: 'October 2026', offset: 4, days: 31, start: 18, end: 23, blocked: [] },
  { name: 'November 2026', offset: 0, days: 30, blocked: [18, 19, 20, 21, 22, 23, 24, 29, 30] },
]

export const ratingBars = [
  { label: '5', pct: 95 },
  { label: '4', pct: 5 },
  { label: '3', pct: 0 },
  { label: '2', pct: 0 },
  { label: '1', pct: 0 },
]

export const categoryRatings = [
  { label: 'Cleanliness', value: '5.0', Icon: I.SprayBottle },
  { label: 'Accuracy', value: '5.0', Icon: I.CheckCircle },
  { label: 'Check-in', value: '5.0', Icon: I.Key },
  { label: 'Communication', value: '5.0', Icon: I.ChatBubble },
  { label: 'Location', value: '4.8', Icon: I.MapIcon },
  { label: 'Value', value: '4.8', Icon: I.Tag },
]

export const reviewChips = [
  ['comfort', 'Comfort', 6],
  ['accuracy', 'Accuracy', 5],
  ['hot-tub', 'Hot tub', 5],
  ['condition', 'Condition', 4],
  ['hospitality', 'Hospitality', 8],
  ['cleanliness', 'Cleanliness', 4],
  ['amenities', 'Amenities', 2],
  ['decor', 'Decor', 2],
  ['indoor-spaces', 'Indoor spaces', 2],
  ['location', 'Location', 2],
]

export const reviews = [
  {
    name: 'Amit',
    initial: 'A',
    colors: { background: 'rgb(247, 237, 226)', color: 'rgb(193, 133, 42)' },
    meta: '2 months on Airbnb',
    when: '1 week ago',
    text: 'Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.',
  },
  {
    name: 'Aheesh',
    avatar: '/assets/images/avatars/rev1.jpeg',
    meta: '3 years on Airbnb',
    when: '2 weeks ago',
    clamp: true,
    text: 'We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.',
  },
  {
    name: 'Samiksha',
    avatar: '/assets/images/avatars/rev2.jpeg',
    meta: '8 months on Airbnb',
    when: 'May 2026',
    text: 'the host nitish was really great help',
  },
  {
    name: 'Vedant',
    initial: 'V',
    colors: { background: 'rgb(239, 234, 247)', color: 'rgb(139, 111, 196)' },
    meta: '4 years on Airbnb',
    when: 'May 2026',
    clamp: true,
    text: 'We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine.\nThe highlight of our stay was definitely the jacuzzi. It was clean, well-kept, and the perfect place to relax after a day of exploring Goa. It added a luxurious touch to our vacation and made our experience even more memorable.\nThe property was exactly as described, well-equipped, and offered a peaceful atmosphere. We would highly recommend this place to anyone looking for a comfortable, clean, and relaxing stay in Goa. Looking forward to visiting again!',
  },
  {
    name: 'Vaibhav S',
    avatar: '/assets/images/avatars/rev3.jpeg',
    meta: '3 years on Airbnb',
    when: 'May 2026',
    text: "Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too.",
  },
  {
    name: 'Mohd',
    avatar: '/assets/images/avatars/rev4.jpeg',
    meta: '5 years on Airbnb',
    when: 'May 2026',
    text: 'Great place. Exactly as described in the listing.',
  },
]

export const hostStats = [
  { value: '1,463', label: 'Reviews' },
  { value: '4.68★', label: 'Rating' },
  { value: '2', label: 'Years hosting' },
]

export const coHosts = [
  { name: 'Sharath', avatar: '/assets/images/avatars/co1.jpg' },
  { name: 'Aman Dev Pahwa', avatar: '/assets/images/avatars/co2.jpg' },
  { name: 'Maria Karen Priyanka', avatar: '/assets/images/avatars/co3.jpg' },
  { name: 'Simran', avatar: '/assets/images/avatars/rev5.jpeg' },
  { name: 'Pallavi', avatar: '/assets/images/avatars/rev1.jpeg' },
  { name: 'Sanyukta', avatar: '/assets/images/avatars/rev2.jpeg' },
  { name: 'Shruti', initial: 'S', colors: { background: 'rgb(253, 231, 239)', color: 'rgb(212, 53, 110)' } },
  { name: 'Amisha', initial: 'A', colors: { background: 'rgb(231, 240, 253)', color: 'rgb(58, 110, 204)' } },
]

export const thingsToKnow = [
  {
    Icon: I.CalendarX,
    title: 'Cancellation policy',
    lines: ['Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.', 'Review this host’s full policy for details.'],
  },
  { Icon: I.Key, title: 'House rules', lines: ['Check-in after 2:00 pm', 'Checkout before 11:00 am', '3 guests maximum'] },
  {
    Icon: I.Shield,
    title: 'Safety & property',
    lines: ['Carbon monoxide alarm not reported', 'Smoke alarm not reported', 'Exterior security cameras on property'],
  },
]

export const similarStays = [
  { image: '/assets/images/similar/s1.jpeg', title: 'Beautiful Studio with a view to die for', price: '₹23,600', rating: '4.91' },
  { image: '/assets/images/similar/s2.jpeg', title: 'NAQAB - 1bhk with private pool', price: '₹42,218', rating: '4.95' },
  { image: '/assets/images/similar/s3.jpeg', title: 'Greentique Luxury Flat with plunge pool, Calangute', price: '₹44,506', rating: '4.94' },
  { image: '/assets/images/similar/s4.jpeg', title: 'The Tropical Studio | 5 mins to Beach', price: '₹22,824', rating: '4.96' },
  { image: '/assets/images/similar/s5.jpeg', title: 'Luxury Casa Bella 1BHK with plunge pool, Calangute', price: '₹39,942', rating: '4.95' },
  { image: '/assets/images/similar/s6.jpeg', title: 'Kanso by Earthen Window | Jacuzzi | Terrace | Pool', price: '₹45,648', rating: '5.0' },
  { image: '/assets/images/similar/s2.jpeg', title: 'Luxury Apt | Private Pool | 6 Mins from Beach', price: '₹48,786', rating: '4.93' },
  { image: '/assets/images/similar/s4.jpeg', title: 'Serendipity Cottage - Calm Stay in Calangute-Baga.', price: '₹22,824', rating: '4.92' },
]

// Photo tour: each room is a list of rows; a row holds one full-width photo or two side by side.
const rooms = [
  {
    name: 'Living room 1',
    details: 'Sofa · Air conditioning · Ceiling fan · TV',
    rows: [['a9831aeb-f441-44f5-a38f-4cf54e3f0fcf'], ['a45feaa2-b607-4092-83ac-5fd4b2894959', 'f1da1c3d-0d10-481e-9b63-c71f9073f30b']],
  },
  {
    name: 'Living room 2',
    details: 'Ceiling fan · Hot tub',
    rows: [
      ['090d8b0b-b539-42c0-84f8-e1fb0cdf9a93'],
      ['9be71047-fc52-438a-9270-75cb470f6752', 'f6de1663-4e9c-4414-b63b-29a154a92ee1'],
      ['2367476f-11c4-4a14-a7c6-267be62c1d59'],
      ['34529829-a971-44d3-ac2f-90ea3678a34d', '153aa732-4935-48b8-a6fe-b469b6af5efc'],
      ['3c6e6809-1bb1-47a6-8e24-aff593e1c28f'],
    ],
  },
  {
    name: 'Full kitchen',
    details: 'Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery',
    rows: [['56c44812-52c0-4481-90d8-101ec1f34c7a', 'ddc853d7-e658-405c-bedc-8f31106c447e']],
  },
  {
    name: 'Bedroom',
    details:
      'Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Cleaning available during stay · Cleaning products · Long-term stays allowed · Private entrance · Wifi',
    rows: [
      ['67c61c6f-6260-4809-9510-0360e58a345d'],
      ['1c827136-4a85-4fe0-8e69-3fd8ea19bb17', '0622ab42-b851-4d55-9d9f-df3143bc5909'],
      ['a74e3c0b-3188-4442-9146-1cd4d6ea45df'],
      ['48a8ffbc-fbf7-4f84-bc29-ee400da3f08b', '3cf31697-f3f3-4c60-82c4-029acb119ae4'],
    ],
  },
  { name: 'Full bathroom', details: 'Hairdryer · Hot water · Shampoo · Shower gel', rows: [['97c78f8a-5090-4663-aebc-ba4e13b47092']] },
  {
    name: 'Gym',
    details: 'Air conditioning · Gym · Exercise equipment · Ceiling fan',
    rows: [
      ['9aa8e65f-94ac-4ba0-9a10-9ec91e536d22'],
      ['246bd88d-4dd6-4117-a401-02a36ebfcf16', '4fede77d-7a71-446f-89e3-263af937f3fa'],
      ['79f59adb-5a5f-4d6c-8109-1f01f4ca0d03', 'f19d8c0a-1d88-42a4-9218-686d4f0db7e4'],
    ],
  },
  {
    name: 'Exterior',
    rows: [
      ['23ea6621-6f74-4baa-acea-2fd03e312b41'],
      ['5adfdf3e-d497-4efc-ab8c-fc559dab311e', '608748cd-6ee7-4a71-88a2-ba79d3ddba5a'],
      ['5b856fde-a393-41bf-b373-c9d02e64221f'],
      ['c904e1ab-a39d-4ef0-bdea-8c0bd16b9e3d', '42befad7-fb29-473d-91db-b03e7a544d1d'],
    ],
  },
  {
    name: 'Pool',
    details: 'Pool',
    rows: [['fc02f48f-a937-42c5-895d-f9cc3113d6ca'], ['929545d3-e241-46c0-8a70-c24531ce7b54', '8eb65a8b-e795-4870-b141-6f63b1be24ae']],
  },
  {
    name: 'Additional photos',
    rows: [
      ['70325367-cbae-4993-b560-18cd3f6edd53'],
      ['cc7a56bd-242c-498a-9aef-0cffac619e54', '30ad93b2-293f-494d-b645-626303c6cb93'],
      ['9642a60d-e9de-4e1a-89c2-9ebd230f4a74'],
      ['b6599f26-d65c-4df0-baf2-ef18c82a86a3', 'dc01fd46-b119-48d3-a43b-f6c093e26eca'],
      ['fe37b80e-da8a-4225-b27b-dfbb5d763c01'],
      ['3c90338e-86b4-423f-aae1-279e0ccc3a18', '862d936c-0f34-4e50-af87-b519e2781d19'],
      ['79addceb-8c2d-419b-80ff-e29af426a94c'],
    ],
  },
]

// Flatten into globally indexed photos so the lightbox can page through all of them in order.
let index = 0
export const tourRooms = rooms.map((room) => ({
  ...room,
  rows: room.rows.map((row) => row.map((id) => ({ src: img(id), index: index++ }))),
}))
export const tourPhotos = tourRooms.flatMap((room) => room.rows.flat().map((p) => ({ ...p, room: room.name })))
