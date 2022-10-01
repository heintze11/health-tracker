const appointmentForm = document.querySelector("#appointment-form");

const createButtonHandler = async (event) => {
  event.preventDefault();
  const date = document.querySelector('input[name="date"]').value;
  const time = document.querySelector('input[name="time"]').value;
  
  console.log(date);
  console.log(time);
  const response = await fetch("/api/appointment", {
    method: "POST",
    body: JSON.stringify({
      date,
      time,
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