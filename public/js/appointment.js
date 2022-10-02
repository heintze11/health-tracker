const appointmentForm = document.querySelector("#appointment-form");

const createButtonHandler = async (event) => {
  event.preventDefault();
  const date = document.querySelector('input[name="date"]').value;
  const time = document.querySelector('input[name="time"]').value;
  const doctor_id = document.querySelector('select[name="doctor"]').value;

  console.log(date);
  console.log(time);
  const response = await fetch("/api/appointment", {
    method: "POST",
    body: JSON.stringify({
      date,
      time,
      doctor_id
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.reload("/api/appointment");
  } else {
    alert(response.statusText);
  }
};

const delButtonHandler = (e) => {
  e.stopPropagation();

  const appointment = e.target;

  const appointmentId = JSON.parse(appointment.getAttribute("id"));

  deleteAppointment(appointmentId);
};

const deleteAppointment = async (id) => {
  const response = await fetch(`/api/appointment/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.reload("/api/appointment");
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector(".appointment-form")
  .addEventListener("submit", createButtonHandler);

document
  .querySelector(".appointment-card")
  .addEventListener("click", delButtonHandler);


const eventsData = [];
const getData = fetch("/api/appointment/calendar")
.then(function(res){
  return res.json();
}) .then(function(data){
  for (let i = 0; i < data.appointment.length; i++) {
    const start = data.appointment[i].date;
    const time = data.appointment[i].time;
    const title = data.appointment[i].doctor.name;
    newObj = {
      start,
      time,
      title
    }
    eventsData.push(newObj);
  }
  
  calendar(eventsData);
})

function calendar(data) {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: data
  });
  calendar.render();
};