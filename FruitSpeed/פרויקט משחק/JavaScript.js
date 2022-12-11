//משתנים
let arr, arr2, clr, myTime, s2, p, w, rand, mark, ii, m, ch, d, c, ss, s7, s8, l1, u1, r1, d1, str, flag;
let pictures = ["אגס.jpg", "אננס.jpg", "תות.jpg", "אבטיח.jpg"];
let newpic;
let btn = document.getElementById("a");
//האזנה לרמות
arr = document.getElementsByName("choose");
for (var i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", show);
}
str = document.getElementById("a");
//ציר זמן
let zir = document.createElement("div");
zir.setAttribute("id", "myProgress");
zir.style.width = "30%";
zir.style.backgroundColor = "rgba(248, 210, 173, 0)";
zir.style.border = "inset";
let zman = document.createElement("div");
zman.setAttribute("id", "myBar");
zman.style.height = "30px"
zman.style.backgroundColor = "#f6b5a4";
//למעלה
let up = document.createElement("div");
up.setAttribute("class", "dir");
up.setAttribute("id", "u");
up.style.backgroundImage = "url('תות.jpg')";
up.style.width = "100px";
up.style.height = "100px";
//שמאל
let left = document.createElement("div");
left.setAttribute("class", "dir");
left.setAttribute("id", "l");
left.style.backgroundImage = "url('אננס.jpg')";
left.style.width = "100px";
left.style.height = "100px";
left.style.marginRight = "200px";
//למטה
let down = document.createElement("div");
down.setAttribute("class", "dir");
down.setAttribute("id", "d");
down.style.backgroundImage = "url('אגס.jpg')";
down.style.width = "100px";
down.style.height = "100px";
//ימין
let right = document.createElement("div");
right.setAttribute("class", "dir");
right.setAttribute("id", "r");
right.style.backgroundImage = "url('אבטיח.jpg')";
right.style.width = "100px";
right.style.height = "100px";
right.style.marginTop = "-200px";
right.style.marginLeft = "200px";

