import React from 'react'
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './more.scss'

const More = ({ type }) => {
    let data;

    switch (type) {
      case "goal":
        data = {
          icon: <CrisisAlertIcon className='goal'/>,
          title: "Goals",
        };
        break;
      default:
        break;
    }
    switch (type) {
      case "dish":
        data = {
          icon: <LunchDiningIcon className='dish'/>,
          title: "Popular Dishes",
        };
        break;
      default:
        break;
    }
    switch (type) {
      case "menu":
        data = {
          icon: <RestaurantMenuIcon className='menu'/>,
          title: "Menus",
        };
        break;
      default:
        break;
    }
  
    return (
      <div className='more'>
          <div className='left-align'>
          {data.icon}
          <span>{data.title}</span> 
          </div>
          <div className='right-icon'>
          <ChevronRightIcon />
          </div>
          
      </div>
    )
}

export default More