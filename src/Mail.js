import React from "react";
import {useSelector} from "react-redux";
import { IconButton} from "@material-ui/core";
import {ArrowBack,
     MoveToInbox,
     Error,
     Delete,
     Email,
     WatchLater,
     CheckCircle,
     LabelImportant,
     MoreVert,UnfoldMore,Print, ExitToApp } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import "./styles/Mail.css";

const Mail = props => {
  
  const history = useHistory();
  const selectedMail = useSelector(state => state.selectedMail);
  console.log(selectedMail);
  return (
  <div className="mail">
   <div className="mail_tools">

   </div>
   <div className="mail_toolsLeft">
      <IconButton onClick={()=>history.push("/")}>
        <ArrowBack />
      </IconButton>

      <IconButton>
        <MoveToInbox />
      </IconButton>

      <IconButton>
        <Error />
      </IconButton>

      <IconButton>
        <Delete />
      </IconButton>

      <IconButton>
        <Email />
      </IconButton>

      <IconButton>
        <WatchLater />
      </IconButton>

      <IconButton>
        <CheckCircle />
      </IconButton>

      <IconButton>
        <LabelImportant />
      </IconButton>

      <IconButton>
        <MoreVert />
      </IconButton>
   </div>
   <div className="mail_toolsRight">
      <IconButton>
        <UnfoldMore />
      </IconButton>

      <IconButton>
        <Print />
      </IconButton>

      <IconButton>
        <ExitToApp />
      </IconButton>
   </div>

   <div className="mail_body">
      <div className="mail_bodyHeader">
        <h2>{selectedMail?.subject}</h2>
        <LabelImportant className="mail_important"/>
        <p>{selectedMail?.title}</p>

        <p className="mail_time">{selectedMail?.time}</p>
      </div>

      <div className="mail_message">
        <p>{selectedMail?.description}</p>
        </div>
     </div>
     
    </div>
  );
};

export default Mail;
