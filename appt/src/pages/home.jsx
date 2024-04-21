import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../widgets/navbar";

function Home() {
  const items = ["Temara", "Casablanca", "Rabat", "Nador", "Fes"];

  return (
    <>
      <header>
        <NavBar />
      </header>
      <h1>Posts</h1>
      <ul className="list-group">
        {items.map(
          (item) => (
            <li className="list-group-item">{item}</li>
          ) //call-back function
        )}
      </ul>
    </>
  );
}

export default Home;
