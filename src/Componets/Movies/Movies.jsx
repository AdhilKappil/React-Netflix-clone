import { useEffect, useState } from 'react';
import axios from '../../axios';
import {imageUrl,API_KEY} from '../../Constants/constants';
import './Movies.css';
import YouTube from 'react-youtube'

function Movies(props) {
  const [movies, setMovies] = useState([]);
  const [traileId, setTraileID] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(props.url);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching TV shows:', error);
      }
    };

    fetchMovies();
  }, []);

  function handleTrailer(id){
      axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response =>{
        if(response.data.results.length >0){
            setTraileID(response.data.results[0])
        }else{
            console.log('Array is empty');
        }
      })

  }

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((movie, index) => (
          <img onClick={()=>handleTrailer(movie.id)} key={index} className='poster' src={`${imageUrl}${movie.backdrop_path}`} alt={movie.name} />
        ))}
      </div>
      {traileId && <YouTube videoId={traileId.key} opts={opts}/>}
    </div>
  );
}

export default Movies;
