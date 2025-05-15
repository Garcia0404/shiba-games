import type { Game } from "../../../features/games/types";
import { searchGames } from "../../../features/games/utils/games";

interface Props {
  search: string
  setSearch: (search: string) => void
  filteredGames: Game[]
  setFilteredGames: (filteredGames: Game[]) => void
}
export const SearchBar = ({ search, setSearch, filteredGames, setFilteredGames }: Props) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (search.length === 0) return setFilteredGames(filteredGames)
    if (!search.trim()) return
    const gamesUpdated = searchGames(filteredGames, search)
    setFilteredGames(gamesUpdated)
    console.log("Buscando:", search);
  };

  return (
    <form onSubmit={handleSubmit} className="flex-grow max-w-xl h-full">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 stroke-white/70">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div>
        <input
          type="search"
          className="block w-full p-2 pl-10 text-sm bg-[#1a1a1a90] rounded-lg focus:ring-1 focus:ring-main focus:outline-none transition-all"
          placeholder="Buscar juegos, categorías..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Buscar juegos"
        />
      </div>
    </form>
  )
}
