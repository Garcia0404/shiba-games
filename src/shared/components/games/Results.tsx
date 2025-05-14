import { GameCard } from "../../../features/games/components/GameCard"
import { GameCardList } from "../../../features/games/components/GameCardList";
import type { Game } from "../../../features/games/types";

const games: Game[] = [
  {
    uuid: "2e7c9a1b-5d3f-4a8e-b0c6-9d2f1e5a3b8c",
    title: "The Last of Us™ Part I",
    provider: "Steam",
    price: 20.00,
    discount: 33,
    description: "Relive Joel and Ellie's unforgettable adventure in this stunning remake.",
    category: "Action-Adventure",
    image: "https://zeroxgames.gg/cdn/shop/files/tl1.jpg?v=1745285607&width=720",
    trailer: "https://www.youtube.com/watch?v=R2Ebc_OFeug"
  },
  {
    uuid: "f0a8d3e7-1b2c-4f9a-8d5e-6c3a0b9d2e1f",
    title: "DRAGON BALL: Sparking! ZERO Ultimate Edition",
    provider: "Steam",
    price: 28.00,
    discount: 15,
    description: "Unleash legendary power in the most explosive Dragon Ball fighting experience yet.",
    category: "Fighting",
    image: "https://zeroxgames.gg/cdn/shop/files/dbz_sparking_zero.jpg?v=1745285611&width=720",
    trailer: "https://www.youtube.com/watch?v=gL6Mx6bHnPc"
  },
  {
    uuid: "9b2e4d7f-a1c8-3e5b-0d9a-6f4c2b8e1a3d",
    title: "ELDEN RING Shadow of the Erdtree Edition",
    provider: "Steam",
    price: 23.90,
    discount: 20,
    description: "Explore the vast and mysterious Land of Shadow in this massive ELDEN RING expansion.",
    category: "Action RPG",
    image: "https://zeroxgames.gg/cdn/shop/files/elden_ring_of.png?v=1745285603",
    trailer: "https://www.youtube.com/watch?v=qLZenOn7WUo"
  },
  {
    uuid: "3c5a8e0d-1b2f-4a9c-7d6e-0f3b5a2c1d8e",
    title: "God of War Ragnarök Digital Deluxe Edition",
    provider: "Steam",
    price: 20.00,
    discount: 33,
    description: "Join Kratos and Atreus in their epic Norse saga's thrilling conclusion.",
    category: "Action",
    image: "https://zeroxgames.gg/cdn/shop/files/gowragnarok.webp?v=1745285609",
    trailer: "https://www.youtube.com/watch?v=wSHZIckO8kw"
  },
  {
    uuid: "e4d7a2b9-8c1f-3e6d-0a5b-9c2d1f4e7a8b",
    title: "Cyberpunk 2077: Ultimate Edition",
    provider: "Steam",
    price: 18.00,
    discount: 40,
    description: "Immerse yourself in Night City with all expansions included in this complete edition.",
    category: "RPG",
    image: "https://zeroxgames.gg/cdn/shop/files/cyberpunk_9748b9b5-3555-4de4-95f5-b8f9467f7cf6.jpg?v=1745285612",
    trailer: "https://www.youtube.com/watch?v=Ugb80d5lxEM"
  },
  {
    uuid: "1a6f9d3e-5b2c-4a8d-0e7f-3c9b1a5d2e6f",
    title: "Minecraft Java & Bedrock",
    provider: "Microsoft",
    price: 48.90,
    discount: 10,
    description: "Get both Java and Bedrock editions of Minecraft for the ultimate building experience.",
    category: "Sandbox",
    image: "https://zeroxgames.gg/cdn/shop/files/midgniht.jpg?v=1746724089",
    trailer: "https://www.youtube.com/watch?v=qNMfF9TYETM"
  },
  {
    uuid: "7b3e8d1a-0c5f-4a2b-9e6d-3f1c8a5b2d0e",
    title: "The Midnight Walk",
    provider: "Steam",
    price: 9.90,
    discount: 15,
    description: "A mysterious, atmospheric walking simulator full of secrets and quiet beauty.",
    category: "Indie",
    image: "https://zeroxgames.gg/cdn/shop/files/midgniht.jpg?v=1746724089",
    trailer: "https://www.youtube.com/watch?v=xBlnqvvSqQc"
  },
  {
    uuid: "d2a5f1e8-3b0c-4d9a-7e6f-1a2b8c5d0e3f",
    title: "DOOM: The Dark Ages - Premium Edition",
    provider: "Steam",
    price: 35.00,
    discount: 22,
    description: "Rip and tear in medieval chaos with this brutal new chapter in the DOOM saga.",
    category: "FPS",
    image: "https://zeroxgames.gg/cdn/shop/files/doom.jpg?v=1746491650",
    trailer: "https://www.youtube.com/watch?v=s1i3YfGl5ag"
  },
  {
    uuid: "0e9a5b3c-8d2f-4a1e-6b7d-3f0c9a2e5b1d",
    title: "Clair Obscur: Expedition 33 Deluxe Edition",
    provider: "Steam",
    price: 19.90,
    discount: 25,
    description: "A surreal turn-based RPG with breathtaking art and an emotional story.",
    category: "RPG",
    image: "https://zeroxgames.gg/cdn/shop/files/clair_obscur.jpg?v=1745424031",
    trailer: "https://www.youtube.com/watch?v=wWGIakhqr5g"
  },
  {
    uuid: "5c1d3a9e-0b2f-4e8d-a7c6-1f3b5d0e2a9c",
    title: "The Elder Scrolls IV: Oblivion Remastered - Deluxe Edition",
    provider: "Steam",
    price: 19.90,
    discount: 20,
    description: "Return to Cyrodiil with enhanced visuals and classic RPG gameplay.",
    category: "RPG",
    image: "https://zeroxgames.gg/cdn/shop/files/obvlion.png?v=1745350785",
    trailer: "https://www.youtube.com/watch?v=wFJ3PZuAjK4"
  },
  {
    uuid: "8e3a1d5f-0b2c-4a9e-7d6f-1c3b8a2e5d0f",
    title: "The Last of Us Part I & II Bundle",
    provider: "Steam",
    price: 42.90,
    discount: 30,
    description: "Get the complete story of Joel and Ellie in this emotional two-game bundle.",
    category: "Action-Adventure",
    image: "https://zeroxgames.gg/cdn/shop/files/tloupac.png?v=1743695176",
    trailer: "https://www.youtube.com/watch?v=AE67zDoBd7s"
  }
];
export const Results = ({ isGridView }: { isGridView: boolean }) => {
  return (
    <div className={`grid grid-cols-1 ${isGridView?'sm:grid-cols-2':'min-[450px]:grid-cols-2'} lg:grid-cols-3 xl:grid-cols-4 gap-4`}>
      {isGridView ? games.map((game) => (
        <GameCard key={game.uuid} game={game}></GameCard>
      )) : games.map((game) => (
        <GameCardList key={game.uuid} game={game}></GameCardList>
      ))}
    </div>
  )
}
