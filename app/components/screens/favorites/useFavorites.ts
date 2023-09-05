import { useQuery } from 'react-query'

import { useAuth } from '@/hooks/useAuth'

import { UserService } from '@/services/user.service'

export const useFavorites = () => {
  const { user } = useAuth()
  const {
    isLoading,
    data: favoritesMovies,
    refetch,
  } = useQuery(['favorite movies', user], () => UserService.getFavorites(), {
    select: ({ data }) => data.slice(0, 3),
    enabled: !!user,
  })

  return {
    isLoading,
    favoritesMovies,
    refetch,
  }
}
