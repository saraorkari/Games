


let x;
x = document.getElementsByTagName("h1");
x[0].style.color = "pink";
let y = document.getElementsByTagName("input");
// y = [0,0,X
//    ,0, 0, X,
//     0, 0, X];
let num = 0;

document.getElementById("play").addEventListener("click", function () {
    for (var i = 0; i < 9; i++) {
        y[i].value = " ";
        y[i].addEventListener("click", what);
        y[i].addEventListener("mouseover", paint);
        y[i].addEventListener("mouseout", paintBack);
        num = 0;
    }
    document.getElementById("win").innerHTML = "";

})


for (let i = 0; i < 9; i++) {
    y[i].addEventListener("click", what);
    y[i].addEventListener("mouseover", paint);
    y[i].addEventListener("mouseout", paintBack);
}
function paint() {   
    event.target.style.border = "2px solid green";
}
function paintBack() {
    event.target.style.border="2px outset -internal - light - dark - color(rgb(118, 118, 118), rgb(195, 195, 195)) initial"

  
}
function what() {
    console.log(event.target);
    if (num % 2 == 0) {
        event.target.value = "X";
    }
    else {
        event.target.value = "O";
    }
   
    // הסרת האזנה מהאירוע כדי שלא יקבל עוד לחיצה
    event.target.removeEventListener("click", what);
    num++;
    if (num > 4) {
        check();
    }
}
function check() {
    for (var i = 0; i < 9; i += 3) {
        if (y[i].value == y[i + 1].value && y[i].value == y[i + 2].value && y[i].value == "X")
        {
            document.getElementById("win").innerHTML = "the  winer  is  X  !!!!!!";
            remove();
        }
        if (y[i].value == y[i + 1].value && y[i].value == y[i + 2].value && y[i].value == "O") {
            document.getElementById("win").innerHTML = "the  winer  is  O  !!!!!!";
            remove();
        }
    }
    for (var i = 0; i < 3; i++) {
        if (y[i].value == y[i + 3].value && y[i].value == y[i + 6].value && y[i].value == "X") {
            document.getElementById("win").innerHTML = "the  winer  is  X  !!!!!!";
            remove();
        }
        if (y[i].value == y[i + 3].value && y[i].value == y[i + 6].value && y[i].value == "O") {
            document.getElementById("win").innerHTML = "the  winer  is  O  !!!!!!";
            remove();
        }
    }
    if (y[0].value == y[4].value && y[0].value == y[8].value && y[0].value == "X") {
        document.getElementById("win").innerHTML = "the  winer  is  X  !!!!!!";
        remove();
    }
    if (y[0].value == y[4].value && y[0].value == y[8].value && y[0].value == "O") {
        document.getElementById("win").innerHTML = "the  winer  is  O  !!!!!!";
        remove();
    }
    if (y[2].value == y[4].value && y[2].value == y[6].value && y[2].value == "X") {
        document.getElementById("win").innerHTML = "the  winer  is  X  !!!!!!";
        remove();
    }
    if (y[2].value == y[4].value && y[2].value == y[6].value && y[2].value == "O") {
        document.getElementById("win").innerHTML = "the  winer  is  O  !!!!!!";
        remove();
    }
}
function remove() {
    for (var i = 0; i < 9; i++)
        y[i].removeEventListener("click", what);
    
}

