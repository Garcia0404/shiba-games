import { Link } from "react-router"
import { Logo } from "./Logo"
import { useState } from "react"

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const handleClick = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div className="flex items-center gap-4">
      {/* Botón del menú */}
      <button 
        onClick={handleClick} 
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
        className="md:hidden cursor-pointer"
      >
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-[0.8] size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
      </button>

      {/* Overlay y menú */}
      <div className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* Overlay */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity h-screen duration-300 ${isOpen ? 'opacity-80' : 'opacity-0'}`}
          onClick={handleClick}
        ></div>
        
        {/* Contenido del menú */}
        <div 
          className={`absolute top-0 right-0 w-[min(100%,320px)] h-screen bg-zinc-950 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Botón de cerrar */}
          <button 
            aria-label="Close Menu" 
            onClick={handleClick} 
            className='absolute top-4 right-4 z-10'
          >
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>
          
          {/* Logo */}
          <div className='flex absolute top-20 w-full justify-center'>
            <Logo />
          </div>
          
          {/* Enlaces del menú */}
          <div className='flex flex-col my-40 ms-32 text-start h-auto overflow-y-auto pb-10'>
            <Link 
              to="/" 
              className="text-xl font-medium py-2 hover:text-zinc-300 transition-colors"
              onClick={handleClick}
            >
              Inicio
            </Link>
            <Link 
              to="/games" 
              className="text-xl font-medium py-2 hover:text-zinc-300 transition-colors"
              onClick={handleClick}
            >
              Juegos
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}