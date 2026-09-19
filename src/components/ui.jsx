import { Star } from './icons'

export function Stars({ className, starClassName }) {
  return (
    <span className={className}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={starClassName}>
          <Star />
        </span>
      ))}
    </span>
  )
}

export function Avatar({ person, className, initialClassName }) {
  if (person.avatar) return <img className={className} src={person.avatar} alt="" />
  return (
    <div className={initialClassName} style={person.colors}>
      {person.initial}
    </div>
  )
}
