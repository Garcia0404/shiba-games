
export const ResultsAndFilters = () => {
  return (
    <div className="flex flex-wrap items-center justify-between mb-4">
      <p className="text-sm text-gray-400">Mostrando 1-20 de 156 resultados</p>

      <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
        <div className="flex items-center gap-1 bg-[#242424] px-3 py-1 rounded-full text-sm">
          <span>Acción</span>
          <button aria-label="Eliminar filtro Acción" className="hover:text-red-400">
            ×
          </button>
        </div>
        <div className="flex items-center gap-1 bg-[#242424] px-3 py-1 rounded-full text-sm">
          <span>Menos de 30€</span>
          <button aria-label="Eliminar filtro de precio" className="hover:text-red-400">
            ×
          </button>
        </div>
        <button className="text-sm text-gray-400 hover:text-white">Limpiar filtros</button>
      </div>
    </div>
  )
}
