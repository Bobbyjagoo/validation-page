    document.getElementById('btn-sub').addEventListener('click', function(event){
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorMessage = document.getElementById('errorMessage');
        const errorMessageOne = document.getElementById('errorMessageOne');

        errorMessageOne.textContent = '';
        errorMessage.textContent = '';


        if (!validateUsername(username)) {
            errorMessageOne.textContent = 'Invalid username. Must be at least 5 characters long.';
            return;
        }

        if (!validatePassword(password)) {
            errorMessage.textContent = 'Invalid password. Must be at least 6 characters long and must contain at least one number';
            return;
        }

        alert('Form submittion sucessful!');

        
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Username and Password saved!');
    });

    function validateUsername(username) {
        if (username.trim() === ''){
            document.getElementById('errorMessageOne').textContent =
            'Username cannot be empty.';
            return false;
        }
        return username.length >= 5;
    } 

    function validatePassword(password) {
        const passwordPattern = /^(?=.*\d).{6,}$/;
        return passwordPattern.test(password);
    }
