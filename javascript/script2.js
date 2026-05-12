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

const searchInput = document.getElementById('productSearch');
const filterBtns = document.querySelectorAll('.filter-btn');
const products = document.querySelectorAll('.product-card');

searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    products.forEach(product => {
        const title = product.querySelector('h3').textContent.toLowerCase();
        product.style.display = title.includes(term) ? 'block' : 'none';
    });
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category');
        products.forEach(product => {
            if (category === 'all' || product.getAttribute('data-category') === category) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});
