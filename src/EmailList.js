import React from "react";
import {Checkbox, IconButton} from "@material-ui/core";
import {Inbox, ArrowDropDown, Redo, MoreVert,ChevronLeft , ChevronRight, KeyboardHide, Settings ,People, LocalOffer} from "@material-ui/icons";
import "./styles/EmailList.css";
import Section from "./Section";
import EmailRow from "./EmailRow";

const EmailList = props => {
  return (
  <div className="emailList">
    <div className="emailList_settings">
    <div className="emailList_settingsLeft">
    <Checkbox />
    <IconButton>
      <ArrowDropDown />
      </IconButton>
      <IconButton>
        <Redo />
      </IconButton>
      <IconButton>
        <MoreVert />
      </IconButton>
    </div>
    <div className="emailList_settingsRight">
    <IconButton>
      <ChevronLeft />
      </IconButton>
      <IconButton>
        <ChevronRight />
      </IconButton>
      <IconButton>
        <KeyboardHide />
      </IconButton>
      <IconButton>
        <Settings />
      </IconButton>
    </div>
    </div>
    <div className="emailList_sections">
      <Section Icon={Inbox} title="primary" color="red" selected/>
      <Section Icon={People} title="Social" color="blue" />
      <Section Icon={LocalOffer} title="Promotions" color="green" />
    </div>
    <div className="emailList_list">
      <EmailRow 
      title="twitch"
      subject="hey this is a test"
      description="dummy email content"
      time="10pm"
      />
       <EmailRow 
      title="twitch"
      subject="hey this is a test"
      description="dummy email contentdummy email contentdummy email content"
      time="10pm"
      />
      
    </div>

    </div>
  );
};

export default EmailList;