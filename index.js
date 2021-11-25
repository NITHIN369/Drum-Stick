/*document.querySelectorAll('button')[0].addEventListener('click',function (){
    var a=new Audio('sounds/crash.mp3');
    a.play();
});
document.querySelectorAll('button')[1].addEventListener('click',function(){
    var a=new Audio('sounds/kick-bass.mp3');
    a.play();
});

document.querySelectorAll('button')[2].addEventListener('click',function(){
    var a=new Audio('sounds/snare.mp3');
    a.play();
});
document.querySelectorAll('button')[3].addEventListener('click',function(){
    var a=new Audio('sounds/tom-1.mp3');
    a.play();
});
document.querySelectorAll('button')[4].addEventListener('click',function(){
    var a=new Audio('sounds/tom-2.mp3');
    a.play();
});
document.querySelectorAll('button')[5].addEventListener('click',function(){
    var a=new Audio('sounds/tom-3.mp3');
    a.play();
});
document.querySelectorAll('button')[6].addEventListener('click',function(){
    var a=new Audio('sounds/tom-4.mp3');
    a.play();
});*/
function ch(z){
    switch(z){
        case 'w':
            var a=new Audio('sounds/crash.mp3');
            a.play();
            break;
        case 'a':
            var a=new Audio('sounds/kick-bass.mp3');
            a.play();
            break;
        case 's':
            var a=new Audio('sounds/snare.mp3');
            a.play();
            break;
        case 'd':
            var a=new Audio('sounds/tom-1.mp3');
            a.play();
            break;
        case 'j':
            var a=new Audio('sounds/tom-2.mp3');
            a.play();
            break;
        case 'k':
            var a=new Audio('sounds/tom-3.mp3');
            a.play();
            break;
        case 'l':
            var a=new Audio('sounds/tom-4.mp3');
            a.play();
            break;
    }
}
for(var i=0;i<document.querySelectorAll('button').length;i++){
    document.querySelectorAll('button')[i].addEventListener('click',function (){
        ch(this.innerHTML);
    });
}

var t=document.addEventListener('keypress',function (event) {
    ch(event.key);
});