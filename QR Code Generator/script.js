const qrInput = document.getElementById("qr-input")
const qrButton =  document.getElementById("qr-button")
const qrImg = document.getElementById("qr-img")
const Reset = document.getElementById("Reset")




qrButton.addEventListener("click" , () => {
    let inputValue = qrInput.value

    if(!inputValue){
        alert("give valid input")
    }
    else{
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
    }   
}
)

Reset.addEventListener("click", () => {
    qrInput.value = ""
  })