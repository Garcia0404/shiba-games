export const BackgroundGradient = () => {
  return (
    <>
      <div className="absolute sm:bg-contain bg-[url(/bg4.svg)] w-full h-full -z-20"></div>
      <div className="absolute backdrop-blur-3xl -z-10 w-full h-full"></div>
    </>
  )
}
