import { GameCard } from "../../games/components/GameCard";
import type { Game } from "../../games/types";


export const Suggestions = () => {
  const games: Game[] = [
    {
      "uuid": "7b3e8d1a-0c5f-4a2b-9e6d-3f1c8a5b2d0e",
      "title": "The Midnight Walk",
      "provider": "Steam",
      "price": 9.90,
      "discount": 15,
      "description": "A mysterious, atmospheric walking simulator full of secrets and quiet beauty.",
      "category": ["Indie"],
      "image": "https://zeroxgames.gg/cdn/shop/files/midgniht.jpg?v=1746724089",
      "trailer": "https://www.youtube.com/watch?v=xBlnqvvSqQc"
    },
    {
      "uuid": "d2a5f1e8-3b0c-4d9a-7e6f-1a2b8c5d0e3f",
      "title": "DOOM: The Dark Ages - Premium Edition",
      "provider": "Steam",
      "price": 35.00,
      "discount": 22,
      "description": "Rip and tear in medieval chaos with this brutal new chapter in the DOOM saga.",
      "category": ["FPS"],
      "image": "https://zeroxgames.gg/cdn/shop/files/doom.jpg?v=1746491650",
      "trailer": "https://www.youtube.com/watch?v=s1i3YfGl5ag"
    },
    {
      "uuid": "0e9a5b3c-8d2f-4a1e-6b7d-3f0c9a2e5b1d",
      "title": "Clair Obscur: Expedition 33 Deluxe Edition",
      "provider": "Steam",
      "price": 19.90,
      "discount": 25,
      "description": "A surreal turn-based RPG with breathtaking art and an emotional story.",
      "category": ["RPG"],
      "image": "https://zeroxgames.gg/cdn/shop/files/clair_obscur.jpg?v=1745424031",
      "trailer": "https://www.youtube.com/watch?v=wWGIakhqr5g"
    },
    {
      "uuid": "5c1d3a9e-0b2f-4e8d-a7c6-1f3b5d0e2a9c",
      "title": "The Elder Scrolls IV: Oblivion Remastered - Deluxe Edition",
      "provider": "Steam",
      "price": 19.90,
      "discount": 20,
      "description": "Return to Cyrodiil with enhanced visuals and classic RPG gameplay.",
      "category": ["RPG"],
      "image": "https://zeroxgames.gg/cdn/shop/files/obvlion.png?v=1745350785",
      "trailer": "https://www.youtube.com/watch?v=wFJ3PZuAjK4"
    },
    {
      "uuid": "8e3a1d5f-0b2c-4a9e-7d6f-1c3b8a2e5d0f",
      "title": "The Last of Us Part I & II Bundle",
      "provider": "Steam",
      "price": 42.90,
      "discount": 30,
      "description": "Get the complete story of Joel and Ellie in this emotional two-game bundle.",
      "category": ["Action", "Adventure"],
      "image": "https://zeroxgames.gg/cdn/shop/files/tloupac.png?v=1743695176",
      "trailer": "https://www.youtube.com/watch?v=AE67zDoBd7s"
    }
  ];
  return (
    <div>
      <div className='text-2xl font-bold my-4'>También podría gustarte</div>
      <ul className='grid grid-cols-2 min-[550px]:grid-cols-3 md:grid-cols-5 gap-2 md:gap-4'>
        {games.map(game => (
          <li key={game.uuid} className="h-full">
            <GameCard game={game} />
          </li>
        ))}
      </ul>
    </div>
  )
}
