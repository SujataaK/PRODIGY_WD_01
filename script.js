function changeColor(element){
    element.style.color = 'red';
}

function resetColor(element){
    element.style.color = '';
}

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrollTop = document.documentElement.scrollTop;

    var scrollThreshold = 50; 

    if (scrollTop > scrollThreshold) {
        navbar.style.backgroundColor = 'black'; 
    } else {
        navbar.style.backgroundColor = ''; 
    }
});