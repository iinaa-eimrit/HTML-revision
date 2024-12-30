// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Get the form element
    const form = document.querySelector("form");

    // Attach a submit event listener to the form
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the form's default action

        // Gather form field values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const feedback = document.getElementById("feedback").value.trim();
        const role = document.getElementById("role").value;

        // Validate the form fields
        if (!name || !email || !feedback) {
            alert("Please fill in all required fields.");
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Display the submitted data
        alert(`
            Form Submitted Successfully!
            Name: ${name}
            Email: ${email}
            Feedback: ${feedback}
            Role: ${role}
        `);

        // Clear the form fields after submission
        form.reset();
    });
});
