import type { Game } from "../types";

// Función genérica para construir la URL y realizar el fetch
export const fetchGames = async (
  params: Record<string, string | number | undefined>
) => {
  const url = new URL((import.meta.env.VITE_API_URL as string) + "games");

  // Agrega los parámetros a la URL
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== "") {
      url.searchParams.append(key, String(value));
    }
  });

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`Error en la solicitud: ${response.statusText}`);
  }
  return response.json();
};
// Ordenar por
export const orderByPopularity = (games: Game[]) => {
  const gamesOrdered = [...games];
  return gamesOrdered;
};
export const orderAscending = (games: Game[]) => {
  const gamesOrdered = [...games].sort((a, b) => a.price - b.price);
  return gamesOrdered;
};
export const orderDescending = (games: Game[]) => {
  const gamesOrdered = [...games].sort((a, b) => b.price - a.price);
  return gamesOrdered;
};
export const orderByRecents = (games: Game[]) => {
  const gamesOrdered = [...games].reverse();
  return gamesOrdered;
};
// Búsqueda
export const searchGames = (games: Game[], search: string) => {
  const gamesFiltered = games.filter(
    (game) =>
      game.title.toLowerCase().includes(search.toLowerCase()) ||
      game.description?.toLowerCase().includes(search.toLowerCase())
  );
  return gamesFiltered;
};
// Lista de géneros válidos
const validGenres = [
  "action",
  "adventure",
  "rpg",
  "fighting",
  "fps",
  "sandbox",
  "indie",
  "simulation",
];
type Genres = {
  [key in (typeof validGenres)[number]]?: string;
};
// Filtrar por categorías
export const filterByCategories = (games: Game[], genres: Genres) => {
  // Filtrar por géneros dinámicamente
  const gamesFiltered = validGenres.reduce((filteredGames, genre) => {
    if (genres[genre] === "true") {
      return filteredGames.filter((game) =>
        game.category.some((category) => category.toLowerCase() === genre)
      );
    }
    return filteredGames;
  }, games);

  return gamesFiltered;
};
