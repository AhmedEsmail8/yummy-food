import React from 'react'

export default function Areacard({ data }) {
    return (
        <div className="area-card cursor-pointer w-100 d-flex flex-column align-items-center text-white h-100 border border-1 rounded p-2" id={data.strArea}>
            <i className="fa-solid fa-house-laptop fa-4x" />
            <h3>{data.strArea}</h3>
        </div>
    )
}
