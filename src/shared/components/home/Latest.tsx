import { GameCard } from "../../../features/games/components/GameCard"
import type { Game } from "../../../features/games/types";
import { Loader } from "../ui/Loader"
import backupGames from "../../../../public/data/games.json";
import { useAppContext } from "../../../context/AppContext";

const MAX_GAMES = 5;

function getSortedGames(games: Game[]) {
  return [...games]
    .reverse()
    .slice(0, MAX_GAMES);
}
export const Latest = () => {
  const { games, isLoading, error } = useAppContext();

  if (isLoading) {
    return (
      <div className="h-[calc(100vh-64px)] grid place-content-center">
        <Loader />
      </div>
    );
  }

  const gamesToShow = error
    ? getSortedGames(backupGames as Game[])
    : getSortedGames(games);

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {gamesToShow.map((game) => (
        <GameCard key={game.uuid} game={game} />
      ))}
    </div>
  );
};
