const email = document.getElementById("email")
const name = document.getElementById("name")
const age = document.getElementById("age")

const table = document.getElementById("table")
const value_Search = document.getElementById("value_Search")

function renderStudents(arr){
    table.innerHTML = `
        <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
        </tr>
    `
    for(let i = 0; i < arr.length; i++){
        const student = arr[i]

        const tr = document.createElement("tr")
        tr.innerHTML = `
            <td>${student.email}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
        `
        const td = document.createElement("td")
        tr.appendChild(td)

        const button = document.createElement("button")
        td.appendChild(button)

        button.innerHTML = "Delete"
        button.addEventListener("click",function(){
            openDeleteStudent(student.email)
        });
        
        const update = document.createElement("button")
        td.appendChild(update)

        update.innerHTML = "Update"
        update.addEventListener("click", function(){
            openUpdateStudent(arr, i)
        });

        table.appendChild(tr)
    }
}






