import { Link } from "react-router"
export const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img
        src="https://zeroxgames.gg/cdn/shop/files/color.png?v=1743045115&width=600"
        alt="ZeroGames Logo"
        width={150}
        height={30}
        className="h-8 w-auto"
      />
    </Link>
  )
}
