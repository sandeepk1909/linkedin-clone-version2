import React from 'react'
import './Style.css'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GroupsIcon from '@mui/icons-material/Groups';
import EventIcon from '@mui/icons-material/Event';
import ExtensionIcon from '@mui/icons-material/Extension';
import BookmarksIcon from '@mui/icons-material/Bookmarks';



const SidebarLeft = () => {
  return (
    <div className="sidebar__left">
      <div className='profile'>
        <div className='profile__header'>
          <img src='background.png' alt='photo'/>
        </div>
        <div className='profile__photo'>
          <img src='/my profile.jpeg' alt='profile'/>
        </div>
        <div className='profile__des'>
          <h2>Sandeep Karumanchi</h2>
          <p>MERN Stack Developer | React | Express |MongoDB | Node | SQL |</p>
          <p>Hyderabad, Telangana</p>
        </div>
      </div>
      <div className='stats'>
      <div className='stat'>
        <h4>Connections</h4>
        <div className='count'>
        <p>250</p>
      </div>
      </div>
      <div className='Network'>
        <p>Grow your network</p>
      </div>
      </div>
      <div className='options'>
      <div className='option'>
        <BookmarkIcon />
        <h4>Saved items</h4>
      </div>
      <div className='option'>
        <GroupsIcon />
        <h4>Groups</h4>
      </div>
      <div className='option'>
        <EventIcon />
        <h4>Events</h4>
      </div>
      <div className='option'>
        <ExtensionIcon />
        <h4>Puzzle Games</h4>
      </div>
      <div className='option'>
        <BookmarkIcon />
        <h4>Bookmarks</h4>
      </div>
      </div>
      </div>
    
  )
}

export default SidebarLeft
