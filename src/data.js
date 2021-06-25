const url = "https://api.themoviedb.org/3"
const API = "daf200ab00f46215e6a181835256e44a"

export const netflixOriginalsUrl = `${url}/discover/tv?api_key=${API}&with_networks=213` 
export const netflixActionMovies = `${url}/discover/movie?api_key=${API}&with_genres=28`
export const netflixComedyMovies = `${url}/discover/movie?api_key=${API}&with_genres=35`
export const netflixHorrorMovies = `${url}/discover/movie?api_key=${API}&with_genres=27`
export const netflixRomanceMovies = `${url}/discover/movie?api_key=${API}&with_genres=10749`
export const netflixDocumentMovies = `${url}/discover/movie?api_key=${API}&with_genres=99`
