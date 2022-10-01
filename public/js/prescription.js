const prescriptionForm = document.querySelector(".prescription-form");

const createButtonHandler = async (event) => {
  event.preventDefault();
  const name = document.querySelector('input[name="name"]').value;
  const dose = document.querySelector('input[name="dose"]').value;
  const frequency = document.querySelector('input[name="frequency"]').value;
  const doctor_id = document.querySelector('select[name="doctor"]').value;

  const response = await fetch("api/prescription", {
    method: "POST",
    body: JSON.stringify({
      name,
      dose,
      frequency,
      doctor_id
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.reload("/api/prescription");
  } else {
    alert(response.statusText);
  }
};

const delButtonHandler = (e) => {
  e.stopPropagation();

  const prescription = e.target;

  const prescriptionId = JSON.parse(prescription.getAttribute("id"));

  deletePres(prescriptionId);
};

const deletePres = async (id) => {
  const response = await fetch(`/api/prescription/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.reload("/api/prescription");
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector(".prescription-form")
  .addEventListener("submit", createButtonHandler);

  document
  .querySelector(".prescription-card")
  .addEventListener("click", delButtonHandler);
