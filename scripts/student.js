// -------------------ADD STUDENT-------------------------

function addStudent(){
    const student = new Student(
        email.value,
        name.value.trim(),
        age.value
    )

    students.push(student)
    
    renderStudents(students)
    saveDataStudent()
}

// ------------------UPDATE STUDENT----------------------------

function openUpdateStudent(arr, index){
    stt = students.findIndex(student => student.email == arr[index].email)

    const student = arr[index]

    email.value = student.email;
    name.value = student.name;
    age.value = student.age;


    openPopup('UPDATE')
}

function updateStudent(){
    students[stt] = new Student (
        email.value,
        name.value.trim(),
        age.value
    )

    renderStudents(students)
    saveDataStudent()
}

// ------------------SAVE STUDENT--------------------------

function saveStudent(){
    if (Validation('EMAIL') && Validation('NAME') && Validation('AGE')){
        if (showPopup == "CREATE"){
            addStudent()

            mess.style.display = "flex"
            setTimeout(function() {
                mess.style.display = "none";
            }, 1000);

            value_Search.value = ""
        }

        if (showPopup == "UPDATE"){
            updateStudent()
        }

        hidePopup()
        
        value_Search.value = ""
    }

    if (showPopup == "DELETE"){
        deleteStudent()
        hidePopup()

        value_Search.value = ""
    }
}

// ------------------DELETE STUDENT--------------------------

let emailStudentDel = ""

function openDeleteStudent(emailS){
    PopupDelStudent.style.display = "flex";
    showPopup = 'DELETE';
    emailStudentDel = emailS;
}

function deleteStudent(){
    const idStudent = students.findIndex(student => student.email == emailStudentDel)
    
    students.splice(idStudent, 1)
    
    renderStudents(students)
    saveDataStudent()
}

// ------------------SEARCH STUDENT--------------------------

function searchStudent(){
    const students_Search = students.filter(student => student.name.toUpperCase().includes(value_Search.value.toUpperCase())) 

    renderStudents(students_Search)
}