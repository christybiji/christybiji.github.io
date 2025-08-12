// Particle Slider - Based on the CodePen reference
// Copyright © 2013 Tamino Martinius (http://zaku.eu)
// Copyright © 2013 Particleslider.com (http://particleslider.com)

var init = function(){
  var isMobile = navigator.userAgent &&
    navigator.userAgent.toLowerCase().indexOf('mobile') >= 0;
  var isSmall = window.innerWidth < 1000;
  
  var ps = new ParticleSlider({
    ptlGap: isMobile || isSmall ? 3 : 0,
    ptlSize: isMobile || isSmall ? 3 : 1,
    width: 1e9,
    height: 1e9
  });
    
  var gui = new dat.GUI();
  gui.add(ps, 'ptlGap').min(0).max(5).step(1).onChange(function(){
    ps.init(true);
  });
  gui.add(ps, 'ptlSize').min(1).max(5).step(1).onChange(function(){
    ps.init(true);
  });
  gui.add(ps, 'restless');
  gui.addColor(ps, 'color').onChange(function(value){
    ps.monochrome = true;
    ps.setColor(value);
    ps.init(true);
  });
  
  
  (window.addEventListener
   ? window.addEventListener('click', function(){ps.init(true)}, false)
   : window.onclick = function(){ps.init(true)});
}

var initParticleSlider = function(){
  var psScript = document.createElement('script');
  (psScript.addEventListener
    ? psScript.addEventListener('load', init, false)
    : psScript.onload = init);
  psScript.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/23500/ps-0.9.js';
  psScript.setAttribute('type', 'text/javascript');
  document.body.appendChild(psScript);
}
    
(window.addEventListener
  ? window.addEventListener('load', initParticleSlider, false)
  : window.onload = initParticleSlider);

// Add the hint image styles
var hintImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAAAgCAMAAAAmC6asAAAAMFBMVEX19vf19vft7u/19vfp6uv19vfx8vP19vf19vf19vf19vfm5+j19vcAAAD19vfl5udu+MchAAAADnRSTlOIVcIz10StZneZEewiAMEzGswAAAF/SURBVHja7ZXZbsQwCEXjneXa/P/fFntm0uRpVGkaqVX8YAW4cMCxkq1ftW7STbpJP1sJb0lFPkJiekuq4TMkfkti+gxpe0uivRmB9LQOlHraNixnYErPONAfcYZntYfv9aDtJTmUO5OCeukGR5paqZtbGaSVzYWIlZ9DI6vVpC6shJw5TzdlZk47qZpldAkteBVToxNJrLGqoil6MPE9A1bSNorUXPYWvbLUjbg37lwRNPYW6x6eJK4ilB2hVmChJw2nWx4He3Map1exMVFvQyMVN78rlexbY7Gk0tWUm7gsHUnikQ6dwzLRLM/tRKIlGMMFoijmpthqBocLFTLWO41GnhrFXZIGTiTz5pIyA9G4uqSeSV3W4bSsqvycg0x9RTpcKHaHHybNOZBXfPa41jNjLCeqjRopzgI4kXYcsDqVZWJaZwVWHpYBTOuoACCvEpjTC3DFd6/oVV9YmPw+CWsb+H1SxVWkkgkoV5B6ijasXnMjBPIf/u436e+TvgDCaqPX6lO5yQAAAABJRU5ErkJggg==';

// Add CSS for the hint image
var style = document.createElement('style');
style.textContent = `
html, body {
  background-color: black;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.slides, & > .dg {
  display: none;
}

@media (min-width: 1000px) {
  body {
    background-image: url('${hintImg}');
    background-repeat: no-repeat;
  }
  
  & > .dg {
    display: block;
  }
}

.dribbble {
  position: fixed;
  display: block;
  right: 20px;
  bottom: 20px;
}

.dribbble img {
  display: block;
  height: 28px;
}

.twitter {
  position: fixed;
  display: block;
  right: 64px;
  bottom: 14px;
}

.twitter svg {
  width: 32px;
  height: 32px;
  fill: #1da1f2;
}
`;

document.head.appendChild(style);
