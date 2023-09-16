import React from "react";
import "./index.css";
import Card from "./Card.jsx";
import contact from "../src/contact";
import Avatar from "./Avatar";

function createCard(props) {
  return (
    <div>
      <Card
        id={props.id}
        key={props.id}
        name={props.name}
        email={props.email}
        number={props.phone}
        img={props.imgURL}
      />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 className=" heading">My contact</h1>

      <Avatar />
      {contact.map(createCard)}
    </div>
  );
}
export default App;
