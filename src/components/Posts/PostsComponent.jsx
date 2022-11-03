import { useEffect, useState } from 'react';
import axios from 'axios';
import CardComponent from '../Card/CardComponent';
import PaginationButtonsComponent from '../PaginationButtons/PaginationButtonsComponent';
import './postsComponent.css';


const Posts = ({query, lazy}) => {
  const [movies, setMovies] = useState([]);
  // const [pokemons, setPokemons] = useState([]);
  // const [allPokemons, setAllPokemons] = useState([]);
  // const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=18');
  // const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=6');
  
  const [currentPageUrl, setCurrentPageUrl] = useState('https://api.themoviedb.org/3/movie/popular?api_key=c7bf57d03e6d7d4078967361f9f64025&language=en-US&page=1');
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  

  // useEffect(() => {
  //   setLoading(true);
  //   axios.get(currentPageUrl).then(res => {
  //     setLoading(false);
  //     setNextPageUrl(res.data.next);
  //     setPrevPageUrl(res.data.previous);
  //     setPokemons(res.data.results);
  //   })
  // }, [currentPageUrl]);

  useEffect(() => {
    setLoading(true);
    axios.get(currentPageUrl).then(res => {
      setLoading(false);
      setNextPageUrl(res.data.page + 1);
      setPrevPageUrl(res.data.page - 1);
      setMovies(res.data.results);
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    })
  }, [currentPageUrl]);

  const nextPage = () => {
    setCurrentPageUrl(`https://api.themoviedb.org/3/movie/popular?api_key=c7bf57d03e6d7d4078967361f9f64025&language=en-US&page=${nextPageUrl}`);
  }

  const prevPage = () => {
    setCurrentPageUrl(`https://api.themoviedb.org/3/movie/popular?api_key=c7bf57d03e6d7d4078967361f9f64025&language=en-US&page=${prevPageUrl}`);
  }

  if(loading) {
    return <h1>Loading</h1>;
  }


  return (
    <>
      <div id="posts__container">
        {movies.filter((movie) => movie.title.toLowerCase().includes(query)).map((movie, index) => (
          <CardComponent
            key={index}
            id={movie.id}
            name={movie.title}
            image={movie.poster_path}
            rating={movie.vote_average}
          />
        ))}
      </div>
      {/* {!lazy && <PaginationButtonsComponent prevPage={prevPage} nextPage={nextPage} prevPageUrl={prevPageUrl} />} */}
      <PaginationButtonsComponent next={nextPage} prev={prevPage} prevPageUrl={prevPageUrl} />
    </>
  )
}

export default Posts