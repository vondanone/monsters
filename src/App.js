import React, { useState } from "react";

import "../src/App.scss";

import fireImage from "../src/icons/fire.svg";
import waterImage from "../src/icons/water.svg";
import earthImage from "../src/icons/earth.svg";
import airImage from "../src/icons/air.svg";

import logo from "../src/icons/logo.svg";

const App = () => {
  const [name, setName] = useState("");
  const [element, setElement] = useState("");
  const [attack, setAttack] = useState(0);
  const [defense, setDefense] = useState(0);
  const [monsters, setMonsters] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleElementChange = (event) => {
    setElement(event.target.value);
  };

  const handleAttackChange = (event) => {
    setAttack(event.target.value);
  };

  const handleDefenseChange = (event) => {
    setDefense(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const elementImageMap = {
      Fire: fireImage,
      Water: waterImage,
      Earth: earthImage,
      Air: airImage,
    };

    const newMonster = {
      name: name,
      element: element,
      attack: attack,
      defense: defense,
      image: elementImageMap[element],
    };

    setMonsters([...monsters, newMonster]);
    setName("");
    setElement("");
    setAttack(0);
    setDefense(0);
  };

  return (
    <div className="container">
      <img src={logo} className="App-logo" alt="monster-logo" />
      <h1>Monsters</h1>
      <div className="create-monster-container">
        <h3>Create monster:</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Name"
                className="selector-width"
              />
            </label>
          </div>
          <div>
            <label>
              <select
                value={element}
                onChange={handleElementChange}
                className="selector-width"
              >
                <option value="">Select Element</option>
                <option value="Fire">Fire</option>
                <option value="Water">Water</option>
                <option value="Earth">Earth</option>
                <option value="Air">Air</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Attack:
              <input
                type="number"
                value={attack}
                min="0"
                max="20"
                onChange={handleAttackChange}
              />
            </label>
          </div>
          <div>
            <label>
              Defense:
              <input
                type="number"
                value={defense}
                min="0"
                max="20"
                onChange={handleDefenseChange}
              />
            </label>
          </div>
          <div>
            <button type="submit">Add Monster</button>
          </div>
        </form>
      </div>
      <div>
        <h3>Check added monsters:</h3>
        {monsters.map((monster, index) => (
          <div className="new-monster-container" key={index}>
            <span> Monster name: {monster.name}</span>
            <span>Element: {monster.element}</span>
            <img
              src={monster.image}
              alt={monster.element}
              width={20}
              height={20}
            />
            <span>Attack: {monster.attack}</span>
            <span>Defense: {monster.defense}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
