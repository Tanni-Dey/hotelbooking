import React, { useEffect, useState } from 'react';
import './Meals.css'

const Meals = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch('meal.json')
            .then(res => res.json())
            .then(data => setMeals(data))
    }, [])
    console.log(meals);
    return (
        <div>
            <h1>meals</h1>
        </div>
    );
};

export default Meals;