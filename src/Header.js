import React from "react";
import "../src/styles/Header.css";
import  MenuIcon  from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import  SearchIcon  from "@material-ui/icons/Search";
import  {ArrowDropDown}  from "@material-ui/icons";
import  AppsIcon  from "@material-ui/icons/Apps";
import { Avatar } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Header = (props) => {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
      <MenuIcon />
        </IconButton>
        <img
         className="gmail_logo" 
         src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
         srcset="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png 1x, https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png 2x "
          alt="" 
          aria-hidden="true" 
          style={{width:'109px',height:'40px'}}/>
      </div>

      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Search Mail" type="text" />
        <ArrowDropDown className="header_inputCarpet" />
      </div>

      <div className='header_right'>
        <IconButton>
          </IconButton>
            <AppsIcon />
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton>
            <Avatar />
          </IconButton>
      </div>
    </div>
  );
};

export default Header;
