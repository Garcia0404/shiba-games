interface GameTitleProps {
  children: React.ReactNode
}
export const GameTitle = ({ children }: GameTitleProps) => {
  return (
    <h3 className="font-medium text-sm line-clamp-2">{children}</h3>
  )
}
