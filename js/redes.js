var pegajoso = document.getElementById('pegajoso');
var altura = pegajoso.offsetTop;
window.addEventListener('scroll', function(){
    if(window.pageYOffset > altura) {
        pegajoso.classList.add('pegajoso-fixed');
    } else {
        pegajoso.classList.remove('pegajoso-fixed')
    }
});