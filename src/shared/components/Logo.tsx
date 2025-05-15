import { Link } from "react-router"
export const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img
        src="/logo.png"
        alt="Shiba Games logo"
        width={150}
        height={30}
        className="h-12 w-auto"
      />
      <span className="text-xl font-extrabold text-[#ff00009d]">SHIBA</span>
    </Link>
  )
}