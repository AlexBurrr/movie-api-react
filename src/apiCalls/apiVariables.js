export const API_KEY = '21ac8eec01fc0e49780c1a2d65e30dc1'

export const popularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
export const trendingMedia = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
export const trendingMovies = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
export const trendingTV = `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`

export const movieInfo = `https://api.themoviedb.org/3/movie/${localStorage.getItem('movie id')}?api_key=21ac8eec01fc0e49780c1a2d65e30dc1&language=en-US`
export const tvInfo = `https://api.themoviedb.org/3/tv/${localStorage.getItem('TV id')}?api_key=21ac8eec01fc0e49780c1a2d65e30dc1&language=en-US`
