
///selecting login button:
const btnlog = document.querySelector('.btnlog')
///selecting signin button:
const btnsign = document.querySelector('.btnsign')
///selecting register pinkcard:
const register = document.querySelector('.register')
///selecting login pinkcard:
const login = document.querySelector('.log')
/// selecting input by id
let username = document.querySelector('#username')
let username2 = document.querySelector('#username2')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let password2 = document.querySelector('#password2')
let confirmpassword = document.querySelector('#confirmpassword')

////selecting forms:
let form1 = document.querySelectorAll('.form1>input')
let form2 = document.querySelectorAll('.form2>input')






btnlog.addEventListener('click', function () {
    register.style.display = 'none'
    login.style.display = 'block'
    login.style.transform = 'translateX(-100%)'



})

btnsign.addEventListener('click', function () {
    login.style.display = 'none'
    register.style.display = 'block'
    register.style.transform = 'translateX(0)'
})


////username
username.addEventListener('focus', function () {
    username.style.borderColor = '#CE7D88'
    username.placeholder = ''

})
username.addEventListener('blur', function () {
    username.style.borderColor = '#F6F6F6'
    username.placeholder = 'username'
})
username.addEventListener('input', function (e) {

    if (e.target.value.search(/^[a-z0-9_-]{3,15}$/) == -1) {
        // e.target.value = e.target.value.slice(0, e.target.value.length - 1)
        alert('the user name is invalid')
    }

})

//password
password.addEventListener('focus', function () {
    password.style.borderColor = '#CE7D88'
    password.placeholder = ''

})
password.addEventListener('blur', function () {
    password.style.borderColor = '#F6F6F6'
    password.placeholder = 'password'
})

////email
email.addEventListener('focus', function () {
    email.style.borderColor = '#CE7D88'
    email.placeholder = ''

})
email.addEventListener('blur', function () {
    email.style.borderColor = '#F6F6F6'
    email.placeholder = 'email'
})

////confirmpassword
confirmpassword.addEventListener('focus', function () {
    confirmpassword.style.borderColor = '#CE7D88'
    confirmpassword.placeholder = ''

})
confirmpassword.addEventListener('blur', function () {
    confirmpassword.style.borderColor = '#F6F6F6'
    confirmpassword.placeholder = 'confirm password'
})


////username 2
username2.addEventListener('focus', function () {
    username2.style.borderColor = '#CE7D88'
    username2.placeholder = ''

})
username2.addEventListener('blur', function () {
    username2.style.borderColor = '#F6F6F6'
    username2.placeholder = 'username'
})




/////password 2
password2.addEventListener('focus', function () {
    password2.style.borderColor = '#CE7D88'
    password2.placeholder = ''

})
username2.addEventListener('blur', function () {
    password2.style.borderColor = '#F6F6F6'
    password2.placeholder = 'password'
})