//להראות את החיצים ואת המקום של התמונות לפי הרמה
function show() {
    //הכנסה למסמך
    document.getElementById("arrow").innerHTML = "";
    document.getElementById("arrow").appendChild(up);
    document.getElementById("arrow").appendChild(left);
    document.getElementById("arrow").appendChild(down);
    document.getElementById("arrow").appendChild(right);
    document.getElementById("zirzman").appendChild(zir);
    zir.appendChild(zman);
    document.getElementById("sho").innerHTML = "";
    if (event.target.value == 3) {
        w = 0;
        for (var i = 0; i < 3; i++) {
            p = document.createElement("div");
            p.setAttribute("class", "pic");
            p.style.width = "100px";
            p.style.height = "100px";
            p.style.display = "inline-block";
            p.style.marginInlineStart = "10px";
            p.style.border = "inset";
            newpic = ["", "", ""];
            document.getElementById("sho").appendChild(p);
        }
    }
    else if (event.target.value == 2.5) {
        w = 1;
        for (var i = 0; i < 5; i++) {
            p = document.createElement("div");
            p.setAttribute("class", "pic");
            p.style.width = "100px";
            p.style.height = "100px";
            p.style.display = "inline-block";
            p.style.marginInlineStart = "10px";
            p.style.border = "inset";
            newpic = ["", "", "", "", ""];
            document.getElementById("sho").appendChild(p);
        }
    }
    else if (event.target.value == 2) {
        w = 2;
        for (var i = 0; i < 7; i++) {
            p = document.createElement("div");
            p.setAttribute("class", "pic");
            p.style.width = "100px";
            p.style.height = "100px";
            p.style.display = "inline-block";
            p.style.marginInlineStart = "10px";
            p.style.border = "inset";
            newpic = ["", "", "", "", "", "", ""];
            document.getElementById("sho").appendChild(p);
        }
    }
    str.addEventListener("click", start);
}
arr2 = document.getElementsByClassName("pic");
mark = 0;
ii = 0;
//בדיקה של המשחק ----
function direction() {
    if (!flag) {
        for (var j = 0; j < arr2.length; j++) {
            arr2[j].style.backgroundImage = "";
        }
    }
    if (event.which == 37) {
        left.style.border = "inset";
        l1 = setTimeout(sl, 300);
        arr2[ii].style.backgroundImage = "url('אננס.jpg')";
    }
    if (event.which == 38) {
        up.style.border = "inset";
        u1 = setTimeout(su, 300);
        arr2[ii].style.backgroundImage = "url('תות.jpg')";
    }
    if (event.which == 39) {
        right.style.border = "inset";
        r1 = setTimeout(sr, 300);
        arr2[ii].style.backgroundImage = "url('אבטיח.jpg')";
    }
    if (event.which == 40) {
        down.style.border = "inset";
        d1 = setTimeout(sd, 300);
        arr2[ii].style.backgroundImage = "url('אגס.jpg')";
    }
}
//התחלת המשחק
function start() {
    ii = 0;
    flag = true;
    str.removeEventListener("click", start);
    myTime = 3;
    s2 = setInterval(showTime, 1000);// מפעיל כל כמה שניות
}
//להראות ספירה לאחור לפני שהמשחק מתחיל
function showTime() {
    if (myTime > 0) {
        myTime--;
        document.getElementById("time").innerHTML = myTime + 1;
    }
    else if (myTime == 0) {
        myTime--;
        document.getElementById("time").innerHTML = "Go";
    }
    else if (myTime == -1) {
        showPicture();
        move()
        document.getElementById("time").innerHTML = "";
    }

}
// להראות את התמונות למס שניות
function showPicture() {
    btn.removeEventListener("keyup", direction);
    clearTimeout(s7);
    clearTimeout(s8);
    clearInterval(s2);
    document.getElementById("time").style.backgroundImage = "";
    ii = 0;
    console.log(ii);

    //מגריל מס כדי לקחת תמונה מוגרלת
    for (var i = 0; i < arr2.length; i++) {
        rand = Math.floor(Math.random() * pictures.length);
        arr2[i].style.backgroundImage = "";
        arr2[i].style.backgroundImage = "url(" + pictures[rand] + ")";
        newpic[i] = pictures[rand]; 
    }
    ss = setTimeout(stopShow, (arr[w].value * 1000));
}
function stopShow() {
    clearTimeout(ss);
    for (var i = 0; i < arr2.length; i++) {
        arr2[i].style.backgroundImage = "";
    }
    //האזנה להקלדה
    btn.addEventListener("keyup", direction);

}
function stopMe() {
   
    btn.removeEventListener("keyup", direction);
    document.getElementById("sho").innerHTML = "המשחק נגמר!!! צברת " + mark + " נקודות ";
    document.getElementById("time").style.backgroundImage = "";
    mark = 0;
    //זה שולח לפונקציה שתנקה את המסך
    d = setTimeout(clean, 3 * 1000);
}
function clean() {
    //היא הפונקציה שמנקה
    clearTimeout(d);
    document.getElementById("arrow").innerHTML = "";
    document.getElementById("sho").innerHTML = "";
    document.getElementById("zirzman").innerHTML = "";

}
//תשובה שגויה
function x() {
    flag = false;
    console.log("i"+ii);
    if (mark > 0)
        mark -= 5;
    document.getElementById("time").style.backgroundImage = "url('th.png')";
    s7 = setTimeout(showPicture, 700);
   
}
//תשובה נכונה
function v() {
    flag = true;
    console.log("i"+ii);
    if (ii == arr2.length - 1) {
        mark += (5 * (arr2.length));
        document.getElementById("time").style.backgroundImage = "url('sd.png')";
        s8 = setTimeout(showPicture, 800);
    }
    ii++;
}
function sr() {
    right.style.border = "thick";
    if (newpic[ii] == "אבטיח.jpg") {
        v();
    }
    else {
        x();
    }
}
function sl() {
    left.style.border = "thick";
    if (newpic[ii] == "אננס.jpg") {
        v();
    }
    else {
        x();
    }
}
function su() {
    up.style.border = "thick";
    if (newpic[ii] == "תות.jpg") {
        v();
    }
    else {
        x();
    }
}
function sd() {
    down.style.border = "thick";
    if (newpic[ii] == "אגס.jpg") {
        v();
    }
    else {
        x();
    }
}
var ff = 0;
function move() {
    if (ff == 0) {
        ff = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 500);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                stopMe()
                ff = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}

