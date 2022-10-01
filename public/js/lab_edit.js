// const editButtonHandler = async (event) => {
//     event.preventDefault();

//     const id = window.location.toString().split('/')[
//         window.location.toString().split('/').length - 1
//     ];

//     const name = document.querySelector('input[name="lab-name"]').value;
//     const content = document.querySelector('input[name="lab-text"]').value;
  
//     const response = await fetch("api/lab", {
//       method: "PUT",
//       body: JSON.stringify({
//         name,
//         content,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     if (response.ok) {
//       document.location.reload("/api/lab");
//     } else {
//       alert(response.statusText);
//     }
//   };

//   document
//   .querySelector(".lab-form")
//   .addEventListener("submit", createButtonHandler);