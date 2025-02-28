let textarea = document.getElementById("textbox");
textarea.addEventListener('input', function () {

    var text = this.value;
    let char = text.length;
    document.getElementById("char").innerHTML = char;

    text = text.trim();

    let words = text.split(" ");
    let clear = words.filter(function(elm){
        return elm != "";

    });
   
    document.getElementById("word").innerHTML = clear.length;

});