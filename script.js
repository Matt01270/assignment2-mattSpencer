const track = document.querySelector('.slideshow-track'); 
const slides = Array.from(track.children); 
const nextButton = document.querySelector ('.slideshow-button-right'); 
const previousButton = document.querySelector('.slideshow-button-left'); 
const dotsNav = document.querySelector('.slideshow-nav') 
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => { 
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

const moveToSlide = () => { 
    track.style.transform = 'translateX(-' + nextSlide.style.left + ')'; 
    currentSlide.classList.remove('current-slide'); 
    nextSlide.classList.add('current-slide');
}
 
//when I click right, move slides to the right  
nextButton.addEventListener('click', e => { 
    const currentSlide = track.querySelector('.current-slide'); 
    const nextSlide = currentSlide.nextElementSibling;  
    const amountToMove = nextSlide.style.left; 
    track.style.transform = 'translateX(-' + amountToMove + ')'; 
    currentSlide.classList.remove('current-slide'); 
    nextSlide.classList.add('current-slide');
}); 




 


     

    
    

