import { useQueries, useQuery } from '@tanstack/react-query'
import React from 'react'
import { getIngredientsApi } from '../API/getIngredients'
import Ingredientcard from './Ingredientcard'
import { setLoading, setMeals } from '../libs/slices/mealsSlice'
import { getMealsByIngredientApi } from '../API/getMeals'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loader from './Loader'

export default function Ingredients() {

  let {data, isLoading, isError, error} = useQuery({queryKey: ['getIngredients'], queryFn: getIngredientsApi})
  let ingredients = data?.data?.meals;
  let dispatch = useDispatch()
  let navigate = useNavigate()
  
  function handleIngredientClick(ingredient){
    dispatch(setMeals([]));
    dispatch(setLoading(true));
    navigate('/');
    getMealsByIngredientApi(ingredient)
    .then((data)=>dispatch(setMeals(data)))
    .then(()=>dispatch(setLoading(false)))
  }

  if (isLoading)
    return <Loader></Loader>

  return (
    <div className="container">
            <div className="row g-4">
                {ingredients?.map((ingredient)=><div onClick={()=>handleIngredientClick(ingredient.strIngredient)} key={ingredient.idIngredient} className='col-md-6 col-lg-4 col-xl-3'><Ingredientcard data={ingredient}></Ingredientcard></div>)}
            </div>
        </div>
  )
}
