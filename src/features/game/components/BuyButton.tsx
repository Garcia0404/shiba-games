import { Link } from "react-router"
import type { Game } from "../../games/types"

interface BuyButtonProps {
  game: Game
}
const toMessage = (text: string) => {
  const encodedText = encodeURIComponent(text)
  return `https://wa.me/51922706045?text=${encodedText}`
}
export const BuyButton = ({ game }: BuyButtonProps) => {
  const message = toMessage(
    `Hola, estoy interesado en comprar el juego ${game.title} por S/. ${game.price} soles.`)
  return (
    <Link target="_BLANK" to={message}
      aria-label="buy game"
      className="bg-yellow-500 rounded-lg p-1 cursor-pointer">
      <svg fill="none" viewBox="0 0 24 24"
        strokeWidth={1.3} stroke="currentColor"
        className="size-4.5 stroke-black">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>
    </Link>
  )
}
