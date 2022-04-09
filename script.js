var i = 0;
do {
    document
        .getElementById("container")
        .appendChild(document.createElement("div"));
    i = i + 1;
} while (i < 100);

var j = 0;
do {
    document.getElementById("x_axis").appendChild(document.createElement("h3"));
    var x_id = "x_label";
    document.getElementById("x_axis").getElementsByTagName("h3")[j].id = x_id + j;
    document
        .getElementById("x_axis")
        .getElementsByTagName("h3")
    [j].classList.add("x_label");
    document.getElementById(x_id + j).innerText = j;
    document.getElementById("x_axis").getElementsByTagName("h3")[j].style.left =
        -0.3 + j * 3 + "vw";
    j = j + 1;
} while (j < 11);

var k = 0;
do {
    document.getElementById("y_axis").appendChild(document.createElement("h3"));
    var y_id = "y_label";
    document.getElementById("y_axis").getElementsByTagName("h3")[k].id = y_id + k;
    document
        .getElementById("y_axis")
        .getElementsByTagName("h3")
    [k].classList.add("y_label");
    document.getElementById(y_id + k).innerText = k;
    document.getElementById("y_axis").getElementsByTagName("h3")[k].style.bottom =
        -1 + k * 3 + "vw";
    k = k + 1;
} while (k < 11);

var level = 0;
var q_a = [
    [null, 0, 0],
    ["<h2>The submarine has lost its way and now it has to reach the coordinates ( 5,8 ). Locate 5,8 . Help the submarine reach there .</h2>", 5, 8],
    ["<h2>The submarine has to know the location of the submarine of Pakistan in the Arabian Sea and now it has to move to the coordinates  (6-2+5),(7-2-3+4).Locate (6-2+5),(7-2-3+4) . Help the subamrine reach there </h2>", 9, 6],
    ["<h2>The submarine has to move to the centre of the ocean and reach the mid point coordinates of the ocean .Then , find the coordinates of the point which divides the line segment joining the points (8,4) and (4,2) into two equal parts .Help the submarine reach the centre .</h2><h3>HINT :- Coordinates of the point => x=(x1+x2)/2 , y=(y1+y2)/2</h3>", 6, 3],
    ["<h2>Find the mirror image of -4,5 along the x-axis.</h2>", 4, 5],
    ["<h2>The submarine has to start its journey to the other end of the sea and it is right now stuck at the origin of the sea . It has to move to 8 units right from the origin . So, find the coordinates of a point which is 8 units right to the origin located on the x axis . Help the submarine reach there </h2>", 8, 0],
    ["<h2>The submarine has again lost its way and now it has to reach some special coordinates . Find those coordinates . Help the submarine . A=(4,3), B=(3,5). Now find the point C if abscissa of C=ordinate of A - abscissa of B and ordinate of C= sum of abscissa of A and ordinate of B.</h3>", 0, 9],
    ["<h2>The points A (2,9) , B (p,5) and C (5,5) are the vertices of a triangle ABC right angled at B. Then find the value of p and locate vertice B.</h2><h3>Hint :- Use Distance formula and Pythogoras theorem or just visualize</h3>", 2, 5],
    ["<h2>The submarine is moving in a triangular path and now it has to move to the centroid of that path  .The  vertices of that triangle are (1,4), (5,2) and (3,6) . Let the coordinates of the centroid be (x,y) , then locate (x,y). Help the submarine reach the centroid.</h2><h3>Hint :- coordinates of the centroid => x = (x1+x2+x3)/3 , y = (y1+y2+y3)/3</h3>", 3, 4],     
    ["<h2>The submarine has now started to move in a square path and now it has to move to a vertice of the path.If A(0,0) , B(x,y),  C (3,3) and D (0,3) taken in order are the vertices of a square. Then locate the vertice B (x,y). Help the submarine reach that vertice.</h2>", 3, 0],
    ["<h2>.The submarine is taking circular rounds of the sea and is moving in a circular path . If the points A(4,3)&B(2,x)  are on that circular path with centre O(2,3)  then find the value of x and locate the point B. Help the submarine locate the point B. </h2>", 2, 5],
];

function give_up() {
    document.getElementById("submarine").classList.add("visible");
    document.getElementById("submarine").classList.remove("hidden");
    document.getElementById("play").style.display = "block";
    document.getElementById("lvl").style.display = "none";
    document.getElementById("give_up").style.display = "none";
    document.getElementById("c_w").style.visibility = "hidden";
    level = 0;
    document.getElementById("submarine").removeEventListener("click", correct);
    document.getElementById("game").removeEventListener("click", wrong);
}

