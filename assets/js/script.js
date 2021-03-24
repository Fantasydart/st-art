
let checkPass = () => {
    window.localStorage.password = 'rewq';
    if(window.localStorage.enteredPass === window.localStorage.password){
        hide();
    }
    else{
        window.localStorage.enteredPass = prompt('Enter password');
        checkPass();
    }
};
function hide(){
    document.querySelector('.site-close').style.display = 'none';
    document.querySelector('.page').style.filter = 'blur(0)';
}

document.addEventListener('DOMContentLoaded', checkPass);