let next = document.getElementById("next")
let images = document.getElementById("images")

// let index = 1


// next.addEventListener("click", () => {
//     console.log(images);
//     index = Math.floor(Math.random()*3)
//     images.src = `./Cricketers/${index}.webp`
// })

let count = 0
next.addEventListener("click", () => {
        images.src = `./Cricketers/${count}.webp`
        count++
        if(count > 5 ){
            count = 0
        }
    })