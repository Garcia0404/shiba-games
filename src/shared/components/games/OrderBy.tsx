
export const OrderBy = () => {
  return (
    <div className="flex items-center gap-2 bg-[#1a1a1a90] px-4 py-2 rounded-md">
      <span className="text-sm font-medium">Ordenar por:</span>
      <select
        aria-label="Ordenar juegos por"
        className="bg-transparent text-sm focus:outline-none cursor-pointer"
      >
        <option value="popular">Popularidad</option>
        <option value="price-low">Precio: Menor a Mayor</option>
        <option value="price-high">Precio: Mayor a Menor</option>
        <option value="newest">Más recientes</option>
      </select>
    </div>
  )
}
