import { useState } from "react";

export const Banner = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleLoad = () => {
    setIsLoaded(true);
  };
  return (
    <section aria-labelledby="hero-heading" className="bg-[url(/banner/banner1.webp)] z-0 bg-cover relative">
      <div className="absolute top-0 w-full h-full backdrop-blur-2xl -z-10"></div>
      <img onLoad={handleLoad}
        className="h-full w-full mx-auto max-h-120 transition-opacity duration-300 ease-out min-h-40 object-center object-cover"
        style={{
          opacity: isLoaded ? 1 : 0,
        }}
        src="/banner/banner1.webp" 
        width={1024} height={330.75} alt="banner_1" fetchPriority="high" />
      <div className="w-full h-6 bg-[rgba(0,0,0,0.5)] flex gap-4 items-center justify-center absolute bottom-0 backdrop-blur-2xl">
        <button aria-label="preview-image" className="cursor-pointer">
          <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="me-3 size-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        <div className="bg-white/50 size-2.5 rounded-full cursor-pointer"></div>
        <div className="border-white border size-2.5 rounded-full cursor-pointer"></div>
        <div className="border-white border size-2.5 rounded-full cursor-pointer"></div>
        <div className="border-white border size-2.5 rounded-full cursor-pointer"></div>
        <div className="border-white border size-2.5 rounded-full cursor-pointer"></div>
        <button aria-label="next image" className="cursor-pointer">
          <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ms-3 size-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </section>
  )
}
