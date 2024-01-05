
document.getElementById("submit").addEventListener("click", function(e){
    e.preventDefault();
    input = document.querySelector(".input");
    output = input.value.split("").reverse().join("");
    if (output == input.value){
        document.getElementById("output").innerHTML = "Your input is a palindrome!";
    }else{
        document.getElementById("output").innerHTML = "Your input is not a palindrome!";
    }
})