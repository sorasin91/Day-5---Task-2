const eyeicon = document.getElementById('eyeicon');
const pass = document.getElementById('password');
const msg = document.getElementById('message');
const str = document.getElementById('strength');

function eyeslash(){
    if (pass.type == 'password'){
        pass.type = 'text';
        eyeicon.src = 'eye-regular.svg';
    }
    else {
        pass.type = 'password';
        eyeicon.src = 'eye-slash-regular.svg';
    }
}

pass.addEventListener('input',()=> {
    if(pass.value.length > 0 ){
        msg.style.display = 'block';
    }
    else {
        msg.style.display = 'none'
    }
    // Regular expressions to check password criteria
    // At least one lowercase letter ((?=.*[a-z]))
    // At least one uppercase letter ((?=.*[A-Z]))
    // At least one number ((?=.*[0-9]))
    // At least one special character ((?=.*[!@#$%^&*]))
    // A minimum length of 8 characters ((?=.{8,}))

    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");
    const mediumRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");

    if(strongRegex.test(pass.value)) {
        str.innerHTML = 'fortress strong';
        pass.style.borderColor = 'green';
        msg.style.color = 'green';
    } else if(mediumRegex.test(pass.value)) {
        str.innerHTML = 'looking good!';
        pass.style.borderColor = 'yellow';
        msg.style.color = 'yellow';
    } else {
        str.innerHTML = 'could be stronger!';
        pass.style.borderColor = 'red';
        msg.style.color = 'red';
    }
  }
);


