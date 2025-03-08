function calculateBMI(){
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
     
    if(weight == "" || height == "" || weight<0 || height<0 ){
       let result = document.getElementById("result")
       console.log(result)
       result.textContent = "please enter valid number "
    }
    else{
    let bmi = (weight/(height*height));
    let category = "";
    if(bmi < 18.5) {category = "Underweight" }
    else if(bmi >= 18.5 && bmi < 24.9) {category = "Normal weight"}
    else if(bmi >= 25 && bmi < 30) {category = "Over Weight"}
    else  { category = "Obese"}

    result.textContent = `BMI = ${bmi.toFixed(2)} Category = ${category}`
    }
}