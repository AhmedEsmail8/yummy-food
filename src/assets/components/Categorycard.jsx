import React from 'react'

export default function Categorycard({data}) {
    let description = data.strCategoryDescription.split(' ');
    return (

            <div className="category-card cursor-pointer w-100 rounded-3 overflow-hidden position-relative" id={data.strCategory}>
            <img src={data.strCategoryThumb} className="w-100" />
            <div className="category-card-overlay card-overlay d-flex flex-column align-items-center p-3 position-absolute top-0 bottom-0 start-0 end-0">
                <h3>{data.strCategory}</h3>
                <p className="text-center">{description.slice(0, 20).toString().replaceAll(',', ' ')}</p>
            </div>
        </div>

    )
}
