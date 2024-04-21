import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../widgets/navbar";

function Home() {
  let posts = [
    { title: "P1", content: "lorem ipsum" },
    { title: "P2", content: "lorem ipsum" },
    { title: "P3", content: "lorem ipsum" },
    { title: "P4", content: "lorem ipsum" },
    { title: "P5", content: "lorem ipsum" },
  ];

  return (
    <>
      <header>
        <NavBar />
      </header>
      <h1>Posts</h1>
      {posts.length === 0 ? <p>No post found</p> : null}
      <ul className="list-group">
        {posts.map((post, index) => (
          <li className="list-group-item" key={index}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
