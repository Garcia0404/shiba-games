interface PriceProps {
  price: number;
  discount: number;
}
export const Price = ({ price, discount }: PriceProps) => {
  return (
    <span className="flex items-center justify-between gap-2">
      <span className="text-2xl flex items-center gap-2">
        <span className="text-yellow-500">S/. {price.toFixed(2)}</span>
        {discount !== 0 && (
          <span className="text-sm text-white/50 line-through">S/. {((price * 100) / (100-discount)).toFixed(2)}</span>
        )}
      </span>
    </span>
  )
}
