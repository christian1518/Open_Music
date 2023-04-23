/* Desenvolva sua lógica aqui ... */
export const renderTheme = () => {
    const darkButton = document.querySelector(".button__theme")

    const html = document.querySelector("html")

    const modePreference = JSON.parse(localStorage.getItem("dark__mode"))


    if(modePreference) {
        darkButton.innerHTML = '<img src="src/assets/img/sun.jpg"/>'
        html.classList.add("dark__mode")
    }else {
        darkButton.innerHTML = '<img src="src/assets/img/moon.jpg"/>'
        html.classList.remove("dark__mode")
    }

    
    darkButton.addEventListener("click", () => {
        html.classList.toggle("dark__mode")

        if(html.classList.contains("dark__mode")) {
            darkButton.innerHTML = '<img src="src/assets/img/sun.jpg"/>'  
            localStorage.setItem("dark__mode", true)
        }else {
            darkButton.innerHTML = '<img src="src/assets/img/moon.jpg">'
            localStorage.setItem("dark__mode", false)
        }
    })
}