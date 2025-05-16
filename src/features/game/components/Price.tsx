import { useState } from "react";

interface PriceProps {
  price: number;
  discount: number;
}
export const Price = ({ price, discount }: PriceProps) => {
  const [liked, setLiked] = useState(false)
  const handleClick = () => setLiked((prev) => !prev)
  return (
    <span className="flex items-center justify-between gap-2">
      <span className="flex items-center gap-2">
        <span className="text-yellow-500 text-3xl">S/. {price.toFixed(2)}</span>
        {discount !== 0 && (
          <span className="text-sm text-white/50 line-through">S/. {((price * 100) / (100 - discount)).toFixed(2)}</span>
        )}
      </span>
      <button onClick={handleClick} className='text-sm cursor-pointer flex items-center gap-1 border rounded px-2 py-1 border-white/20' aria-label="Botón de Me gusta">
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className={`${liked ? 'fill-yellow-500 stroke-yellow-500' : 'fill-transparent'} size-5 ease-in-out transition-all`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
        <span>Me gusta</span>
      </button>
    </span>
  )
}
