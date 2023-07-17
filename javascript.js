



document.querySelector(".hamburger").addEventListener("click",function(){
    document.querySelector(".hamburger-menu").classList.toggle("active");
    console.log("hello");
})

hamburger.addEventListener("click",function(){
    console.log('button click')
})



const modes = document.getElementById('darkmode');
const container = document.getElementById('ssssss');
const trybutton = document.getElementById('triangle');
const middleheading = document.getElementById('cards-main-heading');
const learnbutton = document.getElementById('learn');
const cardtext1= document.getElementById('card-text1');
const cardtext2= document.getElementById('card-text2');
const cardtext3= document.getElementById('card-text3');



modes.addEventListener("click" , function(){
    this.classList.toggle('bi-moon')

    // container.classList.toggle.add("dark")
    if(this.classList.toggle('bi-brightness-high-fill')){
        container.style.background='#303030';
        trybutton.style.background='#3F4750';
        learnbutton.style.background='#444444';
        middleheading.style.color='white';
        cardtext1.style.color='white';
        cardtext2.style.color='white';
        cardtext3.style.color='white';

    }else{
        container.style.background='white';
        trybutton.style.background='white';
        middleheading.style.color='black';
        learnbutton.style.background='white';
        cardtext1.style.color='black';
        cardtext2.style.color='black';
        cardtext3.style.color='black';
    }
    

    
})

toggle.addEventListener("click" , function(){
   console.log('color changed')
    
})



