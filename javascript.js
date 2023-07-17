



document.querySelector(".hamburger").addEventListener("click",function(){
    document.querySelector(".hamburger-menu").classList.toggle("active");
    console.log("hello");
})

hamburger.addEventListener("click",function(){
    console.log('button click')
})



const modes = document.getElementById('darkmode');
const container = document.querySelector('middle-container');



modes.addEventListener("click" , function(){
    this.classList.toggle('bi-moon')
    container.classList.toggle.add("dark")
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background='white';
   
    }else{
        body.style.background='#303030';
    }
    

    
})

toggle.addEventListener("click" , function(){
   console.log('color changed')
    
})



