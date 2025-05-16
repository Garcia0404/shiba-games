import { GameCard } from "../../games/components/GameCard";
import type { Game, UUID } from "../../games/types";

interface Props {
  games: Game[]
  categories: string[]
  currentId: UUID
}
const noSuggestions:Game[] = [
  {
    uuid: "9b2e4d7f-a1c8-3e5b-0d9a-6f4c2b8e1a3d",
    title: "ELDEN RING Shadow of the Erdtree Edition",
    provider: "Steam",
    price: 23.90,
    discount: 20,
    description: "Explora el vasto y misterioso País de las Sombras en esta expansión masiva de ELDEN RING.",
    category: ["Action", "RPG"],
    image: "/images/9b2e4d7f-a1c8-3e5b-0d9a-6f4c2b8e1a3d.webp",
    trailer: "/trailers/venom.mp4",
    popularity: 1
  },
  {
    uuid: "3c5a8e0d-1b2f-4a9c-7d6e-0f3b5a2c1d8e",
    title: "God of War Ragnarök Digital Deluxe Edition",
    provider: "Steam",
    price: 20.00,
    discount: 33,
    description: "Acompaña a Kratos y Atreus en la emocionante conclusión de su saga nórdica.",
    category: ["Action"],
    image: "/images/3c5a8e0d-1b2f-4a9c-7d6e-0f3b5a2c1d8e.webp",
    trailer: "/trailers/venom.mp4",
    popularity: 1
  },
  {
    uuid: "d2a5f1e8-3b0c-4d9a-7e6f-1a2b8c5d0e3f",
    title: "DOOM: The Dark Ages - Premium Edition",
    provider: "Steam",
    price: 35.00,
    discount: 22,
    description: "Desgarra y destruye en el caos medieval con este nuevo capítulo brutal de DOOM.",
    category: ["FPS"],
    image: "/images/d2a5f1e8-3b0c-4d9a-7e6f-1a2b8c5d0e3f.webp",
    trailer: "/trailers/venom.mp4",
    popularity: 1
  },
  {
    uuid: "0e9a5b3c-8d2f-4a1e-6b7d-3f0c9a2e5b1d",
    title: "Clair Obscur: Expedition 33 Deluxe Edition",
    provider: "Steam",
    price: 19.90,
    discount: 25,
    description: "Un RPG por turnos surrealista con arte impresionante y una historia emocional.",
    category: ["RPG"],
    image: "/images/0e9a5b3c-8d2f-4a1e-6b7d-3f0c9a2e5b1d.webp",
    trailer: "/trailers/venom.mp4",
    popularity: 1
  },
  {
    uuid: "5c1d3a9e-0b2f-4e8d-a7c6-1f3b5d0e2a9c",
    title: "The Elder Scrolls IV: Oblivion Remastered - Deluxe Edition",
    provider: "Steam",
    price: 19.90,
    discount: 20,
    description: "Regresa a Cyrodiil con gráficos mejorados y el clásico gameplay de RPG.",
    category: ["RPG"],
    image: "/images/5c1d3a9e-0b2f-4e8d-a7c6-1f3b5d0e2a9c.webp",
    trailer: "/trailers/venom.mp4",
    popularity: 1
  }
];
// Mejorar
export const Suggestions = ({ games, categories, currentId }: Props) => {
  const searchSuggestions: Game[] = games.filter(game =>
    game.category.some(category => categories.includes(category) && currentId !== game.uuid)
  );
  const suggestions = searchSuggestions.length === 0 ? noSuggestions : searchSuggestions
  return (
    <div>
      <div className='text-2xl font-bold my-4'>También podría gustarte</div>
      <ul className='grid grid-cols-2 min-[550px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4'>
        {suggestions.slice(0, 5).map(game => (
          <li key={game.uuid} className="h-full">
            <GameCard game={game} />
          </li>
        ))}
      </ul>
    </div>
  )
}
