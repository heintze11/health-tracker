let createLab;
let deleteLab;

if (window.location.pathname === '/api/lab') {
    createLab = document.querySelector('.create-lab');
    deleteLab = document.querySelector('.delete-lab');
  }



// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute("data-id")) {
//     const id = event.target.getAttribute("data-id");

//     const response = await fetch(`/api/lab/${id}`, {
//       method: "DELETE",
//     });

//     if (response.ok) {
//       document.location.replace("/dashboard");
//     } else {
//       alert("Failed to delete. Please try again");
//     }
//   }
// };

// const createButtonHandler = async (event) => {
//   if (event.target.hasAttribute("data-id")) {
//     const id = event.target.getAttribute("data-id");

//     const response = await fetch(`/api/lab/${id}`, {
//       method: "POST",
//     });

//     if (response.ok) {
//       document.location.replace("/dashboard");
//     } else {
//       alert("Failed to create. Please try again");
//     }
//   }
// };

// document
//   .querySelector(".lab-delete")
//   .addEventListener("submit", delButtonHandler);

// document
//   .querySelector(".lab-create")
//   .addEventListener("submit", createButtonHandler);
