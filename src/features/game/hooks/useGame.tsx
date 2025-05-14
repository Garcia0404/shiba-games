import { getGame } from '../utils/game'
import useSWR from 'swr'
type UUID = `${string}-${string}-${string}-${string}-${string}`
export const useGame = (uuid: UUID) => {
  const { data, error, isLoading } = useSWR(uuid, getGame, {
    revalidateOnFocus: false, // Opcional: evita recargar al cambiar de pestaña
    shouldRetryOnError: true, // Reintentar en errores
    errorRetryInterval: 3000 // Cada 3 segundos
  })
  return {
    game: data, error, isLoading
  }
}
