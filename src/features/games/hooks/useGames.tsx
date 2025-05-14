import { getGames } from '../../../shared/utils/games'
import useSWR from 'swr'

export const useGames = () => {
  const { data, error, isLoading } = useSWR('/', getGames, {
    revalidateOnFocus: false,
    shouldRetryOnError: true,
    errorRetryInterval: 3000
  })
  return {
    games: data, error, isLoading
  }
}
