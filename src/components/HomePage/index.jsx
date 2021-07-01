/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react'
import Button from "../Button/index"
import "./index.scss"
import {FiPlay,FiPlus} from "react-icons/fi"
import axios from 'axios'
import {netflixOriginalsUrl} from "../../data"
const HomePage = () => {
    const [movie,setMovie] = useState([])
    const imagePath = "https://image.tmdb.org/t/p/original/"
    useEffect(async()=>{
        const response = await axios.get(netflixOriginalsUrl)
        setMovie(response.data.results)
    },[])
    const randomNum = Math.round(Math.random() * movie.length)
    const gradient = "linear-gradient(0deg, rgba(0, 0, 0, 0.95) 10%, rgba(255, 255, 255, 0) 100%)"
    return (
        <div>
        {movie.slice(randomNum,randomNum+1).map((item)=>{
            return(       
                <section key={item.id} className="home">
                    <header className="home__image"
                     style={{
                         backgroundImage:`${gradient},
                         url("${imagePath}/${item.backdrop_path}")`}}>               
                   <div className="home__text">
                    <h1 className="home__title">{item.original_name}</h1>
                    <div style={{display: "flex"}}>
                        <Button icon={<FiPlay/>} text={"Play"} />
                        <Button icon={<FiPlus/>} text={"My List"}/>
                    </div>
                    <p className="home__desc">{item.overview.length>=250 ? item.overview.substring(0,250) + "..." : item.overview}</p>
                    </div>
                    </header>
                </section>
            )
        })}
        </div>
    )
}

export default HomePage
