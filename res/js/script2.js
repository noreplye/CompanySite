var slideIndex=1;
showSlides(slideIndex);
function plussSlides(n){
    showSlides(slideIndex += n);
}
function showSlides(n){
    var i;
    var slides2 = document.getElementsByClassName("mySlides2");//присвиваем значение получаемые элементы из класса майслайдс2

    if (n > slides2.length){
        slideIndex = 1
    }
    if (n<1){
        slideIndex = slides2.length
    }
    for(i = 0; i < slides2.length; i++){
        slides2[i].style.display = "none";
    }
    slides2[slideIndex-1].style.display = "block";
    
}