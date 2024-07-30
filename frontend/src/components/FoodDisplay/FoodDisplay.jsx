// eslint-disable-next-line no-unused-vars
import React from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    // eslint-disable-next-line no-unused-vars
    const { food_list } = React.useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you.</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          return <FoodItem key={index} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image}/>
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
