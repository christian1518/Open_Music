/* Desenvolva sua lógica aqui ... */
import { categories, products } from "./productsData.js";
import { renderButtons, createButtons, renderCards, createCard } from "./render.js";
import { renderTheme } from "./theme.js";




const renderPreferences = () => {
    const lastFilter = localStorage.getItem("LastFilterClicked")
    console.log(lastFilter)
}


function handleFilterCards(array) {
    const buttonFilter = document.querySelectorAll(".list-category__item")
    let filterProducts = []

    buttonFilter.forEach((button) => {
        button.addEventListener("click", (event) => {
            const element = event.target

            // Testando
            // button.forEach(activeButton => {
            //     if(activeButton.classList.contains("button__selected")) {
            //         activeButton.classList.remove("button__selected")
            //     }
            // })
            // element.classList.add('button__filter')
            // testando até aqui

            localStorage.setItem("LastFilterClicked", element.innerText)
            
            const indexCategory = categories.indexOf(button.textContent)

            if(indexCategory === 0) {
                filterProducts = products
            }else {
                filterProducts = array.filter((element) => {
                    return element.category === indexCategory
                })
            }
           
            renderCards(filterProducts)
            handleFilterPrice(filterProducts)  
        })
    })
}


function handleFilterPrice(array) {
    const inputRange = document.getElementById("input__range")
    const span = document.querySelector(".max__price")
    
    inputRange.value = 100
    inputRange.addEventListener("input", () => {
        const maxPrice = Number(inputRange.value).toFixed(2)
        span.textContent = `Até R$ ${maxPrice}`

        const productsFilter = array.filter((element) => {
            return element.price <= maxPrice
        })

        renderCards(productsFilter)
    })
}



















renderPreferences()
renderTheme()
renderButtons(categories)
renderCards(products)
handleFilterCards(products)