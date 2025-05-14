interface DescriptionProps {
  children: React.ReactNode;
}
export const Description = ({ children }: DescriptionProps) => {
  return (
    <div>
      <h2 className="text-sm mb-4 border-b text-white/70 w-max p-2">Descripción</h2>
      <p>{children}</p>
    </div>
  )
}
