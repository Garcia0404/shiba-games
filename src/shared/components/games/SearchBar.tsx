import React, { useState } from 'react'

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de búsqueda
    console.log("Buscando:", searchTerm)
  }

  return (
    <form onSubmit={handleSubmit} className="flex-grow max-w-xl h-full">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 stroke-white/70">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div>
        <input
          type="search"
          className="block w-full p-2 pl-10 text-sm bg-[#1a1a1a90] rounded-lg focus:ring-1 focus:ring-main focus:outline-none transition-all"
          placeholder="Buscar juegos, categorías..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Buscar juegos"
        />
      </div>
    </form>
  )
}
