import { GameCard } from "../../../features/games/components/GameCard"
import { useGames } from "../../../features/games/hooks/useGames"
import { Loader } from "../ui/Loader"

export const Latest = () => {
  const { games } = useGames()
  if (!games) {
    return (
      <div className="h-[calc(100vh-64px)] grid place-content-center">
        <Loader />
      </div>
    )
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {games.map((game) => (
        <GameCard
          key={game.title}
          game={game} />
      ))}
    </div>
  )
}
