import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard';
import Header from '../components/Header';

function MoviePage() {

    const [data, setData] = useState([]);

    function getAllLocalStorageItems() {
        const names = JSON.parse(localStorage.getItem('booking')) || [];
        const bookedMovies = names.map((elements) => elements.movieName);
        return bookedMovies;
    }

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then((response) => response.json())
            .then((data) => setData(data))


        console.log(getAllLocalStorageItems());
    }, [])

    return (
        <div>
            <Header />
            <div className='container' style={{ textAlign: 'center', paddingTop: "60px" }}>
                <h1>movies</h1>
                {data.map((elements, index) => {
                    return <MovieCard
                        key={index}
                        image={elements.show.image}
                        title={elements.show.name}
                        booked={getAllLocalStorageItems().includes(elements.show.name) ? true : false}
                        description={elements.show.summary}></MovieCard>
                })}
            </div>

        </div>

    )
}

export default MoviePage