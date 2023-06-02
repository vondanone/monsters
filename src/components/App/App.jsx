import React, { useState } from "react";
import "./App.scss";
import MonsterForm from "../MonsterForm/MonsterForm";
import MonsterList from "../MonsterList/MonsterList";
import logo from "../../icons/logo.svg";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleMonsterSubmit = (newMonster) => {
    setMonsters([...monsters, newMonster]);
  };

  const handleNameSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDeleteMonster = (index) => {
    const updatedMonsters = [...monsters];
    updatedMonsters.splice(index, 1);
    setMonsters(updatedMonsters);
  };

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <img src={logo} className="App-logo" alt="monster-logo" />
      <h1>Monsters</h1>
      <MonsterForm
        onSubmit={handleMonsterSubmit}
        onNameSearchChange={handleNameSearchChange}
      />
      <br />
      <br />
      <br />
      <MonsterList
        monsters={filteredMonsters}
        onDeleteMonster={handleDeleteMonster}
      />
    </div>
  );
};

export default App;
