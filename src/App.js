import React, { useEffect, useState } from 'react';
import Home from "./Routes/Home";
import { Route, Routes } from 'react-router-dom';
import MoviePage from "../src/Routes/MoviePage"


function App() {
 
//  moives State fot storing data
  const [movies,setMovies] = useState([])

  //  serach value state for input onChange
  const [searchValue ,setSearchValue] = useState('')
  
    
  // function for fetching data 
   const getRequest = async (searchValue) => {
   const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_API_KEY}`
   const response = await fetch(url)
    const data = await response.json();
     
    if (data.Search) {
      setMovies(data.Search)
    }
   }
 
  //  useEffect to trigger the function
useEffect(()=> {
  getRequest(searchValue)
},[searchValue])


  return (
    <div>

     <Routes>
        <Route path='/' element={<Home movies={movies} searchValue={searchValue}  setSearchValue={setSearchValue} />}/>
        <Route path='/movie/:movieId' element={<MoviePage />} />
       </Routes>
    </div>
  );
}

export default App;
