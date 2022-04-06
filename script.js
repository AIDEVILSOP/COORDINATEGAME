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
    ["locate 5,8", 5, 8],
    ["Find the coordinates of the point which divides the line segment joining the points (8,4) and (4,2) into two equal parts.", 6,3],
    ["Find the coordinates of a point which is 8 units right to the origin located on the x axis",8,0],
    ["Find the coordinates of the point which divides the line segment joining the points (5,2) and (5,6) in the ratio 3:1 internally" , 5, 5],
    ["Find a point on the y axis which is equidistant from the points p(6,5) and q(-4,3)" , 0, 9],
    ["The  vertices of a triangle are (1,4), (5,2) and (3,6) . Let the coordinates of the centroid be (x,y) , then locate (x,y)" , 3, 4],
    [" Let the ratio in which the line 2x+y-4=0 divides the line segment joining the points A(2,-2) and B (3,7) be p:q then locate (p,q)." , 2, 9],
    ["If A(3,0) , B(x,y),  C (-1,4) and D (-2,-1) taken in order are the vertices of a rhombus. Then locate the vertice B (x,y)." , 4, 5],
    ["The points A (2,9) , B (p,5) and C (5,5) are the vertices of a triangle ABC right angled at B. Then find the value of p and locate vertice B." ,2,5],
    ["If the points A(4,3)&B(x,5)  are on the circle with centre O(2,3)  then find the value of x and locate the point B " , 2, 5],
    ["If orthocentre of a triangle is (6,3) and centroid is (2,5) then find the circumcentre of the triangle" , 0, 6],
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
    document.getElementById("submarine").classList.add("hidden");
    document.getElementById("submarine").classList.remove("visible");
    document.getElementById("play").style.display = "none";
    document.getElementById("lvl").style.display = "none";
    document.getElementById("give_up").style.display = "block";
    document.getElementById("c_w").style.visibility = "hidden";
    level = level+1
    if (level==12){
        document.getElementById("ques").innerText = "YOU WIN! CONGRATS!"
        document.getElementById("play").style.display = "none";
        document.getElementById("lvl").style.display = "none";
        document.getElementById("give_up").style.display = "none";
        document.getElementById("c_w").style.visibility = "hidden";
    }
    document.getElementById("ques").innerText = q_a[level][0];
    document.getElementById("levelnum").innerText = "level: " + level;
    document.getElementById("submarine").style.left =
    q_a[level][1] * 3 - 0.5 + "vw";
    document.getElementById("submarine").style.bottom =
    q_a[level][2] * 3 - 0.5 + "vw";
}

function correct() {
    document.getElementById("submarine").classList.add("visible");
    document.getElementById("submarine").classList.remove("hidden");
    document.getElementById("play").style.display = "none";
    document.getElementById("lvl").style.display = "block";
    document.getElementById("give_up").style.display = "none";
    document.getElementById("c_w").style.visibility="visible"
    document.getElementById("c_w").innerText = "correct"
    document.getElementById("c_w").style.color = "forestgreen"
}

function wrong(event) {
    if (!event.target.matches("#submarine")) {
        document.getElementById("c_w").style.visibility="visible"
        document.getElementById("c_w").innerText = "wrong, try again"
        document.getElementById("c_w").style.color = "red"
    }
}

function playing() {
    level = 1;
    document.getElementById("ques").innerText = q_a[level][0];
    document.getElementById("levelnum").innerText = "level: " + level;
    document.getElementById("submarine").style.left =
        q_a[level][1] * 3 - 0.5 + "vw";
    document.getElementById("submarine").style.bottom =
        q_a[level][2] * 3 - 0.5 + "vw";
    document.getElementById("submarine").classList.add("hidden");
    document.getElementById("submarine").classList.remove("visible");
    document.getElementById("ques").style.display = "block";
    document.getElementById("levelnum").style.display = "block";
    document.getElementById("c_w").style.visibility="hidden"
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

