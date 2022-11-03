import { useEffect, useState } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import './cardsComponent.css'

import CardComponent from '../Card/CardComponent';

const CardsComponent = ({query}) => {
    const [latestMovies, setLatestMovies] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [currentPageUrl, setCurrentPageUrl] = useState(`https://api.themoviedb.org/3/movie/popular?api_key=c7bf57d03e6d7d4078967361f9f64025&language=en-US&page=${pageNo}`);
    const [totalResults, setTotalResults] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios.get(currentPageUrl).then(res => {
            setLatestMovies(res.data.results);
            setPageNo(res.data.page);
            setTotalResults(res.data.total_results);
            console.log(res.data);
            setLoading(false);
        }).catch(err => {
            console.log(err);
        })
    }, []);

    // const fetchMoreMovies = async () => {
    //     setPageNo(parseInt(pageNo) + 1);
    //     const url = `https://api.themoviedb.org/3/movie/popular?api_key=c7bf57d03e6d7d4078967361f9f64025&language=en-US&page=${parseInt(pageNo)}`;
    //     setLoading(true);
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     setLatestMovies(latestMovies.concat(parsedData.results));
    //     setLoading(false);

    // }

    const fetchMoreMovies = async () => {
        setLoading(true);
        setPageNo(parseInt(pageNo) + 1);
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=c7bf57d03e6d7d4078967361f9f64025&language=en-US&page=${parseInt(pageNo+1)}`;
        axios.get(url).then(res => {
            setLatestMovies(latestMovies.concat(res.data.results));
            setPageNo(res.data.page);
            setTotalResults(res.data.total_results);
            setLoading(false);
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
        setLoading(false);
    }

    if (loading) {
        return <h1>Loading</h1>;
    }

    console.log(pageNo);
    console.log(totalResults);
    console.log(latestMovies);

    return (
        <>
            <InfiniteScroll
                dataLength={latestMovies.length}
                next={fetchMoreMovies}
                hasMore={latestMovies.length <= totalResults}
                loader={<h1>Loading...</h1>}
            >
                <div id="cards__container">

                    {latestMovies.filter((movie) => movie.title.toLowerCase().includes(query)).map((movie, index) => {
                        return (
                            <CardComponent
                                key={index}
                                id={movie.id}
                                name={movie.title}
                                image={movie.poster_path}
                                rating={movie.vote_average}
                            />
                        )
                    })}
                </div>
            </InfiniteScroll>
        </>
    )
}

export default CardsComponent