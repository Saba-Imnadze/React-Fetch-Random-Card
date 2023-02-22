import React, { useEffect, useState } from "react";

import "./App.css";
import ContactCard from "./ContactCard";

const App = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=15")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResults(data.results);
      });
  }, []);

  return (
    <div className="center">
      <div className="contact-header">
        <h1>Random User Contact Card</h1>
      </div>
      {results.map((result, index) => {
        return (
          <ContactCard
            key={index}
            imgurl={result.picture.large}
            name={result.name.first}
            email={result.email}
            age={result.dob.age}
          />
        );
      })}
    </div>
  );
};

export default App;
