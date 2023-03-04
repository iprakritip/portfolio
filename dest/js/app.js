
var star = document.getElementById('star');
var starAnimations = ['starFall 2s forwards','starFall2 2s forwards','starFall3 2s forwards','starFall4 2s forwards'];

setInterval(function(){
    star.style.animation=starAnimations[Math.floor(Math.random()*4)];

},5000);

star.addEventListener('animationend',function(){
    star.style.animation='none';
});

