const form = document.getElementById('login-form');

form.addEventListener('submit', function(event) 
{
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username == 'Bhagya' && password == 'Manager@123') {
        alert('Login successful!');
window.location.replace("homelogin.html");
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

