import { GameCard } from "../../../features/games/components/GameCard"
import { GameCardList } from "../../../features/games/components/GameCardList";
import type { Game } from "../../../features/games/types";
interface Props {
  games: Game[]
  isGridView: boolean
}
export const Results = ({ games, isGridView }: Props) => {
  return (
    <div className={`grid grid-cols-1 ${isGridView ? 'sm:grid-cols-2' : 'min-[450px]:grid-cols-2'} lg:grid-cols-3 xl:grid-cols-4 gap-4`}>
      {isGridView ? games.map((game) => (
        <GameCard key={game.uuid} game={game}></GameCard>
      )) : games.map((game) => (
        <GameCardList key={game.uuid} game={game}></GameCardList>
      ))}
    </div>
  )
}