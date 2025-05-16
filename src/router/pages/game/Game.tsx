import { useParams } from "react-router"
import type { UUID } from "../../../features/games/types"
import { Category } from "../../../features/game/components/Category"
import { Title } from "../../../features/game/components/Title"
import { Price } from "../../../features/game/components/Price"
import { Description } from "../../../features/game/components/Description"
import { Trailer } from "../../../features/game/components/Trailer"
import { Suggestions } from "../../../features/game/components/Suggestions"
import { Breadcrumbs } from "../../../shared/components/ui/Breadcrumbs"
import { useEffect } from "react"
import { GameImage } from "../../../features/game/components/GameImage"
import { BuyButton } from "../../../features/game/components/BuyButton"
import { useAppContext } from "../../../context/AppContext"
import { getGame } from "../../../features/game/utils/game"
import { NotFound } from "../../../shared/components/notfound/NotFound"
export const Game = () => {
  const { uuid } = useParams<{ uuid: UUID }>()
  const { games, isLoading } = useAppContext()
  const game = uuid ? getGame(games, uuid) : null
  useEffect(() => {
    window.scrollTo({
      top: 0
    })
  }, [uuid])
  if (isLoading) {
    return <div className="h-[calc(100vh-64px)] grid place-content-center">
    </div>
  }
  if (game === undefined) return <NotFound />
  if (!game) return null
  return (
    <main style={{ background: `url(/images/${game.uuid}.webp) center/cover no-repeat`}} className="z-0 relative min-h-screen bg-[#121212] text-white pb-8 transition-all duration-600 ease-in-out">
      <div className="absolute left-0 right-0 w-full h-12 -translate-y-4 bg-black -z-10"></div>
      <div className="container mx-auto px-4 md:px-4 z-10">
        <div className="mt-4">
          <Breadcrumbs title={game.title} />
        </div>
        <div className='min-h-150 flex flex-col md:grid md:grid-cols-12 pt-4 max-sm:p-6 md:py-10 lg:px-10 gap-4 md:gap-10'>
          <GameImage image={`/images/${uuid}.webp`} title={game.title} />
          <div className='flex flex-col gap-3 flex-1 col-start-6 col-end-13 xl:col-end-12'>
            <div className="flex justify-between items-center">
              <Category categories={game.category} />
              <BuyButton game={game} />
            </div>
            <Title>{game.title}</Title>
            <Price price={game.price} discount={game.discount} />
            <Description>{game.description}</Description>
            <Trailer trailer={game.trailer} />
          </div>
        </div>
        <Suggestions currentId={game.uuid} games={games} categories={game.category}/>
      </div>
      <div className="absolute w-full h-full top-0 -z-10 backdrop-blur-2xl" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}></div>
    </main >
  )
}
