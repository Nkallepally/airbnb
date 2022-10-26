import React from 'react'
import "./Header.css"

import SearchIcon from '@mui/icons-material/Search';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';

const Header = () => {
  return (
    <div className='header'>
        <img className='header-icon'
        src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
         alt=""/>
         <div className='header-center'>
            <input type="text"/>
           <SearchIcon/>
         </div>
         <div className='header-right'>
            <p>Become a host</p>
            <LanguageIcon/>
            {/* <ExpandMoreIcon/> */}
            <AccountCircleIcon/>
            <DehazeOutlinedIcon/>
         </div>
    </div>
  )
}

export default Header