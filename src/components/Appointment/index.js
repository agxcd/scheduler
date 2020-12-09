import React from "react";
import "./styles.scss";

import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import Confirm from "./Confirm";
import Status from "./Status";
import Error from "./Error";
import Form from "./Form";

export default function Appointment(props) {
  let status;
  if (!props.interview) {
    status = <Empty />;
  } else {
    status = (
      <Show
        student={props.interview.student}
        interviewer={props.interview.interviewer.name}
      />
    );
  }
  return (
    <article className="appointment">
      <Header time={props.time} />
      {status}
      {/* <Confirm />
      <Status />
      <Error />
      <Form /> */}
    </article>
  );
}
