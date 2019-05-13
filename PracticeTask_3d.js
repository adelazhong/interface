/************ piano.js ***********/
var f = 0, t = 1;
var toneDom = {};
var x,y,z;
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
document.getElementById('focusButtion').addEventListener('click', function () {
    y = document.getElementById('instruction');
    y.innerHTML = "Step 2: Please press the play button and then use Up, Down, Left and Right key to control the audios of tasks.";
  
    z = document.getElementById('Cursor');
    z.innerHTML = "Cursor: A1";
},true);
     
var focusButtion = document.getElementById('focusButtion');
focusButtion.onkeyup = function(e){
    
    var event = e || window.event;
    console.log(event.keyCode);
    switch(event.keyCode){
    case 38:
        if (f>1) {f--; play(f+''+t);
        z = document.getElementById('Cursor');
        z.innerHTML = "Cursor: "+String.fromCharCode(t+64)+f;}
        console.log(f,t);
        break;
    case 40: 
        if (f<10) {f++;play(f+''+t);
        z = document.getElementById('Cursor');
        z.innerHTML = "Cursor: "+String.fromCharCode(t+64)+f;}        
        console.log(f+''+t);
        break;
    case 39:
        if (f>=4 && f<=9 && t<3) {t++; play(f+''+t);
        z = document.getElementById('Cursor');
        z.innerHTML = "Cursor: "+String.fromCharCode(t+64)+f;}
        console.log(f,t);
        break;
    case 37:
        if (t>1) {t--; play(f+''+t);
        z = document.getElementById('Cursor');
        z.innerHTML = "Cursor: "+String.fromCharCode(t+64)+f;}
        console.log(f,t);
        break;
    }
};