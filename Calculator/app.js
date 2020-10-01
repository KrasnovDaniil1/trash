let a = document.getElementById("first_icon");
let b = document.getElementById("second_icon");
let c = document.getElementById("decision");
let button = document.getElementById("button");
let button_action = document.getElementById("action");

button.onclick = function myfunction()  
{
    
switch (button_action.selectedIndex)  
{
case(0):
    c.value = (+ a.value ) + (+ b.value );
    console.log(c.value);
    break;
case(1):
    c.value = (+ a.value) - (+ b.value);
    console.log(c.value);
    break;
case(2):
    c.value = (+ a.value) * (+ b.value);
    console.log(c.value);
    break;
case(3):
    c.value = (+ a.value) / (+ b.value);
    console.log(c.value);
    break;
}
      }
