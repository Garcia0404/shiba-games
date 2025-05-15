import { useState, type ChangeEvent } from "react";
import { Arrow } from "../Arrow";
import type { Game } from "../../../features/games/types";
import { filterByCategories } from "../../../features/games/utils/games";

interface Props {
  filteredGames: Game[];
  setFilteredGames: (filteredGames: Game[]) => void;
}

const categories = [
  { id: "action", label: "Acción" },
  { id: "adventure", label: "Aventura" },
  { id: "rpg", label: "RPG" },
  { id: "fighting", label: "Lucha" },
  { id: "fps", label: "FPS" },
  { id: "sandbox", label: "Sandbox" },
  { id: "indie", label: "Indie" },
  { id: "simulation", label: "Simulación" },
];

export const FilterSidebar = ({ filteredGames, setFilteredGames }: Props) => {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    platforms: true,
    features: true,
  });

  const [selectedGenres, setSelectedGenres] = useState<Record<string, string>>({});

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;

    // Actualizar el estado acumulativo de las categorías seleccionadas
    setSelectedGenres(() => {
      const updatedGenres = {
        ...selectedGenres,
        [id]: e.target.checked ? "true" : "false",
      };
      // Filtrar los juegos usando las categorías seleccionadas
      const gamesUpdated = filterByCategories(filteredGames, updatedGenres);
      setFilteredGames(gamesUpdated);

      return updatedGenres;
    });
  };

  return (
    <div className="space-y-6">
      <div className="bg-[#1a1a1a90] rounded-lg overflow-hidden">
        <button
          className="w-full flex items-center justify-between p-4 font-medium"
          onClick={() => toggleSection("categories")}
          aria-expanded={expandedSections.categories}
          aria-controls="categories-panel"
        >
          <span>Categorías</span>
          <Arrow
            className={`size-4 transition-transform ${expandedSections.categories ? "rotate-180" : ""
              }`}
          />
        </button>

        <div
          id="categories-panel"
          className={`px-4 pb-4 ${expandedSections.categories ? "block" : "hidden"}`}
          role="region"
          aria-labelledby="categories-heading"
        >
          <fieldset>
            <legend className="sr-only" id="categories-heading">
              Categorías de juegos
            </legend>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={category.id}
                    className="size-4"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor={category.id}
                    className="ml-2 text-sm flex justify-between w-full"
                  >
                    <span>{category.label}</span>
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};