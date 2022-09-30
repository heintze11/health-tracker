const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    // Changed users to user so if there is an issue check there first
    if (email && password) {
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, go to profile page
            document.location.replace('/dashboard');
        } else {
            alert('Unsuccessful login. Please try again');
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    const fname = document.querySelector('#fname-signup').value.trim();
    const lname = document.querySelector('#lname-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (fname && lname && email && password) {
        const response = await fetch('/api/login', {
          method: 'POST',
          body: JSON.stringify({ fname, lname, email, password }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Unsuccessful signup. Please try again');
        }
      }
    };

    document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);