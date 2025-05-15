interface GamePriceProps {
  price: number
  discount: number
}
export const GamePrice = ({ price, discount }: GamePriceProps) => {
  return (
    <div className="flex items-center gap-3">
      {discount > 0 && (
        <span className="text-sm text-gray-400 line-through">
          S/ {((price * 100) / (100-discount)).toFixed(2)}
        </span>
      )}
      <div className="flex items-center justify-between">
        <span className="text-yellow-500">
          S/ {price.toFixed(2)}
        </span>
      </div>
    </div>
  )
}
