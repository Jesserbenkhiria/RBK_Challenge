import React from 'react'
import ProfileView from './ProfileView.jsx'
import { useLocation } from "react-router-dom";


export default function Preview() {


  const links=JSON.parse(localStorage.getItem("links"))
  const user=JSON.parse(localStorage.getItem("user"))

  console.log(links,user);
  return (
    <ProfileView links={links} user={user}/>
  )
}
