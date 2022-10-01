const labForm = document.querySelector('.lab-form');

// const delButtonHandler = async (event) => {
//   event.preventDefault();
//   const response = await fetch(`/api/lab`, {
//     method: "DELETE",
//   });

//   if (response.ok) {
//     document.location.replace("/dashboard");
//   } else {
//     alert("Failed to delete. Please try again");
//   }
// };

const createButtonHandler = async (event) => {
    console.log('hello');
  event.preventDefault();
  const name = document.querySelector('input[name="lab-name"]').value;
  const content = document.querySelector('input[name="lab-text"]').value;

  const response = await fetch('api/lab', {
      method: 'POST',
      body: JSON.stringify({
          name,
          content
      }),
      headers: {
          'Content-Type': 'application/json'
      }
  });
  if(response.ok) {
      document.location.reload('/api/lab');
  } else {
    alert(response.statusText);
  }
};



document.querySelector(".lab-form").addEventListener("submit", createButtonHandler);
