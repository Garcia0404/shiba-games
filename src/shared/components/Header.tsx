import { Logo } from './Logo'
import { Menu } from './Menu'
import { Link } from 'react-router'

export const Header = () => {
  return (
    <header className="border-b border-zinc-800 bg-[rgba(0,0,0,0.8)] z-40 backdrop-blur-2xl fixed top-0 w-screen">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Logo />
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-sm font-medium hover:text-main transition-colors">
                Inicio
              </Link>
              <Link to="/games" className="text-sm font-medium hover:text-main transition-colors">
                Juegos
              </Link>
            </div>
          </div>
          <Menu />
        </nav>
      </div>
    </header>
  )
}
