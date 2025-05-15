interface TrailerProps {
  trailer: string;
}
export const Trailer = ({ trailer }: TrailerProps) => {
  return (
    <video src={trailer}
      className="rounded-xl" controls></video>
  )
}
