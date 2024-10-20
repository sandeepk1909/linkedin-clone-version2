import React from 'react'
import './Style.css'
import MovieRoundedIcon from "@mui/icons-material/MovieRounded";
import WorkspacesRoundedIcon from "@mui/icons-material/WorkspacesRounded";
import NewspaperRoundedIcon from "@mui/icons-material/NewspaperRounded";

const Form = () => {
  return (
    <div className="form">
      <div className='form__top'>
        <img src='/logo.jpeg' alt='avatar'/>
        <input type='text' placeholder='Start a post, try writing with AI'/>

      </div>
      <div className='form__bottom'>
        <div className='featares1 form__bottom_icons'>
        <MovieRoundedIcon  color='secondary'/>
        <h4>Media</h4>
        </div>
        <div className='featares2 form__bottom_icons'>
        <WorkspacesRoundedIcon color='primary'/>
        <h4>Event</h4>
        </div>
        <div className='featares3 form__bottom_icons'>
        <NewspaperRoundedIcon  color='success'/>
        <h4>Article</h4>
        </div>

      </div>
      
      
    </div>
  )
}

export default Form
