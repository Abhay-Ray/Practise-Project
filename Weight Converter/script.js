let input = document.getElementById("input_kg")
let output = document.getElementById("output")

input.addEventListener("input", () => {
    let val = input.value
    let pound = val*2.20462
    output.innerText = pound.toFixed(2)
})