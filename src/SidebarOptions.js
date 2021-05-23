import React from "react";
import "./styles/SidebarOptions.css";

const SidebarOptions = ({Icon, title, number, selected, onClick}) => {
  return (
    <div className={`sidebar_option ${selected && 'sidebar_option-active'}`}
    onClick={()=>onClick({title})}>
    <Icon/>
    <h3>{title}</h3>
    <p>{number}</p>
    </div>
  );
};

export default SidebarOptions;