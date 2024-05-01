function validateData(data){
    var dataRegex = /^.+$/;

    return dataRegex.test(data);
}

function validateName(name){
    var nameRegex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;

    return nameRegex.test(name)
}

function validateNumber(number){
    var ageRegex =  /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;

    return ageRegex.test(number)
}

function validateEmail(email){    
    var mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return mailRegex.test(email);
}

function checkDuplicateEmail(emailC){
    for (let i = 0; i<students.length; i++){
        if (emailC == students[i].email && i != stt){
            return false;
        }
    }
    return true
}

var error_E = document.getElementById("error_E")
var error_N = document.getElementById("error_N")
var error_A = document.getElementById("error_A")

function Validation(value){
    if (value == "EMAIL"){
        if (!validateData(email.value)){
            error_E.innerHTML = "Email không được để trống"
        }
        else if (!validateEmail(email.value)){
            error_E.innerHTML = "Email không đúng định dạng"
        }
        else if (!checkDuplicateEmail(email.value)){
            error_E.innerHTML = "Email bị trùng"
        }
        else{
            error_E.innerHTML = ""
            return true;
        }
    }

    if (value == "NAME"){
        if (!validateData(name.value)){
            error_N.innerHTML = "Tên không được để trống"
        }
        else if(!validateName(name.value)){
            error_N.innerHTML = "Tên không đúng định dạng"
        }
        else {
            error_N.innerHTML = ""
            return true;
        }
    }

    if (value == "AGE"){
        if (!validateData(age.value)){
            error_A.innerHTML = "Tuổi không được để trống"
        }
        else if (!validateNumber(age.value)){
            error_A.innerHTML = "Tuổi không đúng định dạng"
        }
        else {
            error_A.innerHTML = ""
            return true;
        }
    }
}






// const regex_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const regex_pass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
// const regex_integer = /^[0-9]+$/;
// const regex_number = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/;

// const g_validation = (obj) => {    
//     const label = obj.label;    
//     let data = obj.data;    
//     const isNull = obj.isNull;    
//     const equal = obj.equal;    
//     const min = obj.min;    
//     const max = obj.max;    
//     const type = obj.type;    
//     const integer = obj.integer;    
//     const number = obj.number;    
//     const age = obj.age;    

//     if (data == null || data == undefined) {        
//         data = "";    
//     }    

//     data = data.toString();    
//     data = data.trim();    

//     if (!isNull) {        
//         if (!data || data == "") {            
//             return label + " không được để trống";        
//         }    
//     }    

//     if (integer) {        
//         if (isNull) {            
//             if (!data || data == "") {                
//                 return;            
//             }        
//         }        

//         if (!data.match(regex_integer)) {            
//             return label + " phải là số nguyên";        
//         }        
//         data = parseInt(data);    
//     }    

//     if (number) {        
//         if (isNull) {            
//             if (!data || data == "") {                
//                 return;            
//             }        
//         }        

//         if (!data.match(regex_number)) {            
//             return label + " phải là 1 số";        
//         }        

//         data = parseFloat(data);    
//     }    

//     if (equal) {        
//         if (number || integer) {            
//             if (data != equal) {                
//                 return label + " phải bằng " + equal;            
//             }        
//         } 
//         else {            
//             if (data.length != equal) {                
//                 return label + " phải chứa " + equal + " ký tự";            
//             }        
//         }    
//     }    

//     if (max) {        
//         if (number || integer) {            
//             if (data.toString().length > max) {                
//                 return label + " phải bé hơn " + max;            
//             }        
//         } 
//         else {            
//             if (data.length > max) {                
//                 return label + " phải bé hơn " + max + " ký tự";            
//             }        
//         }    
//     }    

//     if (min) {        
//         if (number || integer) {            
//             if (data.toString().length < min) {                
//                 return label + " phải lớn hơn " + min;            
//             }        
//         } 
//         else {            
//             if (data.length < min) {                
//                 return label + " phải lớn hơn " + min + " ký tự";            
//             }        
//         }    
//     }    

//     if (age) {        
//         const currentYear = new Date().getFullYear()        

//         if ((currentYear - data.slice(0, 4)) < age) {            
//             return "Tuổi phải lớn hơn " + age;        
//         }    
//     }    

//     switch (type) {        
//         case "EMAIL":            
//             if (!regex_email.test(data)) {                
//                 return label + " Không đúng định dạng";            
//             }            
//             break;        

//         case "PASSWORD":            
//             if (!regex_pass.test(data)) {                
//                 return label + " phải chứa ít nhất 8 kí tự, nhiều nhất 32 kí tự . Chứa ít nhất 1 chữ viết hoa, 1 chữ viết thường và 1 số";            
//             }            
//         break;    
//     }
// }



