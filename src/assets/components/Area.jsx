import { useQuery } from '@tanstack/react-query'
import React from 'react'
import getAreasApi from '../API/getAreas'
import { useNavigate } from 'react-router-dom';
import { getMealsByAreaApi } from '../API/getMeals';
import { useDispatch } from 'react-redux';
import { setLoading, setMeals } from '../libs/slices/mealsSlice';
import Areacard from './Areacard';
import Loader from './Loader';

export default function Area() {

  let {data, isError, error, isLoading} = useQuery({queryKey: ['getAreas'], queryFn: getAreasApi})
  let areas = data?.data?.meals;

  let navigate = useNavigate()
  let dispatch = useDispatch()

  function handleAreaClick(area){   
    dispatch(setMeals([]));
    dispatch(setLoading(true));
    navigate('/');
    getMealsByAreaApi(area)
    .then((data)=>dispatch(setMeals(data)))
    .then(()=>dispatch(setLoading(false)))
    .catch((error)=>navigate('/'));
  }
  

if (isLoading)
  return <Loader></Loader>

  return (
    <div>
      <div className="container">
            <div className="row g-4">
                {areas?.map((area)=><div className='col-md-6 col-lg-4 col-xl-3' key={area.strArea} onClick={()=>handleAreaClick((area.strArea))}><Areacard data={area}></Areacard></div>)}
            </div>
        </div>
    </div>
  )
}
