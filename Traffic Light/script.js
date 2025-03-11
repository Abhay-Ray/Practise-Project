let  circles = document.querySelectorAll(".circle");
light = 0;

setInterval(() => {
    changeLight();
}, 2000);

function changeLight(){
    circles[light].classList = "circle";
    light++;
    
    if(light>2){
        light = 0;
    }
    const selectLight = circles[light];
    selectLight.classList.add(selectLight.getAttribute("color"));
}