/************ piano.js ***********/
var f = 0;
var toneDom = {};
function play(tone){
    for (var i=1;i<=16;i++) {
        toneDom[i] = document.getElementById('audio' + i);
        toneDom[i].pause();
        toneDom[i].currentTime = 0;
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
        if (f>1) {f--; play(f);}
        console.log(f);
        break;
    case 40: 
        if (f<16) {f++; play(f);}        
        console.log(f);
        break;
    
    }
};
document.onkeydown=getKeyCode;