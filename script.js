const form = document.getElementById("form");

form.addEventListener("submit", formSubmission);

function formSubmission(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values and trim the spaces so that we can further check if user has submited form with empty spaces only
    let name = document.getElementById("name").value.trim();
    let studentId = document.getElementById("studentId").value.trim();
    let email = document.getElementById("email").value.trim();
    let number = document.getElementById("number").value.trim();

    // Checking if the user has submitted empty values
    if (name === "" || studentId === "" || email === "" || number === "") {
        alert("Please don't leave any field empty.");
        return;
    }
    console.log(name, studentId, email, number);

    document.getElementById("form").reset();
}
