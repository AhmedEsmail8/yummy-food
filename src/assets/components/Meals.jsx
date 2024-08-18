import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MealCard from './MealCard';

import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
import { setMeals } from '../libs/slices/mealsSlice';
import { getMealsByNameApi } from '../API/getMeals';

export default function Meals() {

  let {meals, loading} = useSelector((data) => data.meals);
  let navigate = useNavigate();
  let dispatch = useDispatch()

  async function handleMeals(){
    if (meals === null){
      dispatch(setMeals(await getMealsByNameApi('')))
    }
  }

  handleMeals();

  if (loading)
    return <Loader></Loader>

  return (
    <div>
      <div className="container">
        <div className="row g-4">
          {meals?.meals?.map((meal) => <div key={meal.idMeal} className='col-md-6 col-lg-4 col-xl-3' onClick={()=>navigate(`/details/${meal.idMeal}`)}><MealCard data={meal} ></MealCard></div>)}
        </div>
      </div>
    </div>
  )
}
