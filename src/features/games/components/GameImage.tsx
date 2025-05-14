interface GameImageProps {
  image: string
  title: string
  children?: React.ReactNode
}
export const GameImage = ({ image, title, children }: GameImageProps) => {
  return (
    <figure className='overflow-hidden'>
      <img
        src={image}
        alt={title}
        width={200}
        height={250}
        className="w-full h-auto object-cover transition-transform group-hover:scale-[1.03] duration-500"
      />
      {children}
    </figure>
  )
}
