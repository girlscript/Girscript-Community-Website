import React from "react";

 const Cardtemplate = ({comma, description, imgurl, name, textcolor, bgcolor}) => {
   
    return(
        <div style={{backgroundColor:bgcolor, color:textcolor}} className="card1">
            <img src={comma} alt="profile1" className="comma" />
            <p className="description">{description}</p>
            <div className="pic-name">
                <img src={imgurl} alt="profile2" className="image" />
                <div className="name">{name}</div>
            </div>
        </div>
    )
}
export default Cardtemplate