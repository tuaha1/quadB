import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import MovieForm from '../components/MovieForm';

function MovieDetails() {

    const [displayForm, setDisplayForm] = useState(false)
    const location = useLocation()
    const { title, description, imageData, booked } = location.state;

    const onClickHandler = () => {

        if (displayForm) {
            setDisplayForm(false);
            return;
        }

        setDisplayForm(true);
    }

    return (
        <div>
            <Header />
            {displayForm && <MovieForm title={title} handleClick={onClickHandler} />}
            <div className='container' style={{ marginTop: '20px', textAlign: 'left', }}>
                <Link style={{ display: 'block', color: 'black', textDecoration: 'none', paddingBottom: '5px', fontSize: '20px' }} to="/">back</Link>
                <img alt='img' height="500rem" style={{ paddingBottom: "5px", borderRadius: "10px" }} src={imageData}></img>
                <h1 style={{ paddingBottom: "5px" }}>{title}</h1>
                <p>{description} </p>
                {booked ? <h3 style={{ color: 'green' }}>ticked booked</h3> : <button onClick={onClickHandler} className='btn btn-primary'>Book Ticket</button>}
            </div>
        </div>
    )
}

export default MovieDetails