function getAppointmentsForDay(state, day) {
  const appointmentForDay = [];
  const eachDayArray = state.days.filter((thisDay) => day === thisDay.name);
  // console.log("eachDayArray", eachDayArray);
  if (eachDayArray === [] || !day || eachDayArray[0] === undefined) {
    return [];
  }
  const appsArrForDay = eachDayArray[0].appointments;
  // console.log(appsArrForDay)
  for (const appointment of Object.values(state.appointments)) {
    // console.log("object", appointment);
    if (appsArrForDay.includes(appointment.id)) {
      // console.log('appointment.id',appointment.id)
      appointmentForDay.push(appointment);
    }
  }
  //  console.log('appointmentForDay',appointmentForDay)
  return appointmentForDay;
}

function getInterview(state, interview) {
  if (interview === null || !interview) {
    return null;
  }
  // console.log(Object.values(state.interviewers));
  for (const interviewer of Object.values(state.interviewers)) {
    if (interviewer.id === interview.interviewer) {
      // console.log(interviewer);
      // console.log({ student: interview.student, interviewer: interviewer });
      return { student: interview.student, interviewer: interviewer };
    }
  }
}

function getInterviewersForDay(state, day) {
  const interviewerList = [];
  const eachDayinterviewersArray = state.days.filter(
    (thisDay) => day === thisDay.name
  );

  if (
    eachDayinterviewersArray === [] ||
    !day ||
    eachDayinterviewersArray[0] === undefined
  ) {
    return [];
  }
  // console.log("getInterviewersForDay1", eachDayinterviewersArray);

  const { interviewers } = eachDayinterviewersArray[0];
  // console.log("getInterviewersForDay2", interviewers);
  // console.log("state interviewer", state.interviewers);
  for (const interviewer of interviewers) {
    // console.log("getInterviewersForDay3", interviewer);
    interviewerList.push(state.interviewers[interviewer]);
  }
  // console.log("getInterviewersForDay4", interviewerList);
  return interviewerList;
}

module.exports = {
  getAppointmentsForDay,
  getInterview,
  getInterviewersForDay,
};
