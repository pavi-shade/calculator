let theam = document.querySelector("button");
let head = document.getElementById("header");

let flag = 1;
function display(val){
    document.getElementById("result").value +=val;
}
function equate (){
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
}
function clr(){
    document.getElementById("result").value ="";
}

theam.addEventListener("click", function () {
    if(flag ==1){
        theam.innerText = "Dark"
        head.style.backgroundColor = "white"
        theam.style.backgroundColor = "gray"
        theam.style.color = "white"
        flag = 0;


    }
    else{
        theam.innerText = "Light"
        head.style.backgroundColor = "rgb(76, 76, 76)"
        theam.style.color = "black"
        theam.style.backgroundColor = "white"
        flag = 1;

    }
})