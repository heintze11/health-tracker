// const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       // const id = req.params.id;
  
//       const response = await fetch(`/api/users/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/dashboard');
//       } else {
//         alert('Failed to delete. Please try again');
//       }
//     }
//   };

const appointmentForm = document.querySelector(".appointment-form");

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

document
  .querySelector(".appointment-form")
  .addEventListener("submit", createButtonHandler);