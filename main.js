function listAppend() {
    //Hämta värdet från input fältet
    let inputValue = document.querySelector("#todo-input").value;
    console.log(inputValue);


    let newLi = document.createElement('li');
    // Lägger vi till barnet createTextMode med värdet inputValue
    let newTextNode = (document.createTextNode(inputValue));
    newLi.appendChild(newTextNode);

    let list = document.querySelector("ul");
    //Stoppa in newLI i list
    list.appendChild(newLi);
}


let result = document.getElementById("");
 
function changeColor(color) {
    document.body.style.background = color;
}

function myFunc1() {
    changeColor('yellow');
    result.innerHTML = "";
    }
function myFunc2() {
    changeColor('blue');
    result.innerHTML = "";
}  

function updateClock() {
    const today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
   

    var time = hour + ":" + minute + ":" + second;
    document.getElementById("clock").innerHTML = time;
    
    }
    setInterval(updateClock, 1000);

updateClock();
