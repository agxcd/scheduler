import React from "react";
import classNames from "classnames/bind";

import "components/InterviewerListItem.scss";
export default function InterviewerListItem(props) {
  //   const DayListClass = classNames("day-list__item", {
  //     "day-list__item--selected": props.selected,
  //     "day-list__item--full": props.spots === 0,
  //   });
  //   return (
  //     <li className={DayListClass} onClick={() => props.setDay(props.name)}>
  //       <h2 className="text--regular">{props.name}</h2>
  //       <h3 className="text--light">{formatSpots(props.spots)}</h3>
  //     </li>
  //   );
  const InterviewerItemClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });
  return (
    <li
      className={InterviewerItemClass}
      onClick={() => props.setInterviewer(props.name)}
    >
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.name}
    </li>
  );
}
