import React from "react";
import attackImage from "../../icons/attack.svg";
import defenseImage from "../../icons/defense.svg";
import trashImage from "../../icons/trash-can.svg";

const MonsterList = ({ monsters, onDeleteMonster }) => {
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
          <button className="delete" onClick={() => onDeleteMonster(index)}>
            <img src={trashImage} alt="Delete" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default MonsterList;
