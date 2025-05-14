interface Props {
  setIsGridView: React.Dispatch<React.SetStateAction<boolean>>
  isGridView: boolean
}
export const View = ({ isGridView, setIsGridView }: Props) => {
  const handleToggleView = () => {
    setIsGridView((prev) => !prev)
  }
  return (
    <div onClick={handleToggleView} className="cursor-pointer flex gap-1 items-center p-2 bg-[#1a1a1a90] rounded-md overflow-hidden relative z-0">
      {/* Icono grid */}
      <div style={{ transform: isGridView ? 'translateX(0)' : 'translateX(28px)' }} className="-z-10 transition-all ease-in-out size-6 rounded-md bg-main absolute"></div>
      <button aria-label="Ver como cuadrícula" className="p-1 cursor-pointer">
        <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={24} height={24} strokeWidth={1.3}>
          <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path> <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
          <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path> <path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
        </svg>
      </button>
      {/* Icono de lista */}
      <button aria-label="Ver como lista" className="p-1 cursor-pointer">
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="size-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
      </button>
    </div>
  )
}
