document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Thank you, ${name}! I'll get back to you soon.`);
        document.getElementById("contactForm").reset(); 
    } else {
        alert("Please fill in all fields.");
    }
});
