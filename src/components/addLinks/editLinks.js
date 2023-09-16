import React, { useState } from 'react'
import CardLink from '../CardLink'

export default function EditLinks({addCard,links,remove,update,check}) {
  return (
    <div className="links_container">
      <div className="paragraphs">
        <h1>Customize your links</h1>
        <p>
          Add/edit/remove links below and then share all your profiles with the
          world
        </p>
      </div>
      <div className="add_link_btn">
        <button onClick={()=>{addCard()}}> + Add new link </button>
      </div>
      <div className="all_cards">{
        links.map((card,i)=>{
          console.log(card)
          return <CardLink remove={remove} id={card.id} key={i} update={update} check={check} />
        })
      }
      {!check()?<button  disabled  className="save">SAVE</button>:
      <button className="save" 
      
      onClick={()=>{
        localStorage.setItem("links",JSON.stringify(links))
        
      }}
      >SAVE</button>
        
      
    }



      
        
      </div>
    </div>
  )
}
