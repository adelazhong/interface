/************ piano.js ***********/
var f = 0, t = 1;
var toneDom = {};
var x;
function play(tone){
    for (var i=4;i<=6;i++)
      for (var j=2;j<=4;j++) {
        x = document.getElementById('audio' + i +''+ j);
        x.pause();
        x.currentTime = 0;
    }
    for (var i=1;i<=7;i++) {
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
function getKeyCode(e){
    var event = e || window.event;
    console.log(event.keyCode);
    switch(event.keyCode){
    case 38:
        if (f>1) {f--; play(f+''+t);}
        console.log(f,t);
        break;
    case 40: 
        if (f<7) {f++;play(f+''+t)}        
        console.log(f+''+t);
        break;
    case 39:
        if (f>=4 && f<=6 && t<4) {t++; play(f+''+t);}
        console.log(f,t);
        break;
    case 37:
        if (t>1) {t--; play(f+''+t);}
        console.log(f,t);
        break;
    }
};
document.onkeydown=getKeyCode;