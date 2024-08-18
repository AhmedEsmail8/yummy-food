import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getCategoriesApi } from '../API/gatCategories'
import Loader from './Loader';
import Categorycard from './Categorycard';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setMeals } from '../libs/slices/mealsSlice';
import { useNavigate } from 'react-router-dom';
import { getMealsByCategoryApi } from '../API/getMeals';

export default function Category() {

  let {data, isLoading, isError, error} = useQuery({queryKey: ['categories'], queryFn: getCategoriesApi})
  console.log(data);

  let navigate = useNavigate()
  let dispatch = useDispatch()

  function handleCategoryClick(category){
    dispatch(setMeals([]));
    dispatch(setLoading(true));
    navigate('/');
    getMealsByCategoryApi(category)
    .then((data)=>dispatch(setMeals(data)))
    .then(()=>dispatch(setLoading(false)));
  }

  if (isLoading)
    return <Loader></Loader>
  
  return (
    <div>
      <div className="container">
            <div className="row g-4">
                {data.data.categories.map((category)=><div className='col-md-6 col-lg-4 col-xl-3' key={category.idCategory} onClick={()=>handleCategoryClick(category.strCategory)}><Categorycard data={category}></Categorycard></div>)}
            </div>
        </div>
    </div>
  )
}
