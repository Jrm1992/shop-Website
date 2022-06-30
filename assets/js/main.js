const main = document.querySelector('.main')
const women = document.querySelector('.women')
const men = document.querySelector('.men')
const shoes = document.querySelector('.shoes')

function reload() {
    document.location.reload(true);
}

function removerMain() {
    while (main.firstChild) {
        main.removeChild(main.firstChild);
      }
}

function getWomen() {
    const womenShop = document.createElement('div')
    women.style.color = "#e67e34"
    men.style.color = "black"
    shoes.style.color = "black"
    womenShop.className = 'women-shop row'

    for (i = 0; i < 6; i++){
        const addCart = document.createElement('button')
        const item = document.createElement('div')
        const img = document.createElement('img')
        img.src = `./assets/img/women/${i}.jpg`
        addCart.innerHTML ='Add to Cart'
        addCart.className = 'addCart'
        item.className = 'item col-12 col-md-4 col-sm-6'
        img.addEventListener("mouseenter", () => {
            addCart.classList.add('show')
            img.style.opacity = 0.5
        })
        addCart.addEventListener("mouseenter", () => {
            addCart.classList.add('show')
            img.style.opacity = 0.5
        })
        img.addEventListener("mouseout", () => {
            addCart.classList.remove('show')
            img.style.opacity = 1
        })
        item.appendChild(img)
        item.appendChild(addCart)
        womenShop.appendChild(item)
    }

    main.appendChild(womenShop)
}

function getMen() {
    const menShop = document.createElement('div')
    women.style.color = "black"
    men.style.color = "#e67e34"
    shoes.style.color = "black"
    menShop.className = 'men-shop row'

    for (i = 0; i < 6; i++){
        const addCart = document.createElement('button')
        const item = document.createElement('div')
        const img = document.createElement('img')
        img.src = `./assets/img/men/${i}.jpg`
        addCart.innerHTML ='Add to Cart'
        addCart.className = 'addCart'
        item.className = 'item col-12 col-md-4 col-sm-6'
        img.addEventListener("mouseenter", () => {
            addCart.classList.add('show')
            img.style.opacity = 0.5
        })
        addCart.addEventListener("mouseenter", () => {
            addCart.classList.add('show')
            img.style.opacity = 0.5
        })
        img.addEventListener("mouseout", () => {
            addCart.classList.remove('show')
            img.style.opacity = 1
        })
        item.appendChild(img)
        item.appendChild(addCart)
        menShop.appendChild(item)
    }

    main.appendChild(menShop)
}

function getShoes() {
    const shoeShop = document.createElement('div')
    women.style.color = "black"
    men.style.color = "black"
    shoes.style.color = "#e67e34"
    shoeShop.className = 'shoes-shop row'

    for (i = 0; i < 6; i++){
        const addCart = document.createElement('button')
        const item = document.createElement('div')
        const img = document.createElement('img')
        img.src = `./assets/img/shoe/${i}.png`
        addCart.innerHTML ='Add to Cart'
        addCart.className = 'addCart'
        item.className = 'item col-12 col-md-4 col-sm-6'
        img.addEventListener("mouseenter", () => {
            addCart.classList.add('show')
            img.style.opacity = 0.5
        })
        addCart.addEventListener("mouseenter", () => {
            addCart.classList.add('show')
            img.style.opacity = 0.5
        })
        img.addEventListener("mouseout", () => {
            addCart.classList.remove('show')
            img.style.opacity = 1
        })
        item.appendChild(img)
        item.appendChild(addCart)
        shoeShop.appendChild(item)
    }

    main.appendChild(shoeShop)
}


