let name = "Japeth";
let age = "56";

function greetUser(name, age){
    console.log(`Hello, I am ${name} and I am ${age} years old.`)
}
greetUser(name, age);


function randomColor(){
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random()* 16)];
    }
    return color;
}

function changeBGColor(){
    let newColor = randomColor();
    document.body.style.backgroundColor = newColor;
    document.getElementById("colorName").textContent = newColor;
    console.log(`Hello there, ${newColor} is the current background color.`)
}