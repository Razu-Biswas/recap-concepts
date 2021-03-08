import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
function App() {
  // const friends = [
  //   { name: "janggu", age: 56 },
  //   { name: "kanguu", age: 23 },
  //   { name: "sagluu", age: 45 },
  //   { name: "mugluu", age: 58 },
  //   { name: "sagluuu", age: 66 },
  //   { name: "kagluu", age: 67 },
  //   { name: "cinaggu", age: 44 }
  // ];

  const [friends, setFriends] = useState([])

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data => setFriends(data))
  }, [])

  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {friends.map((fnd) => (
      
      <Friend name={fnd.name} key={fnd.id} age={fnd.username}></Friend>

      ))}
      {/* <Friend name={friends[0]} age="45"></Friend>
      <Friend name={friends[1]}></Friend>
      <Friend name={friends[2]}></Friend>
      <Friend name={friends[3]}></Friend> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function MovieCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  return (
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h3>Numbers of Movies: {count} </h3>
      <MovieDisplay movies={count + 1}></MovieDisplay>
      <MovieDisplay movies={count + 2}></MovieDisplay>
      <MovieDisplay movies={count + 3}></MovieDisplay>
      <MovieDisplay movies={count + 4}></MovieDisplay>
    </div>
  );
}

function MovieDisplay(props) {
  return <h4>Movies I have acted: {props.movies} </h4>;
}

function Friend(props) {
  const friendStyle = {
    border: "2px solid purple",
    margin: "20px",
    padding: "10px",
    borderRadius: "8px",
  };
  return (
    <div style={friendStyle}>
      <h1> I am her Friends-{props.name}</h1>
      <h3>I have Done Her Work in {} years</h3>
    </div>
  );
}

export default App;
