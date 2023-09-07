'use client'

import React from 'react'
import "./Navbar.scss";

const race = [
  "создание или покупка готового арендного бизнеса",
  "Покупка помощения под ваши задачи",
  "Продажа",
  "Сдача в аренду",
  "Управление недвижимостью",
  "Подберем помещение под ваш бизнес или предложим вам свои"
];

function Dropdown() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [haveText, setHaveText] = React.useState("");

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleText = (ev) => {
    setHaveText(ev.currentTarget.textContent);
  };

  const itemList = race.map((item, index) => (
    <div
      onClick={handleText}
      className="dropdown__item"
      key={index}
    >
      {item}
    </div>
  ));

  return (
    <div
      className={isOpen ? "dropdown active" : "dropdown"}
      onClick={handleClick}
    >
      <div className="dropdown__text">{"Услуги"}</div>
      <div className="dropdown__items">{itemList}</div>
    </div>
  );
}

export default Dropdown;