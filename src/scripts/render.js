// Rederização dos botões de filtro
export const renderButtons = (array) => {
    const buttonsList = document.querySelector(".filter-category__list")

    buttonsList.innerHTML = ''

    array.forEach((gener) => {
        const buttons = createButtons(gener)

        buttonsList.appendChild(buttons)
    });
} 

export const createButtons = (gener) => {
    const listButton = document.createElement("li")
    listButton.classList.add("list-category__item")

    const button = document.createElement("button")
    // button.id = index 
    button.classList.add("button__filter")
    button.innerText = gener
      

    listButton.appendChild(button)

    return listButton
}



//Renderização dos cards
export const renderCards = (array) => {
    const cardList = document.querySelector(".cards__list")

    cardList.innerHTML = ''

    array.forEach((element) => {
        const card = createCard(element)

        cardList.appendChild(card)
    })
}

export const createCard = (element) => {
    const card = document.createElement("li")
    const image = document.createElement("img")
    const divDescription = document.createElement("div")
    const divBandAndYear = document.createElement("div")
    const bandName = document.createElement("p")
    const yearRealease = document.createElement("p")
    const musicName = document.createElement("h3")
    const divPrice = document.createElement("div")
    const priceProducts = document.createElement("p")
    const buttonToBuy = document.createElement("button")

    card.classList.add("list__card")
    card.dataset.elementId = element.id
    
    image.classList.add("image__card")
    divDescription.classList.add("div__description")
    divBandAndYear.classList.add("description__band-and-year")
    bandName.classList.add("band__name")
    yearRealease.classList.add("year__release")
    musicName.classList.add("music__name")
    divPrice.classList.add("div__price")
    priceProducts.classList.add("price__products")
    buttonToBuy.classList.add("button__buy")


    image.src = element.img
    image.alt = "Capa do Album"
    bandName.innerText = element.band
    yearRealease.innerText = element.year
    musicName.innerText = element.title
    priceProducts.innerText = `R$ ${Number(element.price).toFixed(2)}`
    buttonToBuy.innerText = "Comprar"


    divBandAndYear.append(bandName, yearRealease)
    divPrice.append(priceProducts, buttonToBuy)
    divDescription.append(divBandAndYear, musicName,divPrice)
    
    card.append(image, divDescription)


    return card
}

















// export const renderCategory = (array) => {
//     const filteredElements = array.filter((value) => {
//         if(value.category === 1 || value.category === 2 || value.category === 8) {
//             return value

//         }else if(value.category === 1) {
//             return value

//         }else if(value.category === 2) {
//             return value
        
//         }else if(value.category === 8) {
//             return value
//         }

//     })
//     render(filteredElements)
// }
