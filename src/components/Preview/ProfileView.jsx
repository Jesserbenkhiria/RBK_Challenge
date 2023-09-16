import React from "react";
import { Link } from "react-router-dom";
import SocialBanner from "../SocialBanner.jsx";

function ProfileView({ user,links }) {
  return (
    <div className="all_perview">
      <div id="blue">
        <div id="nav-bar">
          <div>
            <Link to="/">
              <button id="back_to_editor" className="blue_btn">
                {" "}
                Back to Editor{" "}
              </button>
            </Link>
          </div>

          <div>
            <button id="share_link" className="blue_btn">
              {" "}
              Share Link{" "}
            </button>
          </div>
        </div>
      </div>
        <div className="profile_card">
          <div className="card_header">
            <div className="card_container_wrapper">
              <img className="img_avatar" src={user.image} alt="avatar" />
           <p className="h6">{user.name}</p>
          <p className="h5">{user.last}</p>
            </div>
          </div>
          <div className="profile_container_all">
            {/* <a
              href="#"
              style={{ textDecoration: "none" }}
              className="list_links_banner"
            >
              <div className="list_links_banner_social">
                <span>
                  <i class="bi bi-github"></i>
                </span>
                <p className="github">Github</p>
              </div>
              <span className="icon">
                <i class="bi bi-arrow-right"></i>
              </span>
            </a>
            <a
              href="#"
              style={{ textDecoration: "none" }}
              className="list_links_banner"
            >
              <div className="list_links_banner_social">
                <span>
                  <i class="bi bi-github"></i>
                </span>
                <p className="github">Github</p>
              </div>
              <span className="icon">
                <i class="bi bi-arrow-right"></i>
              </span>
            </a>
            <a
              href="#"
              style={{ textDecoration: "none" }}
              className="list_links_banner"
            >
              <div className="list_links_banner_social">
                <span>
                  <i class="bi bi-github"></i>
                </span>
                <p className="github">Github</p>
              </div>
              <span className="icon">
                <i class="bi bi-arrow-right"></i>
              </span> */}
            {/* </a> */}
            {links.map((banner,i)=> { console.log(banner);
        return <SocialBanner key={i} banner={banner}/>}) } 
            
          </div>
        </div>
    </div>
  );
}
export default ProfileView;
