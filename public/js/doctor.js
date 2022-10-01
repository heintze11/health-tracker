const doctorForm = document.querySelector(".doctor-form");
const doctorCard = document.querySelector(".delete-doctor");

const createButtonHandler = async (event) => {
  event.preventDefault();
  const name = document.querySelector('input[name="name"]').value;
  const specialty = document.querySelector('input[name="specialty"]').value;

  const response = await fetch("api/doctor", {
    method: "POST",
    body: JSON.stringify({
      name,
      specialty,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.reload("/api/doctor");
  } else {
    alert(response.statusText);
  }
};

// Delete doctor
const handleDoctorDelete = (e) => {
  e.stopPropagation();

  const doctor = e.target;

  const doctorId = JSON.parse(doctor.getAttribute("id"));

  deleteDoctor(doctorId);
};

const deleteDoctor = async (id) => {
  const response = await fetch(`/api/doctor/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.reload("/api/doctor");
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector(".doctor-form")
  .addEventListener("submit", createButtonHandler);

document
  .querySelector(".doctor-card")
  .addEventListener("click", handleDoctorDelete);
