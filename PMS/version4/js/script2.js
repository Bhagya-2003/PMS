
        const form = document.getElementById('registrationForm');
        form.addEventListener('submit', function(event) {
            const password = form.elements['password'].value;
            const confirmPassword = form.elements['confirmPassword'].value;
            if (password !== confirmPassword) {
                alert('Passwords do not match. Please try again.');
                event.preventDefault();
            }else{
                alert('Register Successfully...')
            }
        });