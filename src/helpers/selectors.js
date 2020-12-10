export default function getAppointmentsForDay(state, day) {
  const appointmentForDay = [];
  const eachDayArray = state.days.filter((thisDay) => day === thisDay.name);
  console.log("eachDayArray", eachDayArray);
  if (eachDayArray === [] || !day || eachDayArray[0] === undefined) {
    return [];
  }
  const appsArrForDay = eachDayArray[0].appointments;
  // console.log(appsArrForDay)
  for (const appointment of Object.values(state.appointments)) {
    console.log("object", appointment);
    if (appsArrForDay.includes(appointment.id)) {
      // console.log('appointment.id',appointment.id)
      appointmentForDay.push(appointment);
    }
  }
  //  console.log('appointmentForDay',appointmentForDay)
  return appointmentForDay;
}
