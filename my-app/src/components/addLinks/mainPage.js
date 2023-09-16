import React, { useState } from "react";
import EditLinks from "./editLinks";
import PhoneProfile from "./phoneProfile";
import NavBar from "../NavBar";
import CardLink from "../CardLink";
import data from "../../data/linksCollection.js";
export default function MainPage() {
  const [links, setLinks] = useState([]);
  const [id, setId] = useState(0);
  const addCard = () => {
    if (links.length < 5) {
      let arr = links;
      arr.push({
        id: id,
        link: "",
        name: "",
      });
      setId(id + 1);
      setLinks([...arr]);
    }
  };
  const remove = (id) => {
    let newLinks = [];
    for (let i = 0; i < links.length; i++) {
      if (links[i].id === id) {
        links.splice(i, 1);
        newLinks = links;
      }
    }
    setId(id - 1);
    setLinks([...newLinks]);
  };
  const update = (id, card) => {
    let newLinks = [];
    for (let i = 0; i < links.length; i++) {
      if (links[i].id === id) {
        links[i] = card;
        newLinks = links;
      }
    }
    setLinks([...newLinks]);
  };
  const check = () => {
    return links.every(
      (card) =>
        card.name !== "" &&
        card.link.toLowerCase().indexOf(card.name.toLowerCase()) !== -1
    );
  };
  return (
    <div className="all">
      <NavBar links={links}/>
      <div className="main">
        <PhoneProfile  links={links} />
        <EditLinks
          addCard={addCard}
          links={links}
          remove={remove}
          update={update}
          check={check}
        />
      </div>
    </div>
  );
}
