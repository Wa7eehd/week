let menu = document.getElementById('menu');
let x = document.getElementById('x');
let ul2 =document.querySelector('.ul2')
let message = document.querySelector('.message')


function timeout(){
    setTimeout(() => {
        message.style.transform='translateX(0px)';
        message.style. opacity = '1';
      
    },300); 

}



menu.onclick = function(){
ul2.classList.add('active')
}
x.onclick = function(){
ul2.classList.remove('active')
}

