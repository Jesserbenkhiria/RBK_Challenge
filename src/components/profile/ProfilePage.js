import React,{useState} from "react";
import Form from "../Form.jsx";
import axios from "axios";
import NavBar from "../NavBar.jsx";
import PhoneProfile from "../addLinks/phoneProfile.js";
import { useLocation } from "react-router-dom";


export default function ProfilePage() {
  const [image,setImage]=useState("")
  const onchanFile = (e) => {
    const file = e.target.files[0];
    // console.log(file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "cwgm6pk5");
    console.log(formData);
    // formData.append("cloud_name", "dkcwqbl9d");
    axios
      .post("https://api.cloudinary.com/v1_1/dkcwqbl9d/image/upload", formData)
      .then((data) => {
        setImage(data.data.secure_url);
      })
      .catch((err) => {
        console.log(err);
      });
    //   $.ajax({
    //     type: "POST",
    //     url: "https://api.cloudinary.com/v1_1/dkcwqbl9d/image/upload",
    //     data: formData,
    //     processData: false,
    //     contentType: false,
    //     success: function (data, status, jqXHR) {
    //       console.log("====================================");
    //       console.log(data);
    //       console.log("====================================");
    //       alert("success", data);
    //     },

    //     error: function (jqXHR, status) {
    //       // error handler
    //       console.log(jqXHR);
    //       alert("fail" + status.code);
    //     },
    //   });
  };
  const links=useLocation().state.links.links 
  console.log("from Profile",links);
  const checkUserInfo = (user)=>{
    let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if(!user.name.length>6 || !user.last.length>6 || !user.email || !reg.test(user.email)){
      return false 
    }
    return true 

  }
  return (
    <div className="all">
      <NavBar />
      <div className="main">
        <PhoneProfile links={links} image={image}/>
        <Form  onchanFile={onchanFile} image={image} checkUserInfo={checkUserInfo}/>
      </div>
    </div>
  );
}
