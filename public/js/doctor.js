const doctorForm = document.querySelector('.doctor-form');
// deleteDoctor = document.querySelector('.delete-doctor');

// const deleteDoctor = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
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

document
  .querySelector(".doctor-form")
  .addEventListener("submit", createButtonHandler);