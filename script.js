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
        fnameErr.style.display = "block";
        fnameErrIcon.style.display = "block";
        fname.classList.add('invalid');
        fname.classList.remove('valid');
        return false
    } else {
        fnameErr.textContent = "";
        fnameErr.style.display = "none";
        fnameErrIcon.style.display = "none";
        fname.classList.remove('invalid');
        fname.classList.add('valid');
        return true
    }
}

let validateLname = () => {
    let value = lname.value.trim();
    if (value.length < 1){
        lnameErr.textContent = "Last Name cannot be empty";
        lnameErr.style.display = "block"
        lnameErrIcon.style.display = "block"
        lname.classList.add('invalid');
        lname.classList.remove('valid')
        return false
    } else {
        lnameErr.textContent = "";
        lnameErr.style.display = "none";
        lnameErrIcon.style.display = "none";
        lname.classList.remove("invalid");
        lname.classList.add('valid');
        return true
    }
}

let validateEmail = () => {
    let value = email.value.trim();
    if (value.length < 1){
        emailErr.textContent = "Looks like this is not an email";
        emailErr.style.display = "block";
        emailErrIcon.style.display = "block";
        email.classList.add("invalid");
        email.classList.remove('valid');
        return false;
    } else {
        emailErr.textContent = "";
        emailErr.style.display = "none";
        emailErrIcon.style.display = "none";
        email.classList.remove("invalid");
        email.classList.add('valid');
        return true;
    }
}

let validatePW = () => {
    let value = password.value.trim();
    if (value.length < 1){
        pwErr.textContent = "Password cannot be empty";
        pwErr.style.display = "block";
        pwErrIcon.style.display = "block";
        password.classList.add('invalid');
        password.classList.remove('valid');
        return false; 
    } if (value.length >= 1 && value.length < 8) {
        pwErr.textContent = "Password must be at least 8 characters long";
        pwErr.style.display = "block";
        pwErrIcon.style.display = "block";
        password.classList.add('invalid');
        password.classList.remove('valid');
        return false;
    } else
        pwErr.textContent = "";
        pwErr.style.display = "none";
        pwErrIcon.style.display = "none";
        password.classList.remove('invalid');
        password.classList.add('valid');
        return true;
}

form.addEventListener ('submit', function(e) {
    e.preventDefault();

    let fnameValid = validateFname();
    let lnameValid = validateLname();
    let emailValid = validateEmail();
    let pwValid = validatePW();

    if (fnameValid && lnameValid && emailValid && pwValid){ 
        form.reset();
    }
})