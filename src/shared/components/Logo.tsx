import { Link } from "react-router"
export const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img
        src="/logo.png"
        alt="Shiba Games logo"
        width={48}
        height={48}
        className="h-12 w-auto"
      />
      <span className="text-xl font-extrabold text-[#C70039]">SHIBA</span>
    </Link>
  )
}