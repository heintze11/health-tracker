const labForm = document.querySelector('.edit-lab');


const delButtonHandler = async (event) => {
  event.preventDefault();

  const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/lab/${id}`, {
    method: "DELETE",
    body: JSON.stringify({
        id: id
    }),
    headers: {
        'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace("/api/lab");
  } else {
    alert("Failed to delete. Please try again");
  }
};

document.querySelector(".edit-lab").addEventListener("button", delButtonHandler);
