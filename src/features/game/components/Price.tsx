interface PriceProps {
  price: number;
  discount: number;
}
export const Price = ({ price, discount }: PriceProps) => {
  return (
    <span className="flex items-center justify-between gap-2">
      <span className="text-2xl flex items-center gap-2">
        <span>S/. {price}</span>
        {discount !== 0 && (
          <span className="text-sm text-white/50 line-through">S/. {price + discount}</span>
        )}
      </span>
    </span>
  )
}
