import { useState } from 'react'
interface GameImageProps {
  image: string
  title: string
}
export const GameImage = ({ image, title }: GameImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleLoad = () => {
    setIsLoaded(true);
  };
  return (
    <img
      onLoad={handleLoad}
      style={{
        opacity: isLoaded ? 1 : 0,
      }}
      fetchPriority='high'
      className='transition-opacity duration-400 ease-out col-start-1 xl:col-start-2 col-end-6 rounded-lg w-full h-full object-cover ms-auto'
      src={image}
      width={350}
      height={525}
      alt={title}
    />
  )
}
