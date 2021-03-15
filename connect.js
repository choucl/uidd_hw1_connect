var theme1top = 100;
var theme2top = 1250;

console.log(theme1top);
document.getElementById('sign-up-btn').onclick = function () {
    scrollTo(document.documentElement, theme1top, 1250);   
}

document.getElementById('scroll-down-btn').onclick = function(){
    scrollTo(document.documentElement, theme2top, 1250);
}
    
function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;
        
    var animateScroll = function(){        
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
};

// $('.transition-button').hover
//   .transition('jiggle')
// ;

$(document).ready(function() {
    $('.transition-button').hover(function(){
        $(this).transition('jiggle');
    }, function(){});
});