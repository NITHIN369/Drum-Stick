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
        animationForButton(this.innerHTML);
    });
}

var t=document.addEventListener('keypress',function (event) {
    ch(event.key);
    animationForButton(event.key);
});
function animationForButton(btn){
    document.querySelector('.'+btn).classList.add('pressed');
    setTimeout(function (){
        document.querySelector('.'+btn).classList.remove('pressed');},200);
}
