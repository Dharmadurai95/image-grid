
import './App.css'
import FoodItems from './foodItems'
import * as constant from './constant/index.js'
import Header from './Header.js'
import { useState } from 'react'

type foodList = Array<{
  image_url: string;
  description: string;
  rating: number;
  tags: string[];
  vegetarian: boolean;
  price: number;
  hotel_name: string;
  place: string;
}>


function App() {

  const [foodList, setFoodlist] = useState(constant.foodItems)
  function searchHandlerFunc(param: string) {
    const filterRes:foodList  = foodList.filter((item) => item.description.toLowerCase().includes(param.toLowerCase()));
    if (filterRes.length) setFoodlist(filterRes)

  }

  return (
    <>
      <Header searchHandler={searchHandlerFunc} />
      <FoodItems data={foodList} />
    </>
  )
}

export default App
