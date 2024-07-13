function toggleAnswer(id) {
    var answer = document.getElementById("answer" + id);
    if (answer.style.display === "block" || answer.style.display === "") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}

function submitForm() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    const privacyPolicy = document.getElementById("privacy-policy").checked;

    // Simple form validation
    if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || message.trim() === '' || !privacyPolicy) {
        alert("Please fill in all required fields and accept the privacy policy.");
    } else {
        // You can add further form submission logic here, like sending data to a server
        alert("Form submitted successfully"); // Replace with your actual submission logic
    }
}