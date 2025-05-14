interface TitleProps {
  children: React.ReactNode;
}
export const Title = ({ children }: TitleProps) => {
  return (
    <h1 className="ms-2 text-4xl font-extrabold">{children}</h1>
  )
}
