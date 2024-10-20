import React from 'react'
import './Style.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsIcon from '@mui/icons-material/Apps';

const Header = () => {
  return (
    <div className="header">
      <div className='logo'>
      <img src='/logo.jpeg' alt='This is a logo'/>
      </div>
      <div className='search__user'>
      <SearchIcon />
      <input type='text' placeholder='Search'/>
      </div>
    <div className='icons'>
      <HomeIcon />
      <GroupIcon />
      <WorkIcon />
      <MessageIcon />
      <NotificationsIcon />
      <AccountCircleIcon />
      <AppsIcon />
    </div>

    </div>
  )
}

export default Header
