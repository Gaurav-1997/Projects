import React,{ useEffect, useState } from "react";
import {Checkbox, IconButton} from "@material-ui/core";
import {Inbox, ArrowDropDown, Redo, MoreVert,ChevronLeft , ChevronRight, KeyboardHide, Settings ,People, LocalOffer} from "@material-ui/icons";
import "./styles/EmailList.css";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { db } from "./firebaseUtils/firebase";
const EmailList = props => {

  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp","desc")
      .onSnapshot( snapshot => 
        setEmails(
          snapshot.docs.map( doc => ({
            id: doc.id,
            data: doc.data(),
          }))
        ));
  },[]);

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
      {emails.map( ({id, data :{to, subject, message, timestamp}}) => {
        return (
          <EmailRow 
            id={ id }
            key= { id }
            title= { to }
            subject={ subject }
            description={message}
            time= { new Date (timestamp?.seconds * 1000).toUTCString() }
            />
            );
      })
      }
      
    </div>

    </div>
  );
};

export default EmailList;