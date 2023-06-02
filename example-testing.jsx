import React from "react";
import attackImage from "../src/icons/attack.svg";
import defenseImage from "../src/icons/defense.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const MonsterList = ({ monsters, onDeleteMonster }) => {
  const handleDelete = (index) => {
    onDeleteMonster(index);
  };

  return (
    <div className="new-monster-container">
      <h3>Check added monsters:</h3>
      {monsters.map((monster, index) => (
        <div className="new-monster-container-element" key={index}>
          <img
            src={monster.image}
            alt={monster.element}
            width={16}
            height={16}
          />
          <div className="new-monster-info">
            {monster.name}
            <br />
            <div>
              <span>
                <img src={attackImage} alt="attack-image" />
                {monster.attack}
              </span>
              <span>
                <img src={defenseImage} alt="defense-image" />
                {monster.defense}
              </span>
            </div>
          </div>
          <FontAwesomeIcon
            icon={faTrash}
            className="delete-icon"
            onClick={() => handleDelete(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default MonsterList;
