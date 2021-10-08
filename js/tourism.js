var images = document.getElementById('simpleParallaxTop'); 

var para = new simpleParallax(images,{
    delay: 2.0,
    orientation:'down',
    scale:'1.1',
    transition:'cubic-bezier(0,0,0,1)',
    overflow:true,


});

var imagesCenter = document.getElementById('simpleParallaxCenter'); 

var para2 = new simpleParallax(imagesCenter,{
    delay: 4.5,
    orientation:'down',
    scale:'1.3',
    transition:'cubic-bezier(0,0,0,1)',
    overflow:true,


});

var imagesBottom = document.getElementById('simpleParallaxBottom');

var para2 = new simpleParallax(imagesCenter,{
    delay: 4.5,
    orientation:'down',
    scale:'1.3',
    transition:'cubic-bezier(0,0,0,1)',
    overflow:true,
});