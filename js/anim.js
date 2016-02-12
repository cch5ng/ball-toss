//js/anim.js

var t1 = new TimelineMax({delay: 2, repeat: -1}); //new TimelineLite();

//more concise syntax for t1.add() and t1.play()
t1.from('#arms', 2, {rotation: 20, ease: Sine.easeOut}).to('#arms', 4, {rotation: -20, ease: Sine.easeOut}).to('#arms', 4, {rotation: 20, ease: Sine.easeOut});
// t1.add(TweenLite.to('#arms', 2, {rotation: -30, ease: Sine.easeOut}));
// t1.add(TweenLite.to('#arms', 4, {rotation: 30, ease: Sine.easeOut}));
// t1.add(TweenLite.to('#arms', 2, {rotation: 0, ease: Sine.easeOut}));

//t1.play();
//t1.reverse();

//resources
//http://greensock.com/docs/#/HTML5/GSAP/TimelineLite/
//https://developers.google.com/web/fundamentals/design-and-ui/animations/the-basics-of-easing?hl=en