import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function MovieCard(props) {

    let imageData = props.image;
    const placeHolderImage = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
    const title = props.title;
    const description = props.description.replace(/(<([^>]+)>)/ig, '');
    const booked = props.booked
    const navigate = useNavigate();

    if (imageData === null) {
        imageData = placeHolderImage;
    } else {
        imageData = imageData.original;
    }

    const handleClick = () => {
        navigate('/details', { state: { title, description, imageData, booked } });
    }

    return (
        <div className="card" style={{ width: "18rem", display: 'inline-block', verticalAlign: 'top', margin: '12px' }}>
            <img height="400px"
                className="card-img-top"
                src={imageData}
                alt="Card image cap"></img>
            <div style={{ textAlign: "start" }} className="card-body">
                <h5 className="card-title">{title}</h5>
                <p style={{ display: '-webkit-box', WebkitLineClamp: '5', WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis', }}
                    className="card-text" >{description}</p>
                <button onClick={handleClick} className="btn btn-primary">Book Tickets</button>
                <p style={{ color: 'green', padding: "5px", verticalAlign: 'baseline', margin: "0px", display: 'inline-block', }}>{props.booked && "booked"}</p>
            </div>
        </div >
    )
}

export default MovieCard