import React from 'react'
import './Style.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SidebarRight = () => {
  return (
    <div className="sidebar__right">
      <div className='trending'>
        <div className='trending__news'>
          <h3>Trending Now</h3>
          <p>curated by LinkedIn News</p>
        </div>
        <div className='trending__opt'>
          <h4>Primus Senior Living raises $20M</h4>
          <p>1d ago . 23,435 readers</p>
        </div>
        <div className='trending__opt'>
          <h4>Consumer brans</h4>
          <p>5d ago . 13,435 readers</p>
        </div>
        <div className='trending__opt'>
          <h4>Restaurant business</h4>
          <p>1d ago . 34,435 readers</p>
        </div>
        <div className='trending__opt'>
          <h4>Car sales</h4>
          <p>9d ago . 23,245 readers</p>
        </div>
        <div className='trending__opt'>
          <h4>Travel trends</h4>
          <p>1d ago . 23,445 readers</p>
        </div>
        <div className='trending__opt'>
          <h4>Marketing trends</h4>
          <p>5d ago . 43,435 readers</p>
        </div>
        <div className='trending__opt'>
          <h4>Auto industry</h4>
          <p>1d ago . 28,435 readers</p>
        </div>
        <div className='trending__opt'>
          <h4>Hospitality industry</h4>
          <p>7d ago . 42,435 readers</p>
        </div>
        <div className='trending__opt'>
          <h4>E-commerce hiring</h4>
          <p>1d ago . 23,435 readers</p>
        </div>
        <div className='trending__opt'>
          <h4>CXO job hunting</h4>
          <p>8d ago . 98,435 readers</p>
        </div>
        <div className='trending__opt'>
          <h4>TCS hiring</h4>
          <p>1d ago . 23,435 readers</p>
        </div>
        <div className='trending__opt'>
          <h4>Wipro hiring</h4>
          <p>1d ago . 23,435 readers</p>
        </div>
        <div className='trending__opt'>
          <h4>Tech Mahindra hiring</h4>
          <p>1d ago . 23,435 readers</p>
        </div>
        
      </div>
      <div className='adds'>
        <div className='add'>
      <p>Sandeep, unlock your full potential with LinkedIn Premium</p>
      </div>
      <div className='picture'>
        <img src='/my profile.jpeg' alt='photo'/>
      </div>
      <div className='picture2'>
      <img src='/logo.jpeg' alt='logo'/>
      </div>
      <div className='des'>
        <p>See who's viewed your profile in the last 90 days</p>
        </div>
        <div className='adds__bottom'>
          <h4>Try for free!</h4>
        </div>
      
      </div>
      <div className='extra'>
      <LinkedInIcon />
      <p>Try LinkedIn on the Windows App</p>
      </div>
      
    </div>
  )
}

export default SidebarRight
