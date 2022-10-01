const logout = async () => {
    const response = await fetch('/api/login/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Unable to log out. Please try again');
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);