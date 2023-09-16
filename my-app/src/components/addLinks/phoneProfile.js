import React from 'react'
import Avatar from "../../assest/images/avatar.png";
import PhoneMockup from '../PhoneMockup';

export default function PhoneProfile({image,links}) {
  return (
    <PhoneMockup links={links} image={image}/>
  )
}
