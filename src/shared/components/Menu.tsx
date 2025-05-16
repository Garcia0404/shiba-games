import { Link } from "react-router"
import { Logo } from "./Logo"
import { useState } from "react"
import { Arrow } from "./Arrow"

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(prev => !prev)
    if (!isOpen) document.documentElement.classList.add("overflow-y-hidden")
    else document.documentElement.classList.remove("overflow-y-hidden")
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
          className={`absolute inset-0 bg-black transition-opacity h-dvh duration-300 ${isOpen ? 'opacity-80' : 'opacity-0'}`}
          onClick={handleClick}
        ></div>

        {/* Contenido del menú */}
        <div
          id="menu"
          className={`flex flex-col absolute top-0 right-0 w-[min(100%,320px)] z-0 bg-gradient-to-t from-[#29010a] to-black h-dvh transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Botón de cerrar */}
          <button
            aria-label="Cerrar menú"
            onClick={handleClick}
            className='absolute top-6 right-4 z-10'
          >
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Logo */}
          <div className='flex absolute top-20 w-full justify-center'>
            <Logo />
          </div>

          {/* Enlaces del menú */}
          <div className='flex flex-col my-40 ms-12 text-start h-auto overflow-y-auto pb-10'>
            <span className="flex gap-2 items-center">
              <Arrow className="rotate-90 size-4" />
              <Link
                to="/"
                className="text-xl font-medium py-1 w-max hover:text-zinc-300 transition-colors"
                onClick={handleClick}
              >
                Inicio
              </Link>
            </span>
            <span className="flex gap-2 items-center">
              <Arrow className="rotate-90 size-4" />
              <Link
                to="/games"
                className="text-xl font-medium py-1 w-max hover:text-zinc-300 transition-colors"
                onClick={handleClick}
              >
                Juegos
              </Link>
            </span>
          </div>
          {/* Redes */}
          <div className="flex justify-center items-end flex-1 min-h-20 pb-10">
            <div className="flex items-center gap-2">
              <Link to={import.meta.env.VITE_INSTAGRAM_LINK} target="_BLANK" aria-label="Abrir Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="1">
                  <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M16.5 7.5l0 .01"></path>
                </svg>
              </Link>
              <Link to={import.meta.env.VITE_FACEBOOK_LINK} target="_BLANK" aria-label="Abrir Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="1">
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                </svg>
              </Link>
              <Link to={import.meta.env.VITE_TIKTOK_LINK} target="_BLANK" aria-label="Abrir TikTok">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="1">
                  <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z"></path>
                </svg>
              </Link>
              <Link to={`https://wa.me/${import.meta.env.VITE_PHONE_NUMBER}`} target="_BLANK" aria-label="Abrir Whatsapp">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" strokeWidth="1">
                  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                  <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}