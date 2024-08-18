import React from 'react'

export default function Ingredientcard({ data }) {

    return (
        <div className="ingredient-card w-100 text-center text-white cursor-pointer border border-1 p-2 h-100 rounded" id={data.strIngredient}>
            <i className="fa-solid fa-drumstick-bite fa-4x" />
            <h3>{data.strIngredient}</h3>
            <p>{(data.strDescription ? data.strDescription : '').split(' ').slice(0, 20).toString().replaceAll(',', ' ')}</p>
        </div>
    )
}
