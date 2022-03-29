c1=localStorage.getItem("i1").value;
c2=localStorage.getItem("i2").value;
pn1=c1
pn2=c2

function send(){
    n1=document.getElementById("c1").value;
    n2=document.getElementById("c2").value;
actual_answer= parseInt(n1)*parseInt(n2);

}

qn="<h4>"+n1+"X"+n2+"</h4>";
ib="<br>Answer: <input type='text' id='icb'>";
cb="<br><br><button class='btn btn-info' onclick='check()'>CHECK</button>"
row=qn+ib+cb;
document.getElementById("output").innerHTML=row;
document.getElementById("n1").value="";
document.getElementById("n2").value="";

s1=0;
s2=0;




document.getElementById("pn1").innerHTML=c1+":";
document.getElementById("pn2").innerHTML=c2+":";
document.getElementById("ps1").innerHTML=s1;
document.getElementById("ps2").innerHTML=s2;
document.getElementById("pq").innerHTML="QUESTION TURN-"+c1;
document.getElementById("pa").innerHTML="ANSWER TURN-"+c2;

function send(){
    
    inpu="<br>Answer: <input type='text' id='i9'>";
    b="<br> <button class='btn btn-success' onclick='check()'>CHECK</button>";
    ro=inpu+b;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";


}
qt="player1"
at="player2"
function check(){
ga=document.getElementById("i9").value;

    if(answer==i1*i2){
if (at=="player1"){
s1=s1+1;
document.getElementById("player1_score").innerHTML=s1;
}
else{
    s2=s2+1;
document.getElementById("player2_score").innerHTML=s2;
}
    }
    if(at=="player1"){
        at="player2";
        document.getElementById("pq").innerHTML="Answer Turn:"+at;
    }
    else{
at="player1"
document.getElementById("pq").innerHTML="Answer Turn:"+at;
    }
    if(qt=="player1"){
        qt="player2";
        document.getElementById("pq").innerHTML="Question Turn:"+qt;
    }
    else{
qt="player1"
document.getElementById("pq").innerHTML="Question Turn:"+qt;
    }

}