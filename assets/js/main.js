const main = document.querySelector('.main')

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
    const women = document.querySelector('.women')
    women.style.color = "#e67e34"
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
