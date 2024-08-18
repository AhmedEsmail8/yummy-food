import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './assets/components/Layout'
import Meals from './assets/components/Meals'
import Search from './assets/components/Search'
import Category from './assets/components/Category'
import Ingredients from './assets/components/Ingredients'
import Contact from './assets/components/Contact'
import Area from './assets/components/Area'
import MealDetails from './assets/components/MealDetails'
import NotFound from './assets/components/NotFound'

function App() {

  let routes = createBrowserRouter([
    {path: '/', element: <Layout></Layout>, children:[
      {index: true, element: <Meals></Meals>},
      {path: 'search', element: <Search></Search>},
      {path: 'category', element: <Category></Category>},
      {path: 'ingredients', element: <Ingredients></Ingredients>},
      {path: 'contact', element: <Contact></Contact>},
      {path: 'Area', element: <Area></Area>},
      {path: 'details/:id', element: <MealDetails></MealDetails>},
      {path: '*', element: <NotFound></NotFound>}
    ]}
  ])

  

  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}

export default App
