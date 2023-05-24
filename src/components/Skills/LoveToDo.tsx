import React from "react";
import { ImPointRight } from "react-icons/im";

const LoveToDo = () => {
  return (
    <div className="text-lg text-dark dark:text-light">
      <p>Apart from coding, some other activities that I love to do!</p>
      <ul className="m-3">
        <li className="flex items-center space-x-3">
          <ImPointRight className="text-primary dark:text-primaryDark" />
          <span>Spent time with nature 🏔️🌄🗻</span>
        </li>
        <li className="flex items-center space-x-3">
          <ImPointRight className="text-primary dark:text-primaryDark" />
          <span>
            Playing&nbsp;
            <a
              href="https://playvalorant.com/en-gb/"
              target="_blank"
              className="text-primary dark:text-primaryDark"
            >
              @Valorant
            </a>
            &nbsp;🎮🎮
          </span>
        </li>
      </ul>
    </div>
  );
};

export default LoveToDo;
