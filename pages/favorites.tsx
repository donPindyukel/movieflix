import {  NextPage } from 'next'

import Favorites from '@/components/screens/favorites/Favorites'

import { IMovie } from '@/shared/types/movie.types'


const FavoritesPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
  return <Favorites />
}

export default FavoritesPage
