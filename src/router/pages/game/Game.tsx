import { useParams } from "react-router"
import type { UUID } from "../../../features/games/types"
import { Category } from "../../../features/game/components/Category"
import { Title } from "../../../features/game/components/Title"
import { Price } from "../../../features/game/components/Price"
import { Description } from "../../../features/game/components/Description"
import { Trailer } from "../../../features/game/components/Trailer"
import { Suggestions } from "../../../features/game/components/Suggestions"
import { Breadcrumbs } from "../../../shared/components/ui/Breadcrumbs"
import { useEffect, useState } from "react"
import { GameImage } from "../../../features/game/components/GameImage"
import { BuyButton } from "../../../features/game/components/BuyButton"
import { useAppContext } from "../../../context/AppContext"
import { getGame, likedGame } from "../../../features/game/utils/game"
import { NotFound } from "../../../shared/components/notfound/NotFound"
export const Game = () => {
  const { uuid } = useParams<{ uuid: UUID }>();
  const { games, isLoading } = useAppContext();
  const game = uuid ? getGame(games, uuid) : null;
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    if (!game) return;
    const likedGames = JSON.parse(localStorage.getItem("likedGames") || "[]") as string[];
    setLiked(likedGames.includes(game.uuid));
  }, [uuid, game]);

  if (isLoading) {
    return <div className="h-[calc(100vh-64px)] grid place-content-center"></div>;
  }
  if (game === undefined) return <NotFound />;
  if (!game) return null;

  const handleClick = () => {
    setLiked((prev) => !prev);
    const likedGames = JSON.parse(localStorage.getItem("likedGames") || "[]") as string[];
    let updatedLikedGames: string[];
    if (likedGames.includes(game.uuid)) {
      updatedLikedGames = likedGames.filter((id) => id !== game.uuid);
    } else {
      updatedLikedGames = [...likedGames, game.uuid];
    }
    localStorage.setItem("likedGames", JSON.stringify(updatedLikedGames));
    if (!liked) likedGame(game.uuid);
  };
  return (
    <main style={{ background: `url(/images/${game.uuid}.webp) center/cover no-repeat` }} className="z-0 relative min-h-screen bg-[#121212] text-white pb-8 transition-all duration-600 ease-in-out">
      <div className="absolute left-0 right-0 w-full h-12 -translate-y-4 bg-black -z-10"></div>
      <div className="container mx-auto px-4 md:px-4 z-10">
        <div className="mt-4">
          <Breadcrumbs title={game.title} />
        </div>
        <div className='min-h-150 flex flex-col md:grid md:grid-cols-12 pt-4 max-sm:px-0 max-md:p-6 md:py-10 lg:px-10 gap-4 md:gap-10'>
          <GameImage image={`/images/${uuid}.webp`} title={game.title} />
          <div className='flex flex-col gap-3 flex-1 col-start-6 col-end-13 xl:col-end-12'>
            <div className="flex justify-between items-center">
              <Category categories={game.category} />
              <BuyButton game={game} />
            </div>
            <Title>{game.title}</Title>
            <span className="flex items-center justify-between gap-2">
              <Price price={game.price} discount={game.discount} />
              <button onClick={handleClick}
                className='text-sm cursor-pointer flex items-center gap-1 border rounded px-2 py-1 border-white/20'
                aria-label="Botón de Me gusta">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className={`${liked ? 'fill-yellow-500 stroke-yellow-500' : 'fill-transparent'} size-5 ease-in-out transition-all`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                <span>Me gusta</span>
              </button>
            </span>
            <Description>{game.description}</Description>
            <Trailer trailer={game.trailer} />
          </div>
        </div>
        <Suggestions currentId={game.uuid} games={games} categories={game.category} />
      </div>
      <div className="absolute w-full h-full top-0 -z-10 backdrop-blur-2xl" style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}></div>
    </main >
  )
}
