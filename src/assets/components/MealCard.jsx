import React from 'react'

export default function MealCard({data}) {
    return (
        <div className="meal-card cursor-pointer w-100 rounded-3 overflow-hidden position-relative" id={data.idMeal}>
            <img src={data.strMealThumb} className="w-100" />
            <div className="meal-card-overlay card-overlay d-flex align-items-center justify-content-center p-3 position-absolute top-0 bottom-0 start-0 end-0">
                <h3>{data.strMeal}</h3>
            </div>
        </div>
    )
}
