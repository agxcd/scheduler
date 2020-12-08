import React from "react";
import classNames from "classnames/bind";

import "components/DayListItem.scss";

export default function DayListItem(props) {
  const DayListClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0,
  });
  return (
    <li className={DayListClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{props.spots} spots remaining</h3>
    </li>
  );
}

//   const buttonClass = classNames("button", {
//     "button--confirm": props.confirm,
//     "button--danger": props.danger,
//   });

//   return (
//     <button
//       className={buttonClass}
//       onClick={props.onClick}
//       disabled={props.disabled}
//     >
//       {props.children}
//     </button>
//   );
