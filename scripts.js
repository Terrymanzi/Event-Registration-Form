document.getElementById('registrationform').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    let isValid = true;

    //name validation
    const name = document.getElementById('name').value;
    const nameRegrex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
        alert('Name can only contain letters and spaces.');
        isvalid = false;
    }

    //email validation
    const email = document.getElementById('email') 
}
