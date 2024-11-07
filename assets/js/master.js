
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
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let password2 = document.querySelector('#password2')
let username2 = document.querySelector('#username2')

let confirmpassword = document.querySelector('#confirmpassword')


////selecting forms:
// let form1 = document.forms['form1']
let form2 = document.querySelectorAll('.form2>input')
const validation = document.querySelector('.valid')
const emailValidation = document.querySelector('.e-valid')
const pass = document.querySelector('.pass')
const validation2 = document.querySelector('.valid2')
const pass2 = document.querySelector('.pass2')
const line = document.querySelector('.line')






btnlog.addEventListener('click', function () {
    register.style.display = 'none'
    login.style.display = 'block'
    login.style.transform = 'translateX(-100%)'
    document.forms['form2']['username2'].value = ""
    document.forms['form2']['password2'].value = ""
    validation2.style.display = 'none'
    pass2.style.display = 'none'








})

btnsign.addEventListener('click', function () {
    login.style.display = 'none'
    register.style.display = 'block'
    register.style.transform = 'translateX(0)'
    document.forms['form1']['username'].value = ""
    document.forms['form1']['email'].value = ""
    document.forms['form1']['password'].value = ""
    document.forms['form1']['confirmpassword'].value = ""
    validation.style.display = 'none'
    emailValidation.style.display = 'none'
    pass.style.display = 'none'
    line.style.width = '0px'


})


////username
username.addEventListener('focus', function () {
    username.style.borderColor = '#CE7D88'
    username.placeholder = ''

})
username.addEventListener('blur', function () {
    username.style.borderColor = '#F6F6F6'
    username.placeholder = 'username'
    // console.log('username value ', username?.value)
    if (username.value.search(/^[a-z0-9_-]{3,15}$/) == -1) {
        validation.style.display = 'block'
    } else {
        validation.style.display = 'none'

    }
})
////email
email.addEventListener('focus', function () {
    email.style.borderColor = '#CE7D88'
    email.placeholder = ''

})
email.addEventListener('blur', function () {
    email.style.borderColor = '#F6F6F6'
    email.placeholder = 'email'
    if (email.value.search(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/) == -1) {
        emailValidation.style.display = 'block'
    } else {
        emailValidation.style.display = 'none'

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
password.addEventListener('input', () => {
    let pass = password.value
    let flag = 0
    pass.search(/[0-9]/) >= 0 && flag++
    pass.search(/[a-z]/) >= 0 && flag++
    pass.search(/[A-Z]/) >= 0 && flag++
    pass.search(/[@#$%^&&**()]/) >= 0 && flag++
    pass.length >= 8 && flag++

    switch (flag) {
        case 0: line.style.width = '0%'; line.style.background = 'black'; break;
        case 1: line.style.width = '15%'; line.style.background = 'red'; break;
        case 2: line.style.width = '30%'; line.style.background = 'orange'; break;
        case 3: line.style.width = '45%'; line.style.background = 'yellow'; break;
        case 4: line.style.width = '65%'; line.style.background = 'yellowgreen'; break;
        case 5: line.style.width = '80%'; line.style.background = 'green'; break;
    }
    console.log(line +
        'salam'
    );

})



////confirmpassword
confirmpassword.addEventListener('focus', function () {
    confirmpassword.style.borderColor = '#CE7D88'
    confirmpassword.placeholder = ''

})
confirmpassword.addEventListener('blur', function () {
    confirmpassword.style.borderColor = '#F6F6F6'
    confirmpassword.placeholder = 'confirm password'
    if (confirmpassword.value !== password.value) {
        pass.style.display = 'block'
    } else {
        pass.style.display = 'none'

    }
})


////username 2
username2.addEventListener('focus', function () {
    username2.style.borderColor = '#CE7D88'
    username2.placeholder = ''

})
username2.addEventListener('blur', function () {
    username2.style.borderColor = '#F6F6F6'
    username2.placeholder = 'username'
    if (username2.value !== username.value) {
        validation2.style.display = 'block'
    } else {
        validation2.style.display = 'none'

    }
})




/////password 2
password2.addEventListener('focus', function () {
    password2.style.borderColor = '#CE7D88'
    password2.placeholder = ''

})
password2.addEventListener('blur', function () {
    password2.style.borderColor = '#F6F6F6'
    password2.placeholder = 'password'
    if (password2.value !== username.value) {
        pass2.style.display = 'block'
    } else {
        pass2.style.display = 'none'

    }

})
//////////////////local storage
const checkBox = document.querySelector('#checkBox')
let usernameSave = localStorage.getItem('data1')
let passwordSave = localStorage.getItem('data2')
if (usernameSave && passwordSave != null) {
    checkBox.addEventListener('focus',()=>{
        username2=username.value 
        password.value = password2
    
    })
}
function mylocal() {
    let temp1 = username.value
    let temp2 = password.value
    localStorage.setItem('data1', (temp1))
    localStorage.setItem('data2', (temp2))


}
const btnreg = document.querySelector('.btnreg')
btnreg.addEventListener('click', () => {
    mylocal()
})

