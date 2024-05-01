let showPopup = ""
let stt = null

const mess = document.getElementById("mess_Notification")
const PopupStudent = document.getElementById("PopupStudent")
const PopupDelStudent = document.getElementById("PopupDelStudent")

function openPopup(status){
    PopupStudent.style.display = "flex"
    showPopup = status
}

function hidePopup(){
    PopupStudent.style.display = "none"
    PopupDelStudent.style.display = "none"

    email.value = ""
    name.value = ""
    age.value = ""

    showPopup = ""
    emailStudentDel = ""
    stt = null
    
    error_E.innerHTML = ""
    error_N.innerHTML = ""
    error_A.innerHTML = ""
}

function insideOverlay(e){
    e.stopPropagation()
}

// function hideMess(){
//     mess.style.display = "none"
// }