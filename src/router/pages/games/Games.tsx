import { SearchBar } from "../../../shared/components/games/SearchBar"
import { Header } from "../../../shared/components/games/Header"
import { Filter } from "../../../shared/components/games/Filter"
import { OrderBy } from "../../../shared/components/games/OrderBy"
import { View } from "../../../shared/components/games/View"
import { FilterSidebar } from "../../../shared/components/games/FilterSidebar"
import { ResultsAndFilters } from "../../../shared/components/games/ResultsAndFilters"
import { Results } from "../../../shared/components/games/Results"
import { BackgroundGradient } from "../../../shared/components/ui/BackgroundGradient"
import { useEffect, useState } from "react"
import { useAppContext } from "../../../context/AppContext"

export const Games = () => {
  const { games, filteredGames, setFilteredGames } = useAppContext()
  const [isGridView, setIsGridView] = useState(true)
  const [search, setSearch] = useState("")
  useEffect(() => {
    setFilteredGames(games)
  }, [])
  return (
    <>
      {
        filteredGames && (
          <div className="min-h-screen relative z-0 text-white">
            <BackgroundGradient />
            <main className="container mx-auto px-4 py-8">
              <div className="min-h-screen flex flex-col space-y-6">
                {/* Cabecera de la página - Semántico con <header> */}
                <Header />
                {/* Barra de búsqueda y filtros superiores - Semántico con <section> */}
                <section aria-labelledby="search-filters">
                  <div className="flex flex-col md:flex-row gap-4">
                    <SearchBar filteredGames={games} search={search} setSearch={setSearch} setFilteredGames={setFilteredGames} />
                    <div className="flex flex-wrap gap-2 md:ml-auto">
                      <Filter />
                      <OrderBy filteredGames={games} setFilteredGames={setFilteredGames} />
                      <View isGridView={isGridView} setIsGridView={setIsGridView} />
                    </div>
                  </div>
                </section>

                {/* Contenido principal con filtros laterales y juegos - Semántico con <div> para layout y <aside> para filtros */}
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Filtros laterales - Semántico con <aside> */}
                  <aside className="max-md:hidden md:w-1/4 lg:w-1/5 space-y-6">
                    <FilterSidebar filteredGames={games} setFilteredGames={setFilteredGames} />
                  </aside>

                  {/* Lista de juegos - Semántico con <section> y <article> para cada juego */}
                  <section aria-labelledby="games-heading" className="md:w-3/4 lg:w-4/5">

                    {/* Resultados y filtros activos */}
                    <ResultsAndFilters />

                    {/* Grid de juegos - Semántico con <div> para layout y <article> para cada juego */}
                    <Results games={filteredGames} isGridView={isGridView} />
                    {/* Paginación - Semántico con <nav> */}
                    {/* <Pagination totalPages={8} currentPage={1} /> */}
                  </section>
                </div>
              </div>
            </main>
          </div>
        )
      }
    </>
  )
}