function lvl() {
    document.getElementById("submarine").addEventListener("click", correct);
    document.getElementById("game").addEventListener("click", wrong);
    document.getElementById("submarine").classList.add("hidden");
    document.getElementById("submarine").classList.remove("visible");
    document.getElementById("play").style.display = "none";
    document.getElementById("lvl").style.display = "none";
    document.getElementById("give_up").style.display = "block";
    document.getElementById("c_w").style.visibility = "hidden";
    level = level + 1
    if (level == 11) {
        document.getElementById("ques").innerHTML = "<h2>YOU WIN! CONGRATS!</h2>"
        document.getElementById("play").style.display = "none";
        document.getElementById("lvl").style.display = "none";
        document.getElementById("give_up").style.display = "none";
        document.getElementById("c_w").style.visibility = "hidden";
        document.getElementById("submarine").removeEventListener("click", correct);
        document.getElementById("game").removeEventListener("click", wrong);
    }
    document.getElementById("ques").innerHTML = q_a[level][0];
    document.getElementById("levelnum").innerText = "level: " + level;
    document.getElementById("submarine").style.left =
        q_a[level][1] * 3 - 0.5 + "vw";
    document.getElementById("submarine").style.bottom =
        q_a[level][2] * 3 - 0.5 + "vw";
}

var x1 = 0
var y1 = 0
var x0 = 0
var y0 = 0
var a1 = 0
var a2 = 0
var a3 = 0
var id = null

function correct() {
    document.getElementById("submarine").classList.add("visible");
    document.getElementById("submarine").classList.remove("hidden");
    document.getElementById("play").style.display = "none";
    document.getElementById("lvl").style.display = "block";
    document.getElementById("give_up").style.display = "none";
    document.getElementById("c_w").style.visibility = "visible"
    document.getElementById("c_w").innerText = "correct"
    document.getElementById("c_w").style.color = "forestgreen"
    document.getElementById("submarine").removeEventListener("click", correct);
    document.getElementById("game").removeEventListener("click", wrong);
    x0 = x1
    y0 = y1
    x1 = (q_a[level][1]) * 3 - 0.5
    y1 = (q_a[level][2]) * 3 - 0.5
    console.log(x1, y1)
    clearInterval(id)
    id = setInterval(move, 1)
    a3 = 0
    function move() {
        a1 = (x1 - x0) / 50
        a2 = (y1 - y0) / 50
        if (a3 == 50) {
            clearInterval(id)
        } else {
            a3++
            console.log(a3)
            document.getElementById("subpic").style.bottom = y0 + (a3 * a2) + "vw"
            document.getElementById("subpic").style.left = x0 + (a3 * a1) + "vw"
        }
    }
}

function wrong(event) {
    if (!event.target.matches("#submarine")) {
        document.getElementById("c_w").style.visibility = "visible"
        document.getElementById("c_w").innerText = "wrong, try again"
        document.getElementById("c_w").style.color = "red"
    }
}

function playing() {
    level = 1;
    document.getElementById("ques").innerHTML = q_a[level][0];
    document.getElementById("levelnum").innerText = "level: " + level;
    document.getElementById("submarine").style.left =
        q_a[level][1] * 3 - 0.5 + "vw";
    document.getElementById("submarine").style.bottom =
        q_a[level][2] * 3 - 0.5 + "vw";
    document.getElementById("submarine").classList.add("hidden");
    document.getElementById("submarine").classList.remove("visible");
    document.getElementById("ques").style.display = "block";
    document.getElementById("subpic").style.display = "inline-block";
    document.getElementById("levelnum").style.display = "block";
    document.getElementById("c_w").style.visibility = "hidden"
    document.getElementById("play").style.display = "none";
    document.getElementById("lvl").style.display = "none";
    document.getElementById("give_up").style.display = "block";
    console.log(document.getElementById("give_up").style.display == "block")
    document.getElementById("submarine").addEventListener("click", correct);
    document.getElementById("game").addEventListener("click", wrong);
}

document.getElementById("play").addEventListener("click", playing);
document.getElementById("give_up").addEventListener("click", give_up);
document.getElementById("lvl").addEventListener("click", lvl);
