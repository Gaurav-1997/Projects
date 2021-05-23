import React from "react";
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
        <h2>Subject</h2>
        <LabelImportant className="mail_important"/>
        <p>Title</p>
        <p className="mail_time">10pm</p>
      </div>

      <div className="mail_message">
        <p>This is the message.</p>
        </div>
     </div>
     
    </div>
  );
};

export default Mail;
