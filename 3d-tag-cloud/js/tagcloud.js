/*
@font-face {
    font-family: 'Ubuntu';
    src: local('Ubuntu'),
    local('Ubuntu Regular'),
    local('Ubuntu-Regular'),
    url('fonts/Ubuntu/Ubuntu-Regular.ttf') format('truetype');
}
@font-face {
    font-family: 'Ubuntu Mono';
    src: local('Ubuntu Mono'),
    local('UbuntuMono Regular'),
    local('UbuntuMono-Regular'),
    url('fonts/UbuntuMono/UbuntuMono-Regular.ttf') format('truetype');
}
*/

window.onload = function() {
  try {
    var font = new FontFace(
      "Ubuntu",
      "url('fonts/Ubuntu/Ubuntu-Regular.ttf') format('truetype')"
    );
    
    TagCanvas.Start('myCanvas','tags',{
        textFont: 'Ubuntu',
        textColour: '#ffffff',
        outlineMethod: 'none',
        
        maxSpeed: 0.03,
        depth: 0.5,
        pulsateTo: 0.6,
        initial: [0.1,-0.1],
        decel: 0.95,
        reverse: true,
        fadeIn: 1000,
        clickToFront: 600,

        pulsateTime: 0.5,
        wheelZoom: false,

        shape: "sphere",
        textHeight: 30,

        zoom: 0.8
        
        }
    );
  } catch(e) {
    document.getElementById('myCanvasContainer').style.display = 'none';
  }
};