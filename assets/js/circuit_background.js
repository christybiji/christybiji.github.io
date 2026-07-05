function animateCircuitBackground() {
    var paths = document.querySelectorAll('#circuit-background .st0, #circuit-background .st1');

    [].forEach.call(paths, function(path) {
        var length = path.getTotalLength();

        path.style.transition = path.style.WebkitTransition = 'none';
        path.style.strokeDasharray = length + ' ' + length;
        path.style.strokeDashoffset = length;
        path.getBoundingClientRect();
        path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 5s ease-in-out';
        path.style.strokeDashoffset = '0';
    });
}

document.addEventListener('DOMContentLoaded', function() {
    if (!document.getElementById('circuit-background')) {
        return;
    }

    animateCircuitBackground();
    setInterval(animateCircuitBackground, 6000);
});
