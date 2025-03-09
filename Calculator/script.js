const result = document.getElementById("result");

function appendToDisplay(input){
    result.textContent += input;
}

function clearScreen(){
    result.textContent = ""
}

function calculate(){
    try{
        result.textContent = eval(result.textContent);;
    }

    catch(error){
        result.textContent = "Error"
    }
}
console.log(value)