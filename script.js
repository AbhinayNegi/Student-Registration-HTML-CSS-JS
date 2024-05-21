let studentName, studentId, email, number; // Variable to store values from form
const formSection = document.getElementById("formSection");

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
    const btnText = form["registerBtn"].value;

    // Here we are checking if the button text is regiter or update. 
    // If it is update then we will call the update function to handle update of the row
    // But if the button name is register then we will call addStudentRow function to add or append new row to the table
    if(btnText === "Update") {
        console.log("Updated")
        updateRow(studentId, studentName, email, number);
        form["registerBtn"].value = "Register";
    } else {
        addStudentRow(studentId, studentName, email, number);
        document.getElementById("form").reset();
    }
    
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

const table = document.getElementById("data-table");
table.addEventListener("click", tableAction);

function tableAction(event) {
    let target = event.target;

    if(target.classList.contains("edit")) {
        console.log("Edit");
        let cells = target.parentElement.parentElement.cells;
        
        form.elements["name"].value = cells[1].innerText;
        form.elements["stuId"].value = cells[0].innerText;
        form.elements["stuEmail"].value = cells[2].innerText;
        form.elements["stuNumber"].value = cells[3].innerText;

        window.scrollTo(0, 0);
        form.elements["registerBtn"].value = "Update";
        // We are keeping track of which row user wants to edit
        form.editingRow = target.parentElement.parentElement;
    }
}

function updateRow(...studentData) {
    const row = form.editingRow;
    row.cells[0].innerText = studentData[0];
    row.scrollIntoView();
}
