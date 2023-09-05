import { GetStaticProps, NextPage } from 'next'

import Home from '@/components/screens/home/Home'
import { IHome } from '@/components/screens/home/home.interface'
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface'
import { ISlide } from '@/components/ui/slider/slider.interface'

import { ActorService } from '@/services/actor.service'
import { MovieService } from '@/services/movie.service'

import { getGenresList } from '@/utils/movie/getGenresList'

import { getActorUrl, getMovieUrl } from '@/config/url.config'

const HomePage: NextPage<IHome> = ({ slides, actors, trendingMovies }) => {
  return (
    <Home slides={slides} actors={actors} trendingMovies={trendingMovies} />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: movies } = await MovieService.getAll()

    const slides: ISlide[] = movies.map((m) => ({
      _id: m._id,
      link: getMovieUrl(m.slug),
      bigPoster: m.bigPoster,
      subTitle: getGenresList(m.genres),
      title: m.title,
    }))

    const { data: dataActors } = await ActorService.getAll()

    const actors: IGalleryItem[] = dataActors.map((a) => ({
      name: a.name,
      posterPath: a.photo,
      link: getActorUrl(a.slug),
      content: {
        title: a.name,
        subtitle: `+${a.countMovies} movies`,
      },
    }))

    const dataTrendingMovies = await MovieService.getPopularMovies()

    const trendingMovies: IGalleryItem[] = dataTrendingMovies.map((m) => ({
      name: m.title,
      posterPath: m.poster,
      link: getMovieUrl(m.slug),
    }))

    return {
      props: {
        slides,
        actors,
        trendingMovies,
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      props: {
        slides: [],
        actors: [],
        trendingMovies: [],
      },
    }
  }
}

export default HomePage
