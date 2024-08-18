import { useQuery, useQueryClient } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getMealByIdApi } from '../API/getMeals'
import Loader from './Loader';
import handleMealData from '../API/handleMealData';

export default function MealDetails() {
  let { id } = useParams()
  let { data, isLoading, isError, error } = useQuery({ 
    queryKey: ['mealById'],
    queryFn: () => getMealByIdApi(id),
    gcTime: 0
    })
  let navigate = useNavigate()

  let meal = data?.data?.meals?.map((meal) => handleMealData(meal))[0];
  let tags = meal?.strTags?.split(',');
  if (isError)
    navigate('/');

  if (isLoading)
    return <Loader></Loader>

  function handleCloseClick(){
    navigate('/');
  }

  return (
    <div>
      <div className="container position-relative">
        <i className='fa-solid fa-x text-white cursor-pointer position-absolute top-0 me-2 end-0' onClick={handleCloseClick}></i>
        <div className="row pt-4 pt-lg-0">
          <div className="col-lg-4 text-white">
            <img src={meal.strMealThumb} className="w-100 rounded-3 meal-details-thumbnail" />
            <h2 className="mb-2 meal-title">{meal.strMeal}</h2>
          </div>
          <div className="col-lg-8 text-white">
            <div>
              <h2>Instructions</h2>
              <p className="meal-instructions">{meal.strInstructions}</p>
            </div>
            <h3>
              <span className="fw-bolder">Area : </span>
              <span className="meal-details-area">{meal.strArea}</span>
            </h3>
            <h3>
              <span className="fw-bolder">Category : </span>
              <span className="meal-details-category">{meal.strCategory}</span>
            </h3>
            <h3>Recipes :</h3>
            <ul className="recipes list-unstyled d-flex flex-wrap g-3">
              {meal.measures?.map((measure, i) => <li key={`${measure} ${meal.ingredients[i]}`} className="alert alert-info m-2 p-1">{measure} {meal.ingredients[i]}</li>)}
            </ul>
            {tags ? <><h3>Tags :</h3>
              <ul className="tags list-unstyled d-flex flex-wrap g-3">
                {tags?.map((tag, i) => <li className="alert alert-danger m-2 p-1" key={tag}>{tag}</li>)}
              </ul></> : ''}
            <a href={meal.strSource} target="_blank" className="source-link me-2"><button className="btn btn-success">Source</button></a>
            <a href={meal.strYoutube} target="_blank" className="youtube-link"><button className="btn btn-danger">Youtube</button></a>
          </div>
        </div>
      </div>
    </div>

  )
}
