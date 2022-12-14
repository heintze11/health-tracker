const labForm = document.querySelector(".lab-form");
const labCard = document.querySelector(".lab-card");

// Create lab
const createButtonHandler = async (event) => {
  event.preventDefault();
  const name = document.querySelector('input[name="name"]').value;
  const content = document.querySelector('input[name="content"]').value;
  const range = document.querySelector('select[name="range"]').value;
  const doctor_id = document.querySelector('select[name="doctor"]').value;
  const date = document.querySelector('input[name="date"]').value;

  const response = await fetch("/api/lab", {
    method: "POST",
    body: JSON.stringify({
      name,
      content,
      range,
      doctor_id,
      date,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.reload("/api/lab");
  } else {
    alert(response.statusText);
  }
};

// Delete lab
const handleLabDelete = (e) => {
  e.stopPropagation();
  const lab = e.target;

  const labId = JSON.parse(lab.getAttribute("id"));
  if (e.target.className === "btn-trash") {
  deleteLab(labId);
  }
};

const deleteLab = async (id) => {
  const response = await fetch(`/api/lab/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.reload("/api/lab");
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector(".lab-form")
  .addEventListener("submit", createButtonHandler);

document.querySelector(".row").addEventListener("click", handleLabDelete);
