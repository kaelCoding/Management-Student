const students = []

class Student{
    constructor(email, name, age){
        this.email = email;
        this.name = name;
        this.age = age;
    }
}

function saveDataStudent(){
    localStorage.setItem("students", JSON.stringify(students));
}

function getDataStudent(){
    const value = localStorage.getItem("students");

    if (value){
        const arr = JSON.parse(value)

        for (let i=0; i<arr.length; i++){
            students[i] = arr[i]
        }
    }
}
