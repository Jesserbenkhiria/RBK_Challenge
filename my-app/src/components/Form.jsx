import React, { useState } from "react";
import avatar from "../assest/images/avatar.png";
const Form = ({ onchanFile, image, checkUserInfo }) => {
  const [user, setUser] = useState({name:"",last:"",email:""});
  const [disable,setDisable]=useState(false)
  const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  const handleChange = (event)=>{
   console.log(checkUserInfo({...user,[event.target.name]:event.target.value}))
   console.log(user.name)
   console.log(user.last)
   console.log(user.email)
   setDisable(checkUserInfo({...user,[event.target.name]:event.target.value}))
   setUser({...user,[event.target.name]:event.target.value})
  }


  const classErrorName=user.name.length<6? "form-control form-control-lg input-text input-text-error":"form-control form-control-lg input-text"
  const classErrorLast=user.last.length<6? "form-control form-control-lg input-text input-text-error":"form-control form-control-lg input-text"
  const classErrorEmail= !reg.test(user.email)? "form-control form-control-lg input-text input-text-error":"form-control form-control-lg input-text"

  return (
    <div className="links_container">
      <div className="title">
        <h1 id="title">Profile Details</h1>
        <p>Add your deteils to create a personal touch to your profile.</p>
      </div>
      <div className="selection">
        <h5>Profile picture</h5>
        <div className="upload">
          <img src={image} className="avatar" alt="" />
          <div className="round">
            <input onChange={(event) => onchanFile(event)} type="file" />
          </div>
          <div className="show">
            <i className="fa-regular fa-image"></i>
            <p>select your image</p>
          </div>
        </div>
      </div>

      <div className="inputs">
        <div className="one-input">
          <label htmlFor="name">First Name</label>
          <input

            onChange={handleChange}
            className={classErrorName}
            type="text"
            name="name"
            placeholder="Add Your Name"
            aria-label=".form-control-lg example"
          />
        </div>

        <div className="one-input">
          <label htmlFor="last">Last Name</label>
          <input
           name="last"
                 onChange={handleChange}
            className={classErrorLast}
            type="text"
            placeholder="Add Your Last Name"
            aria-label=".form-control-lg example"
          />
        </div>
        <div className="one-input">
          <label htmlFor="email">Email</label>
          <input
             name="email"
            onChange={handleChange}
            className={classErrorEmail}
            type="text"
            placeholder="Add Your Email"
            aria-label=".form-control-lg example"
          />
        </div>
      </div>
      {!disable? (
        <button disabled className="save">SAVE</button>
      ) : (
        <button className="save"
        onClick={()=>{
          localStorage.setItem("user",JSON.stringify({...user,image}))
        }}
        >
          SAVE
        </button>
      )}
    </div>
  );
};
export default Form;
