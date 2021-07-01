/* eslint-disable no-unused-vars */
import React from "react"
import Navbar from "./components/Navbar"
import HomePage from "./components/HomePage"
import MovieCategory from "./components/MovieCategory"
import {netflixOriginalsUrl, 
  netflixActionMovies,
  netflixComedyMovies,
  netflixHorrorMovies,
  netflixRomanceMovies,
  netflixDocumentMovies} from "./data"

function App() {
  return (
    <div className="App">     
        <Navbar/>
        <HomePage/>
        <MovieCategory title={"Netflix Original"} url={netflixOriginalsUrl}/>
        <MovieCategory title={"Action Movies"} url={netflixActionMovies}/>
        <MovieCategory title={"Comedy Movies"} url={netflixComedyMovies}/>
        <MovieCategory title={"Horror Movies"} url={netflixHorrorMovies}/>
        <MovieCategory title={"Romance Movies"} url={netflixRomanceMovies}/>
        <MovieCategory title={"Documentary Movies"} url={netflixDocumentMovies}/>
    </div>
  );
}

export default App;
