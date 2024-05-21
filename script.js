let studentName, studentId, email, number;
const form = document.getElementById("form");
const formSection = document.getElementById("formSection");
const tableBody = document.getElementById("tableBody");

form.addEventListener("submit", formSubmission);
document.addEventListener("DOMContentLoaded", displayStudents);

function formSubmission(event) {
    event.preventDefault();

    // Get form values and trim the spaces so that we can further check if user has submitted the form with empty spaces only
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

    // Here we are checking if the button text is register or update. 
    // If it is update then we will call the update function to handle update of the row
    // But if the button name is register then we will call addStudentRow function to add or append new row to the table
    if(btnText === "Update") {
        updateRow(studentId, studentName, email, number);
        form["registerBtn"].value = "Register";
    } else {
        addStudentRow(studentId, studentName, email, number);
    }

    document.getElementById("form").reset();
    displayStudents();
}

function addStudentRow(studentId, studentName, email, number) {
    // Get existing students from localStorage otherwise return empty array
    let students = JSON.parse(localStorage.getItem("students")) || [];
    
    // Add the new student to the array and save it to the local storage
    students.push({ studentId, studentName, email, number });
    localStorage.setItem("students", JSON.stringify(students));

    // Adding a glow effect around the table border
    document.getElementById("data-table").classList.add("table-glow");
    setTimeout(() => {
        document.getElementById("data-table").classList.remove("table-glow");
    }, 2000); // Remove glow effect after 2 seconds
    displayStudents();
    // Scroll to the added student
    let addedRow = tableBody.lastElementChild;
    console.log(addedRow);
    addedRow.scrollIntoView({ behavior: "smooth"});
    displayStudents();
}

function displayStudents() {
    // Getting all the stored student data
    let students = JSON.parse(localStorage.getItem("students")) || [];
    tableBody.innerHTML = ""; // Making sure that previous content is not there so we are clearing it

    //For every student data we are creating a row and we are adding its repective data to that row with two action buttons edit and delete button
    students.forEach((student, index) => {
        const newRow = document.createElement("tr");

        newRow.innerHTML = `
            <td>${student.studentId}</td>
            <td>${student.studentName}</td>
            <td>${student.email}</td>
            <td>${student.number}</td>
            <td>
                <i class="fa-solid fa-trash delete" action-index="${index}"></i>
                <i class="fa-solid fa-pen-to-square edit" action-index="${index}"></i>
            </td>
        `;

        tableBody.appendChild(newRow);
    });
}

const table = document.getElementById("data-table");
table.addEventListener("click", tableAction);

function tableAction(event) {
    // This function checks if edit button or delete button is clicked
    let target = event.target;

    if (target.classList.contains("edit")) {
        // If edit button is clicked we will get its action-index class value that we have set during row creation to identify which row this edit or delete button belongs to so that we can edit or delete correct row.
        let index = target.getAttribute("action-index");
        editStudent(index);
    } else if (target.classList.contains("delete")) {
        // If edit button is clicked we will get its action-index class value that we have set during row creation to identify which row this edit or delete button belongs to so that we can edit or delete correct row.
        let index = target.getAttribute("action-index");
        deleteStudent(index);
    }
}

function editStudent(index) {
    // Allow editing of the existing record by filling the form with existing data and changing the submit button to update to allow user to update
    let students = JSON.parse(localStorage.getItem("students"));
    let student = students[index];

    document.getElementById("name").value = student.studentName;
    document.getElementById("studentId").value = student.studentId;
    document.getElementById("email").value = student.email;
    document.getElementById("number").value = student.number;

    form["registerBtn"].value = "Update";
    form.editingIndex = index;

    // Scroll to the form for editing
    formSection.scrollIntoView({ behavior: "smooth"});
}

function updateRow(studentId, studentName, email, number) {
    // Updating the existing data
    let students = JSON.parse(localStorage.getItem("students"));
    let index = form.editingIndex;

    students[index] = { studentId, studentName, email, number };
    localStorage.setItem("students", JSON.stringify(students));

    form.editingIndex = null; // Clear editing index
    displayStudents();
}

function deleteStudent(index) {
    // Deleting the student from the local storage
    let students = JSON.parse(localStorage.getItem("students"));
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}
