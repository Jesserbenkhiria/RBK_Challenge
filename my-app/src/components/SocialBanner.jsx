import React from "react";

function SocialBanner({banner}) {
    let colors={
        Github:"black",
        Facebook:"rgb(16,148,244)",
        Linkedin:"rgb(10,102,194)",
        Instagram:"rgb(252,0,204)",
        Youtube:"red"
    }
    let icons={
        Github:"fa-brands fa-github",
        Facebook:"fa-brands fa-facebook",
        Linkedin:"fa-brands fa-linkedin",
        Instagram:"fa-brands fa-instagram",
        Youtube:"fa-brands fa-square-youtube"}

  return (
    <a
      href={banner.link}
      style={{ textDecoration: "none" ,backgroundColor:colors[banner.name]}}

      className="list_links_banner"
    >
      <div className="list_links_banner_social"  >
        <span>
          <i className={icons[banner.name]}></i>
        </span>
        <p className="github">{banner.name}</p>
      </div>
      <span className="icon">
        <i className="bi bi-arrow-right"></i>
      </span>
    </a>
  );
}
export default SocialBanner;
