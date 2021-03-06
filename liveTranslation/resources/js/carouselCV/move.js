function moveCV(){
    var inputs = document.getElementsByClassName('detailsForm');
    var nextButton = document.getElementsByClassName('nextButton');
    var prevButton = document.getElementsByClassName('prevButton');
    var switchSection = document.getElementsByClassName('switchSection');

    inputs[config.currentCarousel].style.display="block";

    for(let i = 0; i < nextButton.length; i++){
        nextButton[i].addEventListener('click', function(){
            if(config.currentCarousel < inputs.length-1){
                config.prevCarousel = config.currentCarousel;
                config.currentCarousel++;

                inputs[config.prevCarousel].style.display="none";
                inputs[config.currentCarousel].style.display="block";

                switchSection[config.prevCarousel].classList.remove('active');
                switchSection[config.currentCarousel].classList.add('active');
            }
            console.log(config.currentCarousel);
        })
    }
    
    
    for(let j = 0; j < prevButton.length; j++){
        prevButton[j].addEventListener('click', function(){
            if(config.currentCarousel > 0){
                config.prevCarousel = config.currentCarousel;
                config.currentCarousel--;
                inputs[config.prevCarousel].style.display="none";
                inputs[config.currentCarousel].style.display="block";
                
                switchSection[config.prevCarousel].classList.remove('active');
                switchSection[config.currentCarousel].classList.add('active');
            }
            console.log(config.currentCarousel);
        })
    }    

   
    
}
moveCV();