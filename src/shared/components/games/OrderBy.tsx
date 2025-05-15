import type { Game } from "../../../features/games/types";
import {
  orderAscending,
  orderByPopularity,
  orderByRecents,
  orderDescending,
} from "../../../features/games/utils/games";

interface Props {
  filteredGames: Game[];
  setFilteredGames: (filteredGames: Game[]) => void;
}

export const OrderBy = ({ filteredGames, setFilteredGames }: Props) => {
  const handleOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    let sortedGames = [...filteredGames];

    switch (value) {
      case "popular":
        sortedGames = orderByPopularity(sortedGames);
        break;
      case "ascending":
        sortedGames = orderAscending(sortedGames);
        break;
      case "descending":
        sortedGames = orderDescending(sortedGames);
        break;
      case "recents":
        sortedGames = orderByRecents(sortedGames);
        break;
      default:
        break;
    }

    setFilteredGames(sortedGames);
  };

  return (
    <div className="flex items-center gap-2 bg-[#1a1a1a90] px-4 py-2 rounded-md">
      <span className="text-sm font-medium">Ordenar por:</span>
      <select
        aria-label="Ordenar juegos por"
        className="text-sm cursor-pointer appearance-none bg-[#1a1a1a] border border-white/10 rounded-lg px-3 py-1.5 transition-colors duration-300 ease-in-out hover:bg-[#2a2a2a] focus:outline-none"
        onChange={handleOrder}
      >
        <option className="bg-[#1a1a1a]" value="popular">Popularidad</option>
        <option className="bg-[#1a1a1a]" value="ascending">Precio: Menor a Mayor</option>
        <option className="bg-[#1a1a1a]" value="descending">Precio: Mayor a Menor</option>
        <option className="bg-[#1a1a1a]" value="recents">Más recientes</option>
      </select>
    </div>
  );
};