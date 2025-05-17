// import { useEffect, useState } from 'react'

// export const PriceRangeFilter = () => {
//   const [priceRange, setPriceRange] = useState([0, 100])
//   const [displayRange, setDisplayRange] = useState([0, 100])

//   useEffect(() => {
//     // Actualizar el rango mostrado solo cuando el usuario deje de mover el slider
//     const timer = setTimeout(() => {
//       setDisplayRange(priceRange)
//     }, 100)

//     return () => clearTimeout(timer)
//   }, [priceRange])

//   return (
//     <div className="mt-2">
//       <div className="flex justify-between mb-2 text-sm">
//         <span>{displayRange[0]}€</span>
//         <span>{displayRange[1] === 100 ? "100€+" : `${displayRange[1]}€`}</span>
//       </div>

//       <div className="relative h-1 bg-[#242424] rounded-full">
//         <div
//           className="absolute h-1 bg-main rounded-full"
//           style={{
//             left: `${priceRange[0]}%`,
//             width: `${priceRange[1] - priceRange[0]}%`,
//           }}
//         ></div>

//         <input
//           type="range"
//           min="0"
//           max="100"
//           value={priceRange[0]}
//           onChange={(e) => {
//             const value = Number.parseInt(e.target.value)
//             if (value < priceRange[1]) {
//               setPriceRange([value, priceRange[1]])
//             }
//           }}
//           className="absolute w-full h-1 opacity-0 cursor-pointer"
//           aria-label="Precio mínimo"
//         />

//         <input
//           type="range"
//           min="0"
//           max="100"
//           value={priceRange[1]}
//           onChange={(e) => {
//             const value = Number.parseInt(e.target.value)
//             if (value > priceRange[0]) {
//               setPriceRange([priceRange[0], value])
//             }
//           }}
//           className="absolute w-full h-1 opacity-0 cursor-pointer"
//           aria-label="Precio máximo"
//         />

//         <div
//           className="absolute w-4 h-4 bg-main rounded-full -mt-1.5 -ml-2"
//           style={{ left: `${priceRange[0]}%` }}
//         ></div>

//         <div
//           className="absolute w-4 h-4 bg-main rounded-full -mt-1.5 -ml-2"
//           style={{ left: `${priceRange[1]}%` }}
//         ></div>
//       </div>
//     </div>
//   )
// }
