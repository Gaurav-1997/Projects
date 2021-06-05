import React from "react";
import { Close } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { db } from "./firebaseUtils/firebase";
import firebase from "firebase";

import "./styles/SendMail.css";

const SendMial = props =>{

  const dispatch = useDispatch();
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  
  const onSubmit = formData =>{
    console.log(formData);
    db.collection('emails').add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    console.log("push in db");
    dispatch({type:"CLOSE"});
  };

    return (
      <div className="sendMail">
        <div className="sendMail_header">
            <h3>New Message</h3>
            <Button 
            onClick={()=>dispatch({type:"CLOSE"})}>
            <Close className="sendMail_close"/>
            </Button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input 
          name="to" 
          placeholder="To" 
          type="email" 
          {...register('to', { required: true })} 
          />
          {errors.to && 
          <p className="sendMail_error">
            *Mandatory field!
          </p>}

          <input 
          name="subject" 
          placeholder="Subject" 
          type="text"
          {...register('subject', { required: true })} />
          {errors.subject && 
          <p className="sendMail_error">
            *Mandatory field!
          </p>}

          <input 
          name="message" 
          placeholder="Message..." 
          type="text" 
          className="sendMail_message"
          {...register('message', { required: true })} />
          {errors.message && 
          <p className="sendMail_error">
            *Mandatory field!
          </p>}

          <div className="sendMial_options">
            <Button className="sendMail_send"
              variant="contained"
              color="primary"
              type="submit">Send</Button>
          </div>
          
        </form>
      </div>
    );
};

export default SendMial;