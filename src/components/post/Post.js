import React from 'react'
import './Style.css'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ClearIcon from '@mui/icons-material/Clear';


const Post = () => {
  return (
    <div className="post">

      <div className='post__content'>
        <img src='https://imgv3.fotor.com/images/gallery/cartoon-character-generated-by-Fotor-ai-art-creator.jpg' alt='logo'/>
        <div className='post__details'>
          <h4>Tata Consultancy Services</h4>
          <p>120 followers</p>
          <p>1hour ago3</p>
        </div>
        <div className='post__icons'>
       < MoreHorizIcon /> 
       <ClearIcon />
        </div>
      </div>
      <div className='post__des'>
      The CM has announced state mourning on Thursday (October 10). Ratan Tata , chairman emeritus of Tata Sons and philanthropist, passed away on October 9 . He was 86 years old.
      </div>
      <div className='post__img'>
        <img src='https://miro.medium.com/v2/resize:fit:1200/0*3eFtGuipxfAM8yLj.jpg' alt='tata ji'/>
      </div>
      <div className='post__stats'>
        <img src='https://raw.githubusercontent.com/phanison898/github-drive/234f5f675ec08270d8103d02db10917651f027bc/1.svg' alt='reaction'/>
        <img src='https://raw.githubusercontent.com/phanison898/github-drive/234f5f675ec08270d8103d02db10917651f027bc/2.svg' alt='reaction'/>
        <img src='https://raw.githubusercontent.com/phanison898/github-drive/234f5f675ec08270d8103d02db10917651f027bc/3.svg' alt='reaction'/>
        <img src='https://raw.githubusercontent.com/phanison898/github-drive/234f5f675ec08270d8103d02db10917651f027bc/4.svg' alt='reaction'/>
        <img src='https://raw.githubusercontent.com/phanison898/github-drive/234f5f675ec08270d8103d02db10917651f027bc/5.svg' alt='reaction'/>
        <img src='https://raw.githubusercontent.com/phanison898/github-drive/234f5f675ec08270d8103d02db10917651f027bc/6.svg' alt='reaction'/>
      
      <div className='comments'>
        <p>20 comments </p>
      </div>
      </div>
      <div className='post__bottom'>
        <div className='post__bottom_icons'> 
          <ThumbUpOffAltIcon />
          <h4>Like</h4>
        </div>
        <div className='post__bottom_icons'>
          <ChatBubbleOutlineOutlinedIcon />
          <h4>Comment</h4>
        </div>
        <div className='post__bottom_icons'>
          <KeyboardReturnIcon />
          <h4>Repost</h4>
        </div>
        <div className='post__bottom_icons'>
          <SendOutlinedIcon />
          <h4>Send</h4>
        </div>
      </div>
      
    </div>
  )
}

export default Post
