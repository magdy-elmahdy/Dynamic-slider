var imgs = Array.from(document.getElementsByClassName(" img-item"))
var lightBoxContainer =document.getElementById("lightBoxContainer")
var lightBoxItem = document.getElementById("lightBoxItem");

var prev= document.getElementById("prev");
var next= document.getElementById("next");
var closeIcon= document.getElementById("close");
var currentIndex = 0;



for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click" , openLightBox)    
}

function openLightBox(eventInfo){

    currentIndex = imgs.indexOf(eventInfo.target);//0-5

    var imgSrc=eventInfo.target.src
    lightBoxContainer.style.display="flex"
    lightBoxItem.style.backgroundImage=`url(${imgSrc})`
}


closeIcon.addEventListener("click", closeSlide)
function closeSlide(){
    lightBoxContainer.style.display="none"
}
        // Previos Slide
prev.addEventListener("click" ,prevSlide)
function prevSlide(){
    currentIndex--
    if(currentIndex ==-1){
     currentIndex=5
    }
    var imgSrc = imgs[currentIndex].src;
    lightBoxItem.style.backgroundImage=`url(${imgSrc})`
}
        // Next Slide
next.addEventListener("click" ,nextSlide)
function nextSlide(){
    currentIndex++
    if(currentIndex ==6){
     currentIndex=0
    }
    var imgSrc = imgs[currentIndex].src;
    lightBoxItem.style.backgroundImage=`url(${imgSrc})`
}

//     Control by KeyBoard
document.addEventListener("keydown",(e)=>{
    if(e.keyCode ==39){
        nextSlide()
    }
    else if(e.keyCode ==37){
        prevSlide()
    }
    else if(e.keyCode ==27){
        closeSlide()
    }
})
