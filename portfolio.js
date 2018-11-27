var text = new Array();
text[0] = "작성중.";
text[1] = "작성중..";
text[2] = "작성중...";
var interval = 1000;
var n = 0;
window.onload = function(){
	rotate();
}

function rotate(){
	document.querySelector('#portfolioText').innerHTML=text[n%3];
	n++;
	setTimeout("rotate()",interval);
}