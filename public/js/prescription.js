const prescriptionForm = document.querySelector(".prescription-form");

const createButtonHandler = async (event) => {
  event.preventDefault();
  const name = document.querySelector('input[name="name"]').value;
  const dose = document.querySelector('input[name="dose"]').value;
  const frequency = document.querySelector('input[name="frequency"]').value;
  

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

document
  .querySelector(".prescription-form")
  .addEventListener("submit", createButtonHandler);
