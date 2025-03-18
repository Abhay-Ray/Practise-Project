const container = document.querySelectorAll("span")
container.forEach( (item) => {
    item.addEventListener("click" , () => {
        item.classList.toggle("active")
    })
})