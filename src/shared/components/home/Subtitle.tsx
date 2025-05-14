interface SubtitleProps {
  children: React.ReactNode
}
export const Subtitle = ({ children }: SubtitleProps) => {
  return (
    <h2 className="text-2xl font-bold mb-6 uppercase">
      {children}
    </h2>
  )
}
