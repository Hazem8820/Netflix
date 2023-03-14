class Signin {
    constructor() {
        // ! ============= vars ===============
        this.isValid = true
        this.btnSignUp = document.getElementById('signIn');
        this.inputs = document.querySelectorAll('input');
        this.learnMore = document.getElementById('learnMore');
        this.info = document.getElementById('InfoNum');
        
        // ! ============= Events ===============
        this.learnMore.addEventListener('click', () => {
            this.learnMore.classList.add('d-none')
            this.info.classList.remove('d-none')
        })
        document.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault()
            if (this.isValid == true) {
                this.setForm()
            }
        })
        document.querySelector('form').addEventListener('input', () => {
            if (this.emailValidation(this.inputs[0]) && this.passWordValidation(this.inputs[1])) {
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
            email: this.inputs[0].value,
            password: this.inputs[1].value,
        }
        this.getData(user)
    }

    async getData(userData) {
        const api = await fetch(`https://sticky-note-fe.vercel.app/signin`, {
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
            localStorage.setItem("uToken", response.token)
            location.href = './Home.html'
        }
        else {
            document.getElementById('msg').innerText = response.message;
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
}
const SignInNow = new Signin()