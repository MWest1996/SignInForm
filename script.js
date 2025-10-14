const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

const fnameErr = document.getElementById("fnameErr");
const fnameErrIcon = document.getElementById("fnameErr-Icon");
const lnameErr = document.getElementById('lnameErr');
const lnameErrIcon = document.getElementById('lnameErr-Icon');
const emailErr = document.getElementById('emailErr');
const emailErrIcon = document.getElementById('emailErr-Icon');
const pwErr = document.getElementById('pwErr');
const pwErrIcon = document.getElementById('pwErr-Icon');

let validateFname = () => {
    let value = fname.value.trim();
    if (value.length < 1){
        fnameErr.textContent = "First Name cannot be empty";
        fnameErr.classList.remove("hide");
        fname.classList.add('invalid');
        return false
    } else {
        fnameErr.textContent = "";
        fnameErr.style.display = "none";
        fname.classList.remove('invalid')
        return true
    }
}

let validateLname = () => {
    let value = lname.value.trim();
    if (value.length < 1){
        lnameErr.textContent = "Last Name cannot be empty";
        lnameErr.classList.remove(".hide");
        lnameErrIcon.classList.remove(".hide")
        lname.classList.add('.invalid');
        return false
    } else {
        lnameErr.textContent = "";
        lnameErr.style.display = "none";
        lnameErrIcon.classList.remove("hide");
        lname.classList.remove("invalid");
        return true
    }
}

// let validateEmail
//     let value = email.value.trim();
//     if (value.length < 1){
//         lnameErr.textContent = "Please enter a valid email address";
//         lnameErr.style.display = "block";
//         lnameErr.style.display = "block";
//         lname.classList.add('.invalid');
//         return false
//     } else {
//         emailErr.textContent = "";
//         emailErr.style.display = "none";
//         emailErrIcon.style.display = "none;"
//         email.classList.remove("invalid");
//         return true
//     }

form.addEventListener ('submit', function(e) {
    e.preventDefault();

    let fnameValid = validateFname();

    if (fnameValid){ 
        console.log("success");
    } else {
        console.log("fail");
    }
})