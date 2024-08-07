import React from 'react';
import "./header.scss";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchIcon from '@mui/icons-material/Search';


const Header = () => {
  return (
    <div className='header'>
        <div className="wrapper">
          <div className='left'>
            <DashboardIcon color='primary' className='dashboard-icon' fontSize="large"/>
            <div className="search">
              <SearchIcon style={{ fill: '#d0d0d0' }}/>
            <input type="text" placeholder='Search here' />
          </div>
          </div>
          <div className="items">
            <div className="item"><EmailOutlinedIcon className='icon'/></div>
            <div className="item"><SettingsOutlinedIcon className='icon'/></div>
            <div className="item"><NotificationsNoneOutlinedIcon className='icon'/>
            <div className="dot"></div>
            <div className="item"><img src="https://images.pexels.com/photos/9879466/pexels-photo-9879466.jpeg?cs=srgb&dl=pexels-beytlik-9879466.jpg&fm=jpg" alt="" className='avatar'/> </div>
            </div>


          </div>
        </div>
    </div>
  )
}

export default Header;