import { useState } from 'react'
import { PriceRangeFilter } from './PriceRangeFilter'
import { Arrow } from '../Arrow'

export const FilterSidebar = () => {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    platforms: true,
    features: true,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    })
  }

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
            className={`size-4 transition-transform ${expandedSections.categories ? "rotate-180" : ""}`}
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
              {[
                { id: "action", label: "Acción", count: 45 },
                { id: "adventure", label: "Aventura", count: 32 },
                { id: "rpg", label: "RPG", count: 28 },
                { id: "strategy", label: "Estrategia", count: 19 },
                { id: "simulation", label: "Simulación", count: 15 },
                { id: "sports", label: "Deportes", count: 12 },
                { id: "racing", label: "Carreras", count: 10 },
                { id: "puzzle", label: "Puzzle", count: 8 },
              ].map((category) => (
                <div key={category.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={category.id}
                    className="size-4"
                  />
                  <label htmlFor={category.id} className="ml-2 text-sm flex justify-between w-full">
                    <span>{category.label}</span>
                    <span className="text-gray-400">({category.count})</span>
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
      </div>

      <div className="bg-[#1a1a1aa8] rounded-lg overflow-hidden">
        <button
          className="w-full flex items-center justify-between p-4 font-medium"
          onClick={() => toggleSection("price")}
          aria-expanded={expandedSections.price}
          aria-controls="price-panel"
        >
          <span>Precio</span>
          <Arrow className={`size-4 transition-transform ${expandedSections.price ? "rotate-180" : ""}`} />
        </button>

        <div
          id="price-panel"
          className={`px-4 pb-4 ${expandedSections.price ? "block" : "hidden"}`}
          role="region"
          aria-labelledby="price-heading"
        >
          <fieldset>
            <legend className="sr-only" id="price-heading">
              Rango de precios
            </legend>
            <PriceRangeFilter />

            <div className="mt-4 space-y-2">
              {[
                { id: "under10", label: "Menos de 10€", count: 15 },
                { id: "10to30", label: "10€ - 30€", count: 42 },
                { id: "30to60", label: "30€ - 60€", count: 38 },
                { id: "over60", label: "Más de 60€", count: 12 },
                { id: "free", label: "Gratis", count: 8 },
                { id: "discounted", label: "En oferta", count: 35 },
              ].map((price) => (
                <div key={price.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={price.id}
                    className="size-4"
                  />
                  <label htmlFor={price.id} className="ml-2 text-sm flex justify-between w-full">
                    <span>{price.label}</span>
                    <span className="text-gray-400">({price.count})</span>
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  )
}
