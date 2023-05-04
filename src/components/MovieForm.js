import React, { useState } from 'react'
import "./MovieForm.css"
import { useNavigate } from 'react-router-dom'

function MovieForm(props) {

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const navigate = useNavigate()

    const handleNameChange = (data) => {
        setName(data.target.value)
    }

    const handleMailChange = (data) => {
        setMail(data.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const data = { name, mail, movieName: props.title }

        const existingData = JSON.parse(localStorage.getItem('booking')) || [];
        existingData.push(data)
        localStorage.setItem('booking', JSON.stringify(existingData))

        props.handleClick();
        navigate('/');
    }

    return (
        <div className='backdrop'>
            <div className='form'>
                <header className='header'>
                    <h2>{props.title}</h2>
                    <button onClick={props.handleClick} className='btn btn-primary'>X</button>
                </header>
                <div className='content'>
                    <form onSubmit={handleFormSubmit}>
                        <div className="form-group">
                            <label htmlFor="name1">Name</label>
                            <input onChange={handleNameChange} value={name} type="name" className="form-control" id="name1" placeholder="Enter name"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input onChange={handleMailChange} value={mail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default MovieForm