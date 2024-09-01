import React from "react";
import image from "../images/image.png";



export default function ContactCard(props) {
    const {id,name,email}=props.contact;
  return (
    <div className="item" key={id} > {/* Added key prop */}
    <img  className="ui avatar image" src={image} alt="user" />
    <div className="content">
      <div className="header">{name}</div>
      <div>{email}</div>
    </div>
  </div>
  )
}
