import { Link } from 'react-router'
import type { Game } from '../types'
import { GameDiscount } from './GameDiscount'
import { GameImage } from './GameImage'
import { GamePrice } from './GamePrice'
import { GameTitle } from './GameTitle'
interface GameCardProps {
  game: Game
}
export const GameCard = ({ game }: GameCardProps) => {
  return (
    <article className="group relative h-full bg-[#1a1a1a63] shadow-sm rounded-lg overflow-hidden border border-white/10">
      <Link to={`/games/${game.uuid}`} className='flex flex-col h-full flex-1'>
        <GameImage image={game.image} title={game.title}>
          <GameDiscount discount={game.discount} />
        </GameImage>
        <div className="p-3 flex flex-col flex-1">
          <GameTitle>{game.title}</GameTitle>
          <GamePrice price={game.price} discount={game.discount} />
        </div>
      </Link>
    </article>
  )
}
