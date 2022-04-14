import React from 'react';

const Room = ({ room }) => {
    const { name, img, rating } = room;
    return (
        <div>
            <h1>Room</h1>
            <div>
                <img width='80%' src={img} alt="" />
                <h4>{name}</h4>
                <h6>Price : {rating}</h6>
                <button>Book now</button>
            </div>
        </div>
    );
};

export default Room;