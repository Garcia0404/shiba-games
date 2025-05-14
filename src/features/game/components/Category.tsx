interface CategoryProps {
  children: React.ReactNode;
}
export const Category = ({ children }: CategoryProps) => {
  return (
    <span className='text-white/50 text-sm'>{children}</span>
  )
}
