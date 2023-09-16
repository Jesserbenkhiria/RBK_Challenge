import React from "react";
import Avatar from "../assest/images/avatar.png";
import SocialBanner from "./SocialBanner";

export default function PhoneMockup({image,links}) {
  return (
    <div className="phone_container">
      <div className="phone_container_all">
        <div className="phone_container_wrapper">
            <img className="img_avatar" src={image} style={{borderRadius:"50%"}} alt="avatar" />
          {/* <p className="h6">{links.name}</p>
          <p className="h5">h5. Bootstrap heading</p> */}
        </div>
        <div className="phone_container_list_links">

       {links.map((banner,i)=> { console.log(banner);
        return <SocialBanner key={i} banner={banner}/>}) } 
          {/* <div className="list_links_banner">
            <div className="list_links_banner_social">
              <span></span>
              <p></p>
            </div>
            <span className="icon"></span>
          </div> */}
          
        </div>
      </div>
    </div>
  );
}
