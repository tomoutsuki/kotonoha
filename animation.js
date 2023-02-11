let targets = document.querySelectorAll(".fadeUp");
console.log(targets);
window.addEventListener('scroll', function () {
    var scroll = window.scrollY;
    var windowHeight = window.innerHeight;
    for (let target of targets) {
        var targetPos = target.getBoundingClientRect().top + scroll;
        
        if (scroll > targetPos - windowHeight) {
            target.classList.add('is-animated');
        }
    }
});