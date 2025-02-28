function rolldice(){
    const numOfDice = document.getElementById("numOfDice").value
    // .value -  Extracts the value of the element (works for form elements like <input>, <textarea>).
    const diceResult = document.getElementById("diceResult");
    const diceImage = document.getElementById("diceImage");
    const values = [];
    const images = [];
   
    for(let i = 0 ; i<numOfDice ; i++){
        const value = Math.floor(Math.random()*6) + 1;
        values.push(value)
        console.log(value);
        
        images.push(`<img src="./images/${value}.png" alt="dice${value}">`);
    }

    diceResult.textContent = `dice: ${values.join(", ")}`;
    diceImage.innerHTML = images.join(" ");
}

