import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { useGames } from "../features/games/hooks/useGames"
import type { Game } from "../features/games/types"
interface AppContextType {
  games: Game[]
  isLoading: boolean
  error:any
  filteredGames: Game[]
  setFilteredGames: (filteredGames: Game[]) => void
}
interface AppProviderProps {
  children: ReactNode
}
const AppContext = createContext<AppContextType | null>(null)
export const AppProvider = ({ children }: AppProviderProps) => {
  const { games, isLoading, error } = useGames()
  const [filteredGames, setFilteredGames] = useState<Game[]>([])
  useEffect(() => {
    if (games) {
      setFilteredGames(games)
    }
  }, [games])
  // Hacer a games [] o Games[]
  return (
    <AppContext.Provider
      value={{
        games: games ?? [],
        isLoading,
        error,
        filteredGames,
        setFilteredGames
      }}>
      {children}
    </AppContext.Provider>
  )
}
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext debe usarse dentro de un AppProvider");
  }
  return context;
};