import React,{useState,useEffect} from 'react'
import axios from 'axios';
function Movies() {
const [items,setItems] =useState([]);    
useEffect(()=>{
    axios
    .get('https://api.themoviedb.org/3/search/movie?api_key=de10c7a41b498f84b45c50b0ad40101d&query=a')
    .then((res)=>{
        setItems(res.data);
        
    })


},[]);
console.log(items);
    return (
    <div>
      Movie
    </div>
  )
}

export default Movies
