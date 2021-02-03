window.onload = function() {
    try {
        TagCanvas.Start('myCanvas','tags',{
            textColour: '#ffffff',
            outlineMethod: 'none',
            
            shape: "sphere",
            textHeight: 30,
            depth: 0.5,

            reverse: true,
            dragControl: true,
            
            maxSpeed: 0.05,
            
            clickToFront: 500,
            wheelZoom: false}
        );
    } catch(e) {
      // something went wrong, hide the canvas container
      document.getElementById('myCanvasContainer').style.display = 'none';
    }
  };