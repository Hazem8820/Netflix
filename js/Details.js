class Details {
    constructor() {
        this.searchParams = location.search
        this.params = new URLSearchParams(this.searchParams)
        this.id = this.params.get('id')
        this.getMovie(this.id)
    }
    async getMovie(id) {
        document.getElementById('loader').classList.remove('d-none')
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b2da2843b1mshaf54e2f18387934p1a8984jsn055e22dbde8a',
                'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
            }
        };
        const api = await fetch(`https://imdb-top-100-movies.p.rapidapi.com/${"top" + id}`, options);
        const response = await api.json()
        console.log(response);
        this.displayData(response)
        document.getElementById('loader').classList.add('d-none')
    }
    displayData(data) {
        const box = `<div class="w-100 my-5 mx-auto text-center position-relative">
        <img src="${data.image}" class="w-75 border-light border-1 border h-100" alt="">
        <div class=" h-100 w-100 position-absolute top-0 z-2">
        </div>
    </div>
    <div class="w-75 mx-auto mt-5 me-5 text-center">
        <h2 class="signintext title1 m-5">${data.title}</h2>
        <p class="fa-2x text-light text-center">${data.description}</p>
        <div class="my-5 text-light fa-2x">
            <p><span class="signintext">Year:</span> ${data.year}</p>
            <p><span class="signintext">Director:</span> ${data.director}</p>
            <p><span class="signintext">IMDB Rank:</span> ${data.id}</p>
            <p><span class="signintext">Category:</span> ${data.genre}</p>
        </div>
    </div>`
        document.getElementById('display').innerHTML = box
    }
}
const detailsPage = new Details()