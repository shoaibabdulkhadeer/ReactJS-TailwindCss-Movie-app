import React from 'react'
import { Link } from 'react-router-dom';



const Movieitem = ({ movie}) => {

  console.log(movie)
  return ( 
     <Link to= {`/movie/${movie.imdbID}`}>


    <div key={movie.imdbID} className=" text-center
     rounded-3xl ease-in-out  shadow-md shadow-[#040c16] 
     duration-500  scale-75 hover:scale-90 cursor-pointer">  
    <img src={ movie.Poster === "N/A" ?  "https://via.placeholder.com/400" :  movie.Poster} alt="" className='w-full rounded-3xl'/>
    <p className=' text-[17px] font-bold p-2 sm:text-2xl text-red-700 font-serif'>{movie.Title}</p>  
    <p className='font-semibold text-sm sm:text-xl text-green-400'>Year - {movie.Year}</p>
    <p className='font-semibold text-sm sm:text-xl text-blue-600'>Type - {movie.Type.toUpperCase()}</p>
   
    </div>
    </Link>
  
  );
}

export default Movieitem
