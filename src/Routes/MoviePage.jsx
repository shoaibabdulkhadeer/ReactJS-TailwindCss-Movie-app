import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams, } from 'react-router-dom'
import { RiArrowGoBackFill} from 'react-icons/ri';


const MoviePage = () => {
 

  const [movie , setMovie] = useState([])

  const params = useParams()

  const url = `https://www.omdbapi.com/?i=${params.movieId}&apikey=${process.env.REACT_APP_API_KEY}` 

  useEffect (() => {
   axios.get(url).then((response) => {
    setMovie(response.data)
    console.log(response.data)
   })
  },[url])


  return (
    <div className=' w-full min-h-screen bg-[#0a192f] text-blue-400 flex items-center justify-center'>
  
   <div className='flex flex-col md:flex-row items-center justify-center  p-10'>
   <Link to="/">
     <RiArrowGoBackFill size={40} className="m-5 w-full "/> 
     </Link>
        <img src ={movie.Poster} alt ="poster" className='rounded-3xl w-96 ml-10'/>

         <div className='flex flex-col p-4 ml-10  md:text-start font-serif gap-2'>
           <p className='text-2xl font-bold text-red-600 '>{movie.Title}</p>
           <p className='text-green-400 '> <span className='text-red-600'>Year </span> - {movie.Year}</p>
           <p className='text-green-400'> <span className='text-red-500'>Rating</span>  —  {movie.Rated}</p>
           <p><span className='text-red-500'>Released</span> -  {movie.Released}</p>
           <p>  <span className='text-red-500'>Genre</span>- {movie.Genre}</p>
           <p> <span className='text-red-500'>Director</span> - {movie.Director}</p>
           <p> <span className='text-red-500'>Writer</span>- {movie.Writer}</p>
           <p className='font-extrabold text-green-400 max-w-md'> <span className='text-red-600 '>Description</span> - {movie.Plot}</p>
           <p className=' flex flex-col' > <p className='text-red-600'>Language </p> - {movie.Language}</p>
           <p> <span>Country</span>  - {movie.Country}</p>
           <p> <span>Awards</span> - {movie.Awards}</p>
         </div>

     </div>
    </div>
  )
}

export default MoviePage
