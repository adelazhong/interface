/************ piano.js ***********/
var f = 0, t = 1;
var toneDom = {};
var x;
var n = 0, timer=null;
var u =0;
var oTxt=document.getElementById('timer_show');
var ou=document.getElementById('number_key');
function play(tone){
    

    for (var i=4;i<=9;i++)
      for (var j=2;j<=3;j++) {
        x = document.getElementById('audio' + i +''+ j);
        x.pause();
        x.currentTime = 0;
    }
    for (var i=1;i<=10;i++) {
        x = document.getElementById('audio' + i +'1');
        x.pause();
        x.currentTime = 0;
    }
    

    if(!toneDom[tone]){
        toneDom[tone] = document.getElementById('audio' + tone);
    }
    toneDom[tone].currentTime = 0;
    toneDom[tone].play();

}


var focusButtion = document.getElementById('focusButtion');
console.log(1);

//补零
function toDub(n){
    return n<10?"0"+n:""+n;
}

focusButtion.onclick = function (e) {
    clearInterval(timer);
    timer=setInterval(function () {
            n++;
            var m=parseInt(n/60);
            var s=parseInt(n%60);
            oTxt.value=toDub(m)+":"+toDub(s);
    },1000/60);
}

focusButtion.onkeyup = function(e){
    u++;
    console.log(u);
    ou.value = u
    var event = e || window.event;
    console.log(event.keyCode);
    switch(event.keyCode){
    case 38:
        if (f>1) {f--; play(f+''+t);}
        console.log(f,t);
        break;
    case 40: 
        if (f<10) {f++;play(f+''+t)}        
        console.log(f+''+t);
        break;
    case 39:
        if (f>=4 && f<=9 && t<3) {t++; play(f+''+t);}
        console.log(f,t);
        break;
    case 37:
        if (t>1) {t--; play(f+''+t);}
        console.log(f,t);
        break;
    }
};

var SameButton = document.getElementById('same');
var DifferentButton = document.getElementById('different');
var Answer = document.getElementById('answer');
var Imgl = document.getElementById('imgl');

SameButton.onclick = function (e) {
    clearInterval(timer);
    Answer.innerHTML = 'The same';
    Imgl.style.display = "block";
}

DifferentButton.onclick = function (e) {
    clearInterval(timer);
    Answer.innerHTML = 'Different';
    Imgl.style.display = "block";

}
