interface CategoryProps {
  categories: string[]
}
export const Category = ({ categories }: CategoryProps) => {
  return (
    <div className='flex gap-3 text-white/50 text-sm'>{
      categories.map((category, index) => (<span key={index}>{category}</span>))
    }</div>
  )
}
