
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
    let request = new XMLHttpRequest;
    request.open('GET', 'https://rocky-depths-88529.herokuapp.com/ancestry');
    request.addEventListener('load', function () {
        let peeps = JSON.parse(request.responseText);
        let parent = document.querySelector('#peeps-list');

        for (let i = 0; i < peeps.lenght; i++) {
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

/*------------------Window Listener------------------*/
window.addEventListener('load', function () {
    listOfShops();
    listOfPeeps();

    let submitBtn = document.querySelector('#add-new-shop');
    submitBtn.addEventListener('click', function () {
        addNewShop();
    });

    let peepSubmitBtn = document.querySelector('#add-new-human');
    peepSubmitBtn.addEventListener('click', function () {
        addNewPeep();
    });

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
});

    
/*------------------Ancestry API------------------*/
