interface TrailerProps {
  trailer: string;
}
export const Trailer = ({ trailer }: TrailerProps) => {
  console.log(trailer);
  return (
    <iframe width="560" height="315"
    className="w-full rounded-lg bg-black"
    src="https://www.youtube.com/embed/Ugb80d5lxEM?si=r-cdy_7hpHgO8UF7" 
    title="YouTube video player" frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  )
}
