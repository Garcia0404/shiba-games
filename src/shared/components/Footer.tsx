import { Link } from "react-router"


export const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] py-8 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">ZeroGames</h3>
            <p className="text-sm text-gray-400">
              Tu tienda de confianza para comprar juegos digitales al mejor precio.
            </p>
          </div>
          <nav aria-label="Enlaces de ayuda">
            <h3 className="font-bold text-lg mb-4">Ayuda</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  Preguntas frecuentes
                </Link>
              </li>
              <li>
                <Link to="/soporte" className="hover:text-white transition-colors">
                  Soporte
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
          <nav aria-label="Enlaces legales">
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/terminos" className="hover:text-white transition-colors">
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link to="/privacidad" className="hover:text-white transition-colors">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:text-white transition-colors">
                  Política de cookies
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <h3 className="font-bold text-lg mb-4">Métodos de pago</h3>
            <div className="flex gap-2 flex-wrap">
              {["Visa", "Mastercard", "PayPal", "Bitcoin"].map((method, index) => (
                <div key={index} className="bg-[#242424] px-3 py-1 rounded text-sm">
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} ZeroGames. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
