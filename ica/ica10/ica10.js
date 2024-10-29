let my_var = 100;
var my_other_var = "boo";
const this_is_a_constant = "constant";
console.log(my_other_var);
my_other_var += "!";

console.log(document.getElementById("my_head"));
document.getElementById("my_head").addEventListener("click", function(e){
    alert("BOO");
    document.getElementById("paragraph").innerHTML = "this is a new paragraph blablablabalbla";
    document.getElementById("paragraph").style.color = "magenta";
    document.getElementById("image").src = "pic4.jpg"
})

console.log(document.getElementById("my_head").innerHTML);