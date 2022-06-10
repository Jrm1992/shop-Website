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
    womenShop.className = 'women-shop col-sm-6 col-md-8 mb-3'

    for (i = 0; i < 6; i++){
        const item = document.createElement('img')
        item.src = `./assets/img/women/${i}.jpg`
        womenShop.appendChild(item)
    }

    main.appendChild(womenShop)
}
