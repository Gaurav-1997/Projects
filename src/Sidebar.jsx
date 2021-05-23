import React from "react";
import {Button, IconButton} from "@material-ui/core";
import { Add, Inbox, Star, Schedule, Send, InsertDriveFile, ExpandMore , Person, Duo, Phone} from "@material-ui/icons";
import "./styles/Sidebar.css";
import SidebarOptions from "./SidebarOptions";

const Sidebar = props => {

  //const arr = [{"inbox":false},{"starred":false},{"snoozed":false},{"sent":false},{"drafts":false},{"more":false}];
  const iconSelected =(id)=>{
    console.log(id,"clicked");
    return id.title;
  };

  return (
    <div className="sidebar">
      <Button 
      className="sidebar_compose"
      startIcon={
                <Add fontSize="large" />}>
        Compose
        </Button>

        <SidebarOptions Icon={Inbox} title="Inbox"
         number={54} selected={iconSelected==="Inbox"} onClick={iconSelected} />
        <SidebarOptions Icon={Star} title="Starred" 
         number={5} selected={iconSelected==="Starred"} onClick={iconSelected} />
        <SidebarOptions Icon={Schedule} title="Snoozed"
         number={0} selected={iconSelected==="Snoozed"} onClick={iconSelected} />
        <SidebarOptions Icon={Send} title="Sent" 
         number={10} selected={iconSelected==="Sent"} onClick={iconSelected} />
        <SidebarOptions Icon={InsertDriveFile} title="Drafts" 
         number={0} selected={iconSelected==="Drafts"} onClick={iconSelected} />
        <SidebarOptions Icon={ExpandMore} title="More"
         number={5} selected={iconSelected==="More"} onClick={iconSelected} />

        <div className="sidebar_footer">
          <div className="sidebar_footerIcons">
            <IconButton>
              <Person />
            </IconButton>
            <IconButton>
              <Duo />
            </IconButton>
            <IconButton>
              <Phone />
            </IconButton>
          </div>
        </div>
    </div>
  );
};

export default Sidebar;