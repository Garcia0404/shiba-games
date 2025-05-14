interface GameDiscountProps {
  discount: number
}
export const GameDiscount = ({ discount }: GameDiscountProps) => {
  return (
    <>
      {
        discount > 0 ? (
          <div className="absolute top-2 left-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
            -{discount}%
          </div>
        ): null
      }
    </>
  )
}
