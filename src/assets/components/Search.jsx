import React, { useRef, useState } from 'react'
import Meals from './Meals'
import { useDispatch } from 'react-redux'
import { getMealsByFLetterApi, getMealsByNameApi } from '../API/getMeals'
import { setMeals } from '../libs/slices/mealsSlice'

export default function Search() {
  let nameInput = useRef()
  let letterInput = useRef()
  let dispatch = useDispatch()

  function searchByName(e) {
    letterInput.current.value = '';

    getMealsByNameApi(e.target.value)
    .then((data) => dispatch(setMeals(data)))

  }

  function searchByFLetter(e) {

    if (!e.target.value){
      getMealsByNameApi('')
      .then((data) => dispatch(setMeals(data)))
    }
    
    nameInput.current.value = '';
    if (e.target.value.length >= 1)
      e.target.value = e.target.value.charAt(0)

    if (e.target.value.length == 1) {
      getMealsByFLetterApi(e.target.value)
      .then((data) => dispatch(setMeals(data)))
    }
  }

  return (
    <>
      <div className='container mb-5'>
        <div className="row g-4 w-75 mx-auto">
          <div className="col-md-6">
            <input ref={nameInput} onChange={searchByName} type="text" className="form-control search-field" id="searchByName" placeholder="Search By Name" />
          </div>
          <div className="col-md-6">
            <input ref={letterInput} onChange={searchByFLetter} type="text" className="form-control search-field" id="searchByFirstLetter" placeholder="Search By First Letter" />
          </div>
        </div>
      </div>

      <Meals></Meals>
    </>
  )
}
