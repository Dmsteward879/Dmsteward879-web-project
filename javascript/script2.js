document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;

    if (name === "") {
        document.getElementById('nameError').textContent = "Name is required.";
        isValid = false;
    } else {
        document.getElementById('nameError').textContent = "";
    }

    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = "Please enter a valid email address.";
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = "";
    }

    if (message.length < 10) {
        document.getElementById('messageError').textContent = "Message must be at least 10 characters.";
        isValid = false;
    } else {
        document.getElementById('messageError').textContent = "";
    }

    if (isValid) {
        document.getElementById('contactForm').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
        console.log("Form Data Submitted:", { name, email, message });
    }
});
