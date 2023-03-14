const x = localStorage.getItem('userAdress')
const y = localStorage.getItem('userAdress2')
const inputs = document.querySelectorAll('input')
function userAdress(input) {
    inputs[2].value = input
}
if (x == '') {
    userAdress(y)
} else if (y == '') {
    userAdress(x)
}
class Signup {
    constructor() {
        // ! ============= vars ===============
        this.inputs = document.querySelectorAll('input')
        this.isValid = true
        this.btnSignUp = document.getElementById('signUp');
        // ! ============= Events ===============
        document.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault()
            if (this.isValid == true) {
                this.setForm()
            }
        })
        document.querySelector('form').addEventListener('input', () => {
            if (this.nameValidation(this.inputs[0])
                && this.nameValidation(this.inputs[1])
                && this.emailValidation(this.inputs[2])
                && this.passWordValidation(this.inputs[3])
                && this.ageValidation(this.inputs[4])) {
                this.isValid = true
            }
            else {
                this.isValid = false
            }
        })
    }
    // * ============= Functions ===============
    setForm() {
        const user = {
            first_name: this.inputs[0].value,
            last_name: this.inputs[1].value,
            email: this.inputs[2].value,
            password: this.inputs[3].value,
            age: this.inputs[4].value,
        }
        this.sendData(user)
    }

    async sendData(userData) {
        const api = await fetch(`https://sticky-note-fe.vercel.app/signup`, {
            method: 'post',
            body: JSON.stringify(userData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        const response = await api.json()
        console.log(response);
        if (response.message === 'success') {
            location.href = './Signin.html'
        }
        else {
            document.getElementById('msg').innerText = response.errors?.email.message
        }
    }

    nameValidation(input) {
        const regexStyle = /^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){2,20}$/
        if (regexStyle.test(input.value)) {
            input.classList.add('is-valid')
            input.classList.remove('is-invalid')
            return true
        }
        else {
            input.classList.add('is-invalid')
            input.classList.remove('is-valid')
            return false
        }
    }

    emailValidation(input) {
        const regexStyle = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
        if (regexStyle.test(input.value)) {
            input.classList.add('is-valid')
            input.classList.remove('is-invalid')
            return true
        }
        else {
            input.classList.add('is-invalid')
            input.classList.remove('is-valid')
            return false
        }
    }

    passWordValidation(input) {
        const regexStyle = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        if (regexStyle.test(input.value)) {
            input.classList.add('is-valid')
            input.classList.remove('is-invalid')
            return true
        }
        else {
            input.classList.add('is-invalid')
            input.classList.remove('is-valid')
            return false
        }
    }

    ageValidation(input) {
        const regexStyle = /^([1-9][0-9]|100)$/
        if (regexStyle.test(input.value)) {
            input.classList.add('is-valid')
            input.classList.remove('is-invalid')
            return true
        }
        else {
            input.classList.add('is-invalid')
            input.classList.remove('is-valid')
            return false
        }
    }

}
const SignUpNow = new Signup()