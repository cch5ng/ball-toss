//js/anim.js

var t1 = new TimelineMax({delay: 2, repeat: -1}); //new TimelineLite();

//more concise syntax for t1.add() and t1.play()
t1.from('#arms', 2, {rotation: 20, ease: Sine.easeOut}).to('#arms', 4, {rotation: -20, ease: Sine.easeOut}).to('#arms', 4, {rotation: 20, ease: Sine.easeOut});
// t1.add(TweenLite.to('#arms', 2, {rotation: -30, ease: Sine.easeOut}));
// t1.add(TweenLite.to('#arms', 4, {rotation: 30, ease: Sine.easeOut}));
// t1.add(TweenLite.to('#arms', 2, {rotation: 0, ease: Sine.easeOut}));

//t1.play();
//t1.reverse();

var t2 = new TimelineLite({});
t2.to('#anim', 1, {y: 80})
//something wrong with relative x position of different ball versions
	.to('#anim', 1, {backgroundPosition: '0 -183px', y: 100})
	.to('#anim', 0.5, {backgroundPosition: '0 -131px', y: 200})
	.to('#anim', 0.3, {backgroundPosition: '0 -43px', y: 270})
	.to('#anim', 0.5, {backgroundPosition: '-1px 0', y: 280})
	.to('#anim', 0.3, {backgroundPosition: '0 -43px', y: 270})
//going b/t skewed ball and orig ball, seems like something is wrong w/ the x location
//also the flipping thru different sprites looks weird too
//not smooth; looks like the effect of a slot machine game; I don't know how to get rid of this
	.to('#anim', 0.7, {backgroundPosition: '-15px -258px', y: 270});

//ANIM 2
var t2b = new TimelineLite({});
t2b.to('#anim2', 1, {y: 175, ease: Bounce.easeOut});

//ANIM 3
var t3 = new TimelineLite({});
t3.to('#anim3', 3, {rotation: 360, x: 200, ease: Back.easeOut.config(1.7)});

//ANIM 4
var t4 = new TimelineLite({});
t4.to('#anim4', 2, {rotation: 360, x: 175, y: -35, ease: Elastic.easeOut.config(1, 0.3)});

//ANIM 5
var t5 = new TimelineMax();
t5.to ('#anim5', 3, {bezier:{curviness:0.4, values:[{x:200, y:-35}, {x: 225, y:35}, {x:25, y:70}, {x:0, y:0}], autoRotate:true}});



//resources
//http://greensock.com/docs/#/HTML5/GSAP/TimelineLite/
//https://developers.google.com/web/fundamentals/design-and-ui/animations/the-basics-of-easing?hl=en