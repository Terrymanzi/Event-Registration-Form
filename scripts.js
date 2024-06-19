document.getElementById('registrationform').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    let isValid = true;

    //name validation
    const name = document.getElementById('name').value;
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
        alert('Name can only contain letters and spaces.');
        isvalid = false;
    }

    //email validation
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.text(email)) {
        alert('Please enter a valid email address.');
        isvalid = false;
    }

    //phone number validation
    const phone = document.getElementById('phone').value;
    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    if (!phoneRegex.test(phone)) {
        alert('Phone number must be in the format (123) 456-7890.')
        isvalid = false;
    }

    //date validation
    const date = document.getElementById('date').value;
    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
    if (!dateRegex.test(date)) {
        alert('Event date must be in the format MM/DD/YYYY.');
        isvalid = false;
    }

    //number of tickets validation
    const tickets = document.getElementById('tickets').value;
    if (tickets < 1 || tickets > 10) {
        alert('Number of tickets must be between 1 and 10.');
        isvalid = false;
    }


    if (isvalid) {
        alert('Form submitted successfully!');
        // Here I will add code to actually submit the form data:)
    }
});
