// const labForm = document.querySelector('.edit-lab');

const delButtonHandler = async (event) => {
  event.preventDefault();

  const labID = parseInt(req.params.id);
  const response = await fetch(`/api/lab/${labID}`, {
    method: "DELETE",
    body: JSON.stringify({
        id: labID
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

document.querySelector(".delete-button").addEventListener("click", delButtonHandler);

