function showId(id) {
    location.href = `./details.html?id=${id}`
}
class Home {
    constructor() {
        //========================= vars ====================
        this.logoutBtn = document.getElementById('logoutBtn');
        //========================= Events ====================
        this.logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('uToken')
            location.href = './Signin.html'
        })
        this.getMovie()
    }
    async getMovie() {
        document.getElementById('loader').classList.remove('d-none')
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b2da2843b1mshaf54e2f18387934p1a8984jsn055e22dbde8a',
                'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
            }
        };
        const api = await fetch(`https://imdb-top-100-movies.p.rapidapi.com/`, options);
        const response = await api.json()
        console.log(response);
        this.displayData(response)
        document.getElementById('loader').classList.add('d-none')
    }

    displayData(data) {
        let box = ``
        for (let i of data) {
            box += `<div onclick="showId(${i.rank})" class="colNum1 col-sm-2 position-relative">
            <img src="${i.image}" class="w-100 h-75 rounded-3 border border-black h-100" alt="">
            <div class="showData rounded-3 h-100">
                <div
                    class="d-flex justify-content-center align-items-center text-white h-100 bg-black bg-opacity-75">
                    <div class="w-75 mx-auto text-center">
                        <h2 class="signintext my-3">${i.title}</h2>
                        <p>${i.description}</p>
                    </div>
                </div>
            </div>
        </div>`
        }
        document.getElementById('display').innerHTML = box
    }
    showId(id) {
        location.href = `./details.html?id=${id}`
    }
    //========================= Functions ====================
}
const homePage = new Home()