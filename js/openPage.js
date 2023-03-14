const emailAdress = document.getElementById('emailAdress');
const emailAdressNum = document.getElementById('emailAdressNum');
function saveData() {
    localStorage.setItem('userAdress', emailAdress.value)
    localStorage.setItem('userAdress2', emailAdressNum.value)
}
class Open {
    constructor() {
        //========================= vars ====================
        this.btnSignIn = document.getElementById('signIn');
        this.getStartedBtn = document.getElementById('getStarted');
        this.getStarted = document.getElementById('getStartedNum');
        this.alert = document.getElementById('alert');
        this.alertNum = document.getElementById('alertNum');
        //========================= Events ====================
        this.btnSignIn.addEventListener('click', () => {
            this.setDirection()
        })
        this.getStartedBtn.addEventListener('click', () => {
            if (this.isVlaid == true) {
                saveData()
                this.setAdress()
            }
            else if (emailAdress.value == '') {
                this.alert.classList.remove('d-none')
            }
        })
        this.getStarted.addEventListener('click', () => {
            if (this.isVlaid == true) {
                saveData()
                this.setAdress()
            }
            else if (emailAdressNum.value == '') {
                this.alertNum.classList.remove('d-none')
            }
        })
        emailAdress.addEventListener('input', () => {
            if (this.emailValidation(emailAdress)) {
                this.isVlaid = true
            }
            else {
                this.isVlaid = false
            }
        })
        emailAdressNum.addEventListener('input', () => {
            if (this.emailValidation(emailAdressNum)) {
                this.isVlaid = true
            }
            else {
                this.isVlaid = false
            }
        })
    }
    //========================= Functions ====================
    setAdress() {
        location.href = './SignUp.html'
    }
    setDirection() {
        location.href = './Signin.html'
    }
    emailValidation(input) {
        const regexStyle = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
        if (regexStyle.test(input.value)) {
            input.classList.add('is-valid')
            input.classList.remove('is-invalid')
            this.alert.classList.add('d-none')
            this.alertNum.classList.add('d-none')
            return true
        }
        else {
            input.classList.add('is-invalid')
            input.classList.remove('is-valid')
            this.alert.classList.remove('d-none')
            this.alertNum.classList.remove('d-none')
            return false
        }
    }
}
const OpenPage = new Open()

