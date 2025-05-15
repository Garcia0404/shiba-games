import { getGames } from '../../../shared/utils/games'
import useSWR from 'swr'

export const useGames = () => {
  const { data, error, isLoading } = useSWR(import.meta.env.VITE_API_URL+"games", getGames, {
    revalidateOnFocus: false,
    shouldRetryOnError: true,
    errorRetryInterval: 3000
  })
  return {
    games: data, error, isLoading
  }
}