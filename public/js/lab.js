const labForm = document.querySelector(".lab-form");

const createButtonHandler = async (event) => {
  event.preventDefault();
  const name = document.querySelector('input[name="name"]').value;
  const content = document.querySelector('input[name="content"]').value;

  const response = await fetch("/api/lab", {
    method: "POST",
    body: JSON.stringify({
      name,
      content,
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

document
  .querySelector(".lab-form")
  .addEventListener("submit", createButtonHandler);


