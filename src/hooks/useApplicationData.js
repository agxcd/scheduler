import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });
  const setDay = (day) => setState({ ...state, day });

  function spotRemain(state, day, diff) {
    const matchDay = state.days.find((e) => e.name === day);
    if (diff === "+") {
      matchDay.spots += 1;
    } else if (diff === "-") {
      matchDay.spots -= 1;
    }
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .put(`http://localhost:8001/api/appointments/${id}`, appointment)
      .then(() => {
        spotRemain(state, state.day, "-");
        setState(() => ({ ...state, appointments }));
      });
  }

  function editInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .put(`http://localhost:8001/api/appointments/${id}`, appointment)
      .then(() => {
        spotRemain(state, state.day, "0");
        setState(() => ({ ...state, appointments }));
      });
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios
      .delete(`http://localhost:8001/api/appointments/${id}`)
      .then(() => {
        spotRemain(state, state.day, "+");
        setState(() => ({ ...state, appointments }));
      });
  }

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8001/api/days"),
      axios.get("http://localhost:8001/api/appointments"),
      axios.get("http://localhost:8001/api/interviewers"),
    ])
      .then((all) => {
        setState((prev) => ({
          ...prev,
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data,
        }));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return { state, setDay, bookInterview, cancelInterview, editInterview };
}
