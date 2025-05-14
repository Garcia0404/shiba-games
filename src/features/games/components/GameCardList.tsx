import { Link } from "react-router"
import type { Game } from "../types"
import { GamePrice } from "./GamePrice"

interface GameCardProps {
  game: Game
}
export const GameCardList = ({ game }: GameCardProps) => {
  return (
    <article className="group relative bg-[#1a1a1a47] shadow-sm rounded-lg overflow-hidden border border-white/10">
      <Link to={`/games/${game.uuid}`} className='flex flex-1'>
        <div className="h-24">
          <picture>
            <img width={64} height={96} src={game.image} alt={game.title}
              className="h-full w-full object-contain"/>
          </picture>
        </div>
        <div className="p-3 flex flex-col flex-1">
          <span className="line-clamp-2 text-sm">{game.title}</span>
          <GamePrice price={game.price} discount={game.discount} />
        </div>
      </Link>
    </article>
  )
}
