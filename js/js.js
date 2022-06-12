let rArrow = document.querySelector(".fa-circle-arrow-right");
let lArrow = document.querySelector(".fa-circle-arrow-left");
let imgs = document.querySelectorAll(".img");
let imgsDiv = document.querySelector(".imagesdiv");
let bulletKeysDiv = document.querySelector(".bulletKeysDiv");
let bulletKeys = document.querySelectorAll(".bulletKey");
let counter = 1
let currentpos =0;
let width = imgs[0].clientWidth;


imgsDiv.style.transform = `translateX(${-width}px)`;
bulletKeys[0].style.backgroundColor = "rgba(255, 255, 255, 0.986)"

rArrow.addEventListener("click", ()=>{
    if(counter==1){
        bulletKeys[1].style.backgroundColor = "rgba(255, 255, 255, 0.986)"
        bulletKeys[0].style.backgroundColor = "rgb(173, 173, 173)"
        bulletKeys[2].style.backgroundColor = "rgb(173, 173, 173)"
        
    }else if(counter ==2){
        bulletKeys[2].style.backgroundColor ="rgba(255, 255, 255, 0.986)"
        bulletKeys[0].style.backgroundColor = "rgb(173, 173, 173)"
        bulletKeys[1].style.backgroundColor = "rgb(173, 173, 173)"

    }else if(counter ==3){
        bulletKeys[0].style.backgroundColor = "rgba(255, 255, 255, 0.986)"
        bulletKeys[1].style.backgroundColor = "rgb(173, 173, 173)"
        bulletKeys[2].style.backgroundColor = "rgb(173, 173, 173)"
    }
    counter++;
    if(counter == 5){
        counter =1
    }else{
        imgsDiv.style.transform = `translateX(${(-width * counter)}px)`
        currentpos = (-width * counter)
        imgsDiv.style.transition = `all .7s ease-in-out`
    }
    
})

lArrow.addEventListener("click",()=>{
    counter--;
    if(counter==-1){
        counter=1
    }else{
        if(counter==1){
            bulletKeys[0].style.backgroundColor = "rgba(255, 255, 255, 0.986)"
            bulletKeys[2].style.backgroundColor = "rgb(173, 173, 173)"
            bulletKeys[1].style.backgroundColor = "rgb(173, 173, 173)"
            
        }else if(counter ==2){
            bulletKeys[1].style.backgroundColor ="rgba(255, 255, 255, 0.986)"
            bulletKeys[0].style.backgroundColor = "rgb(173, 173, 173)"
            bulletKeys[2].style.backgroundColor = "rgb(173, 173, 173)"
    
        }else if(counter ==3){
            bulletKeys[2].style.backgroundColor = "rgba(255, 255, 255, 0.986)"
            bulletKeys[1].style.backgroundColor = "rgb(173, 173, 173)"
            bulletKeys[0].style.backgroundColor = "rgb(173, 173, 173)"
        }
        if(counter==0){
            imgsDiv.style.transition = `all .7s ease-in-out`
            imgsDiv.style.transform = `translateX(0px)`
            bulletKeys[2].style.backgroundColor = "rgba(255, 255, 255, 0.986)"
            bulletKeys[1].style.backgroundColor = "rgb(173, 173, 173)"
            bulletKeys[0].style.backgroundColor = "rgb(173, 173, 173)"
        }else{
            imgsDiv.style.transition = `all .7s ease-in-out`
            imgsDiv.style.transform = `translateX(${currentpos + width}px)`
            currentpos = currentpos + width
        }

    }
    
})

imgsDiv.addEventListener("transitionend",()=>{
    if(counter == 4){
        counter = 1
        imgsDiv.style.transition = `none`;
        imgsDiv.style.transform = `translateX(${-width}px)`;
        currentpos = -width
        bulletKeys[0].style.backgroundColor = "rgba(255, 255, 255, 0.986)"
        bulletKeys[1].style.backgroundColor = "rgb(173, 173, 173)"
        bulletKeys[2].style.backgroundColor = "rgb(173, 173, 173)"
    }else{ 
    }
    if(counter ==0){
        counter =imgs.length-2
        imgsDiv.style.transition = `none`;
        imgsDiv.style.transform = `translateX(${(-width * counter)}px)`
        currentpos = -width * counter
        bulletKeys[2].style.backgroundColor = "rgba(255, 255, 255, 0.986)"
        bulletKeys[1].style.backgroundColor = "rgb(173, 173, 173)"
        bulletKeys[0].style.backgroundColor = "rgb(173, 173, 173)"
    }
})


for(let i=0;i<bulletKeys.length;i++){
    bulletKeys[i].addEventListener("click",()=>{
        if(i == 0){
        counter=1
        imgsDiv.style.transition = `all .7s ease-in-out`
        imgsDiv.style.transform = `translateX(${(-width * counter)}px)`
        currentpos = (-width * counter)
        bulletKeys[0].style.backgroundColor = "rgba(255, 255, 255, 0.986)"
        bulletKeys[1].style.backgroundColor = "rgb(173, 173, 173)"
        bulletKeys[2].style.backgroundColor = "rgb(173, 173, 173)"
        }else if(i==1){
        counter = 2
        imgsDiv.style.transition = `all .7s ease-in-out`
        imgsDiv.style.transform = `translateX(${(-width * counter)}px)`
        currentpos = (-width * counter)
        bulletKeys[1].style.backgroundColor ="rgba(255, 255, 255, 0.986)"
        bulletKeys[2].style.backgroundColor = "rgb(173, 173, 173)"
        bulletKeys[0].style.backgroundColor = "rgb(173, 173, 173)"
        }else if(i==2){
        imgsDiv.style.transition = `all .7s ease-in-out`
        counter =3
        imgsDiv.style.transform = `translateX(${(-width * counter)}px)`
        currentpos = (-width * counter)
        bulletKeys[2].style.backgroundColor = "rgba(255, 255, 255, 0.986)"
        bulletKeys[0].style.backgroundColor = "rgb(173, 173, 173)"
        bulletKeys[1].style.backgroundColor = "rgb(173, 173, 173)"
    }else{
        counter=1
        imgsDiv.style.transition = `all .7s ease-in-out`
        imgsDiv.style.transform = `translateX(${(-width * counter)}px)`
        currentpos = (-width * counter)
        bulletKeys[0].style.backgroundColor = "rgba(255, 255, 255, 0.986)"
        bulletKeys[1].style.backgroundColor = "rgb(173, 173, 173)"
        bulletKeys[2].style.backgroundColor = "rgb(173, 173, 173)"
    }
    })

}
