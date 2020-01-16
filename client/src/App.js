import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    fetch("/api/greeting?name=evans")
      .then(res => res.json())
      .then(greeting => setGreeting(greeting))
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">{greeting}</header>
    </div>
  );
}

export default App;
