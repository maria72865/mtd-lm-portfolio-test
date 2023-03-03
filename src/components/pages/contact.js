import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPicture from "../../../static/assets/images/contact/leather-chair-guitar.jpg";

export default function() {
  return (
  <div className="content-page-wrapper">
  <div className="left-column" style={{
    background: "url(" + contactPicture + ") no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }} 
  />
  <div className="right-column">
   <div className="contact-bullet-points">
    <div className="bullet-point-group">
      <div className="icon">
        <FontAwesomeIcon icon="envelope" />
      </div>

      <div className="text">
         lucasmaddy@gmail.com
      </div>      
    </div>
   </div>
  </div>
  </div>
  );
}

