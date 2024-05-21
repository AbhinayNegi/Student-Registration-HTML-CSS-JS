let studentName, studentId, email, number; // Variable to store values from form

const form = document.getElementById("form");

form.addEventListener("submit", formSubmission);

function formSubmission(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values and trim the spaces so that we can further check if user has submited form with empty spaces only
    studentName = document.getElementById("name").value.trim();
    studentId = document.getElementById("studentId").value.trim();
    email = document.getElementById("email").value.trim();
    number = document.getElementById("number").value.trim();

    // Checking if the user has submitted empty values
    if (studentName === "" || studentId === "" || email === "" || number === "") {
        alert("Please don't leave any field empty.");
        return;
    }
    //console.log(studentName, studentId, email, number);
    addStudentRow(studentId, studentName, email, number);
    document.getElementById("form").reset();
}

function addStudentRow(...studentData) {
    // This function will add a row to the table
    const tableBody = document.getElementById("tableBody");
    // Creating a row element
    const newRow = document.createElement("tr");

    // Looping through the student data and appending td to the row
    for(let data of studentData){
        let td = document.createElement("td");
        console.log(data);
        td.appendChild(document.createTextNode(data));
        newRow.appendChild(td);
    }

    // The following code create a element for delete and edit icon and append those buttons to the same row
    const deleteBtn = document.createElement("i");
    deleteBtn.setAttribute("class", "fa-solid fa-trash delete");

    const editBtn = document.createElement("i");
    editBtn.setAttribute("class", "fa-solid fa-pen-to-square edit");

    const actionBtns = document.createElement("td");

    actionBtns.appendChild(deleteBtn);
    actionBtns.appendChild(editBtn);

    newRow.appendChild(actionBtns);
    
    tableBody.appendChild(newRow);
}
