import React, { useState, useEffect } from "react";
import axios from "axios";
function Movies() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
//   console.log(search);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=de10c7a41b498f84b45c50b0ad40101d&query=a"
      )
      .then((res) => {
        setItems(res.data.results || []); // ป้องกัน error ถ้าไม่มีข้อมูล     (res.data) is obj not array but  (res.data.results) is array
      })
      .catch((error) => {
        console.log("Error in get api movie. " + error);
      });
  }, []);
  // console.log(items);
  return (
    <div className="movies">
      <div>Movie</div>

      <input
        type="text"
        className="movies-filter"
        placeholder="Search movie ..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {items
      .filter((item)=>{
            return search.toLocaleLowerCase() === '' ? item : item.original_title.toLowerCase().includes(search.toLowerCase()); 
      })
      
      .map((item, index) => (
        <div className="item" key={index}>
          {item.backdrop_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} /* TMDB images api https://developer.themoviedb.org/docs/image-basics */
              alt="Movie Backdrop"
              style={{ width: "300px", borderRadius: "10px" }}
            />
          ) : (
            <p>No image available</p>
          )}
          <p>
            <strong>Name:</strong> {item.original_title}
          </p>
          <p>
            <strong>Overview:</strong> {item.overview}
          </p>
          <p>
            <strong>release:</strong> {item.release_date}
          </p>
          <p>
            <strong>popularity:</strong> {item.popularity}
          </p>
          <p>
            <strong>vote average:</strong> {item.vote_average}
          </p>
          <p>
            <strong>vote count:</strong> {item.vote_count}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Movies;
