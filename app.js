/*------------------Coffee Shops------------------*/
function dollarfy (x) {
    count = "";
    for (let i = 0; i < x; i++) {
        count = count + "$";
    }
    return count;
}

function listOfShops() {
    let request = new XMLHttpRequest();
    request.open('GET', 'http://charlotte-coffee-shops.herokuapp.com/coffee-shops');
    request.addEventListener('load', function () {
        let shops = JSON.parse(request.responseText);
        let parent = document.querySelector('#shop-list');
        let count = document.querySelector('#navCoffee');
        count.textContent = shops.length;
        for (let i = 0; i < shops.length; i++) {
            let listItem = document.createElement('li');
            listItem.innerHTML = shops[i].name + " (" + shops[i].rating + "&#x2606;): " + dollarfy(shops[i].price); 
            parent.appendChild(listItem);
        }
    });
    request.send();
}

function addNewShop() {
    let shop = {
        name: document.querySelector("#new-name").value,
        rating: document.querySelector("#new-rating").value,
        price: document.querySelector("#new-price").value,
    }

    let request = new XMLHttpRequest();
    request.open('POST', 'http://charlotte-coffee-shops.herokuapp.com/coffee-shops');
    request.send(JSON.stringify(shop));
}
/*------------------Coffee Shops------------------*/

/*------------------Ancestry API------------------*/

function listOfPeeps() {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://rocky-depths-88529.herokuapp.com/ancestry');
    request.addEventListener('load', function () {
        let peeps = JSON.parse(request.responseText);
        let parent = document.querySelector('#peeps-list');
        let count = document.querySelector('#navAncestors');
        count.textContent = peeps.length;
        for (let i = 0; i < peeps.length; i++) {
            let listItem = document.createElement('li');
            listItem.textContent = peeps[i].name + " (" + peeps[i].yearBorn + ") " + "was originally from " + peeps[i].origin + ".";
            parent.appendChild(listItem);
        }
    });
    request.send();
}

function addNewPeep() {
    let peep = {
        name: document.querySelector("#new-human").value,
        yearBorn: document.querySelector("#yearBorn").value,
        origin: document.querySelector("#origin").value,
    }

    let request = new XMLHttpRequest();
    request.open('POST', 'https://rocky-depths-88529.herokuapp.com/ancestry');
    request.send(JSON.stringify(peep));
}

/*------------------Ancestry API------------------*/

/*------------------Movie API------------------*/
function listOfMovies() {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://secret-springs-58890.herokuapp.com/api');
    request.addEventListener('load', function () {
        let movies = JSON.parse(request.responseText);
        let parent = document.querySelector('#movies-list');
        let count = document.querySelector('#navMovies');
        count.textContent = movies.length;
        for (let i = 0; i < movies.length; i++) {
            let listItem = document.createElement('li');
            listItem.textContent = movies[i].name + "/" + movies[i].genre + "/" + movies[i].rating;
            parent.appendChild(listItem);
        }
    });
    request.send()
}

function addNewMovie() {
    let movies = {
        name: document.querySelector("#new-movie").value,
        genre: document.querySelector("#genre").value,
        rating: document.querySelector("#movie-rating").value,
    }

    let request = new XMLHttpRequest();
    request.open('POST', 'https://secret-springs-58890.herokuapp.com/api');
    request.send(JSON.stringify(movies));
}

/*------------------Movie API------------------*/

/*------------------Window Listener------------------*/
window.addEventListener('load', function () {
    listOfShops();
    listOfPeeps();
    listOfMovies();

    let submitBtn = document.querySelector('#add-new-shop');
    submitBtn.addEventListener('click', function () {
        addNewShop();
    });

    let peepSubmitBtn = document.querySelector('#add-new-human');
    peepSubmitBtn.addEventListener('click', function () {
        addNewPeep();
    });

    let moviesSubmitBtn = document.querySelector('#add-new-movie');
    moviesSubmitBtn.addEventListener('click', function () {
        addNewMovie();
    })

    let coffeeSection = document.querySelector('#coffeeSection');
    let coffeeButton = document.querySelector('#coffeeButton');
    coffeeButton.addEventListener('click', function () {
        if (coffeeSection.className === "hidden") {
            coffeeSection.classList.remove("hidden");
        } else if (coffeeSection.className === "") {
            coffeeSection.classList.add("hidden");
        }
    });

    let ancestrySection = document.querySelector('#ancestrySection');
    let ancestryButton = document.querySelector('#ancestryButton');
    ancestryButton.addEventListener('click', function () {
        if (ancestrySection.className === "hidden") {
            ancestrySection.classList.remove("hidden");
        } else if (ancestrySection.className === "") {
            ancestrySection.classList.add("hidden");
        }
    });

    let movieSection = document.querySelector('#movieSection');
    let movieBtn = document.querySelector('#movieButton');
    movieBtn.addEventListener('click', function () {
        if (movieSection.className === "hidden") {
            movieSection.classList.remove("hidden");
        } else if (movieSection.className === "") {
            movieSection.classList.add("hidden");
        }
    });
});

    
/*------------------Ancestry API------------------*/
