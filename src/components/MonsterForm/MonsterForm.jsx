import React, { useState } from "react";
import fireImage from "../../icons/fire.svg";
import waterImage from "../../icons/water.svg";
import earthImage from "../../icons/earth.svg";
import airImage from "../../icons/air.svg";
import attackImage from "../../icons/attack.svg";
import defenseImage from "../../icons/defense.svg";

const MonsterForm = ({ onSubmit, onNameSearchChange }) => {
  const [name, setName] = useState("");
  const [element, setElement] = useState("");
  const [attack, setAttack] = useState(0);
  const [defense, setDefense] = useState(0);

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

    onSubmit(newMonster);
    setName("");
    setElement("");
    setAttack(0);
    setDefense(0);
  };

  return (
    <div className="create-monster-container">
      <h3>Create monster:</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Add your monster name here"
              className="selector-width"
              required
            />
          </label>
        </div>
        <div>
          <div className="element-images">
            <img
              src={fireImage}
              className="fire-image"
              alt="fire element image"
            />
            <img
              src={waterImage}
              className="water-image"
              alt="water element image"
            />
            <img
              src={earthImage}
              className="earth-image"
              alt="earth element image"
            />
            <img
              src={airImage}
              className="earth-image"
              alt="earth element image"
            />
          </div>
          <label>
            <select
              value={element}
              onChange={handleElementChange}
              className="selector-width"
              required
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
            <img
              src={attackImage}
              className="atk-def-images"
              alt="attack-image"
              width={16}
              height={16}
            />
            <input
              type="number"
              value={attack}
              min="0"
              max="20"
              onChange={handleAttackChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            <img
              src={defenseImage}
              className="atk-def-images"
              alt="defense-image"
              width={16}
              height={16}
            />
            <input
              type="number"
              value={defense}
              min="0"
              max="20"
              onChange={handleDefenseChange}
              required
            />
          </label>
        </div>
        <div>
          <button type="submit">Add Monster</button>
        </div>
        <br />
        <br />
        <br />
        <div>
          <label>
            <input
              type="text"
              onChange={onNameSearchChange}
              className="selector-width"
              placeholder="Search monsters by name"
              width="200"
            />
          </label>
        </div>
        <br />
      </form>
    </div>
  );
};

export default MonsterForm;
