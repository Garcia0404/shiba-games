import type { Game } from "../../features/games/types";
//Local
// export const getGames = async () => {
//   const response = await fetch("/data/games.json");
//   if (!response.ok) {
//     throw new Error("Failed to fetch games data");
//   }
//   const data = await response.json();
//   return data as Promise<Game[]>;
// };
export const getGames = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch games data");
  }
  const data = await response.json();
  return data as Promise<Game[]>;
};
