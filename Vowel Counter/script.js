let textarea = document.getElementById("textarea")
let count = document.getElementById("count")
let output = document.getElementById("output")


count.addEventListener("click", () => {
    
    if(textarea.value === ''){
         output.textContent = 'please enter a value!'
    }
    else{
        let val = textarea.value;
        let count = 0;
        for(let i = 0; i<val.length; i++){
            if(val[i] == "a" || val[i] == "e" || val[i] == "i" || val[i] == "o" || val[i] == "u"){
                count++;
            } 

        }
        output.textContent = `Total number of vowels are ${count}`
    }
})
