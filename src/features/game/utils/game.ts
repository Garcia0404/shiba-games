import type { Game } from "../../games/types";

type UUID = `${string}-${string}-${string}-${string}-${string}`;
// export const getGame = async (uuid: UUID) => {
//   try {
//     const url = `/data/games.json`;
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error("Error fetching game data");
//     }
//     const games = await response.json();
//     const game = games.find((game: Game) => game.uuid === uuid);
//     return game as Promise<Game>;
//   } catch (error) {
//     console.error("Error fetching game:", error);
//     return null;
//   }
// };
export const getGame = (games: Game[], uuid: UUID) => {
  return games.find((game) => game.uuid === uuid);
};
export const likedGame = async (uuid: UUID) => {
  const URL = import.meta.env.VITE_API_URL;
  try {
    const response = await fetch(URL + `vote?by=${uuid}`, { method: "POST" });
    if (!response.ok)
      console.error("Tu voto ya fué enviado");
  } catch (e) {
    console.error(e);
  }
};
