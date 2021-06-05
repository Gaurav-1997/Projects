import React from "react";
import {Checkbox, IconButton} from "@material-ui/core";
import {StarBorderOutlined, LabelImportantOutlined} from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./styles/EmailRow.css";

const EmailRow = ({id, title, subject, description, time}) =>{
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
    const value ={id, title, subject, description, time};
    dispatch({ 
      type:"SELECT_MAIL", 
      payload: { ...value }
    });
    setTimeout(1000);
    console.log("from emailrow",{...value});
    history.push("./mail");
  };

return (
  <div onClick={openMail} className="emailRow">

    <div className="emailRow_options">
      <Checkbox />
      <IconButton>
        <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
    </div>
    <h3 className="emailRow_title">
      {title}
    </h3>
    <div className="emailRow_message">
      <h4>{subject}
      <span className="emailRow_description">{description}</span>
      </h4>
     
    </div>
    <p className="emailRow_time">
      {time}
    </p>
  </div>
);
};

export default EmailRow;