function getAppointmentsForDay(state, day) {
  const appointmentForDay = [];
  const eachDayArray = state.days.filter((thisDay) => day === thisDay.name);
  if (eachDayArray === [] || !day || eachDayArray[0] === undefined) {
    return [];
  }
  const appsArrForDay = eachDayArray[0].appointments;
  for (const appointment of Object.values(state.appointments)) {
    if (appsArrForDay.includes(appointment.id)) {
      appointmentForDay.push(appointment);
    }
  }
  return appointmentForDay;
}

function getInterview(state, interview) {
  if (interview === null || !interview) {
    return null;
  }
  for (const interviewer of Object.values(state.interviewers)) {
    if (interviewer.id === interview.interviewer) {
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

  const { interviewers } = eachDayinterviewersArray[0];
  for (const interviewer of interviewers) {
    interviewerList.push(state.interviewers[interviewer]);
  }
  return interviewerList;
}

module.exports = {
  getAppointmentsForDay,
  getInterview,
  getInterviewersForDay,
};
