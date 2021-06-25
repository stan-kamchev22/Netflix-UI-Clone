/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect,useState} from 'react'
import "./index.scss"
import axios from 'axios'

const MovieCategory = ({title,url}) => {
    const [movie,setMovies] = useState([])
    useEffect(async()=>{
        const response = await axios.get(url);
        setMovies(response.data.results)
    },[])

    return (
        <section className="movie">
            <h1 className="movie__title">{title}</h1>
            <article className="movie__container">
            {movie.map((item)=>{
                return(
                <div key={item.id}>
                    
                    <img
                    className="movie__image"
                    src={`https://image.tmdb.org/t/p/original/${item.backdrop_path && item.backdrop_path}`}
                    alt="" />
                   
                </div>
                )
            })}
            </article>
        </section>
    )
}

export default MovieCategory
