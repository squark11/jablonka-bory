ScrollReveal({
    reset:false,
    distance: '60px',
    duration:1500,
    delay: 200
});

var slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: 0.5
};
var slideDown = {
    distance: '150%',
    origin: 'top',
    opacity: 0
};

var slideLeft = {
    distance: '550%',
    origin: 'left',
    opacity: 0.5
};
var slideRight = {
    distance: '550%',
    origin: 'right',
    opacity: 0.5
};



$(".option").click(function(){
    $(".option").removeClass("active");
    $(this).addClass("active");
 });

 

ScrollReveal().reveal('.slide-up', slideUp);
ScrollReveal().reveal('.slide-down', slideDown);
ScrollReveal().reveal('.slide-left', slideLeft);
ScrollReveal().reveal('.slide-right', slideRight);