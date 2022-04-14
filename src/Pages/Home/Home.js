import React, { useEffect, useState } from 'react';
import Room from './Room/Room';
import './Home.css'

const Home = () => {
    const [hotels, setHotels] = useState([])
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setHotels(data))
    }, [])
    return (
        <div>
            <h1>Home</h1>
            <div className='hotels-container'>
                {
                    hotels.map(room => <Room key={room.id} room={room} />)
                }
            </div>
        </div>
    );
};

export default Home;