/*function check(){
var m=document.getElementById("t");
if(m.value.length<5)
{
	this.style.borderColor="yellow";
	
}
	
}
var e=document.getElementById("k");
e.addEventListener('blur',check,false);


function s(){
	this.className="t";
	
}
function t(){
	this.innerHTML="hellow";
	
}
var e=document.getElementsByTagName("ul")[0];
e.addEventListener('mouseup',s,t,false);*/

var c=document.getElementById("check");
c.addEventListener("click",meme,true);
var k=document.getElementById("re");
k.addEventListener("click",change,true);
var d=document.getElementById("show");
d.addEventListener("click",show,true);
function meme(){
var s=document.getElementById("m").value;
var el=document.getElementById("t");
el.innerHTML=s;
d.innerHTML="Awesome isn't it";
}
function change(){
var el=document.getElementById("t");
el.innerHTML="Make a meme";
d.innerHTML="Change this meme"
}
function show(){
	var fo=document.getElementById("form");
	fo.style.display="block";
	
}
