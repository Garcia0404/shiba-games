export const BackgroundGradient = () => {
  return (
    <>
      <div className="absolute bg-contain bg-[url(/bg.png)] w-full h-full -z-20"></div>
      <div className="absolute backdrop-blur-3xl -z-10 w-full h-full"></div>
    </>
  )
}
