Github link: https://github.com/AbhinayNegi/Student-Registration-HTML-CSS-JS

This project is a simple Student Registration System built using HTML, CSS, and JavaScript. The system allows users to register student details, view the registered students, and edit or delete student records. The data is persistently stored in the browser's local storage.

Header Section: Includes a title and a description summarizing the system's functionalities.
Form Section: Allows users to input student details such as name, student ID, email, and contact number. Utilizes a flexbox layout for element alignment.
Table Section: Displays a list of registered students with options to edit or delete each record.
Data Validation: Ensures that all fields are filled and valid before submission.
Persistent Storage: Uses local storage to persist student data across page refreshes.
Edit and Delete Functionality: Allows editing of existing records and deletion of records from both the view and local storage.
Smooth Scrolling and Highlighting: Scrolls smoothly to the form when editing a record and highlights new or updated entries.

Adding a Student
- Fill in the student details in the form.
- Click on the "Register" button.
- JavaScript validates the input and adds the student data to an array of objects.
- The array is stored in the local storage.
- The table is updated to display the new student.

Editing a Student
- Click the edit button next to a student record in the table.
- The form scrolls into view and is autofilled with the student's data.
- The "Register" button text changes to "Update".
- Modify the student details and click "Update".
- The student data is updated in local storage and the table reflects the changes.

Deleting a Student
- Click the delete button next to a student record in the table.
- The student data is removed from local storage.
- The table is updated to remove the student's record from the view.