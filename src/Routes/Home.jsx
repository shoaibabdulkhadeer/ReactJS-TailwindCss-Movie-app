import React from 'react'
import Movieitem from '../components/Movieitem'
import Typewriter from "typewriter-effect";



const Home = ({movies, setSearchValue , searchValue}) => {
 
  return (
    <div className=' min-h-[100vh] bg-[#0a192f]  text-slate-200 flex flex-col  font-extrabold'>

          <div className='w-full h-36 flex flex-col items-center justify-between gap-4 p-12 '>
               <h1 className='text-3xl font-bold font-red-500 p-2'>MovieApp</h1>

                <div>
                <input 
                className="placeholder-gray-600 text-black focus:placeholder-gray-700 px-2 rounded-full"
                 placeholder="Search a Movie"
                 onChange={(e) => setSearchValue(e.target.value)}
                  />
               </div>
           </div>

              
           
       <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center '>

               {!searchValue?
           <div className='flex items-center justify-center w-full absolute top-52 text-red-500 text-sm md:text-xl'>
           <Typewriter 
            options={{
              strings: ["  Search Your Favourite Movie Now !! 💀 " ],
              autoStart: true,
              loop: true,
            }}
          />
            </div>
            :    
  
             movies.map((movie,index) => (
            <Movieitem movie={movie}/>
             ))}
             
      </div>
    
            
      
    </div>
  )
}

export default Home
