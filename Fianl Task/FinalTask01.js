function main02()
{
    var range = document.querySelector("[id=isovalue]");
    var color = document.querySelector("[id=colors]");
    var shares = document.querySelector("[id=share]");
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();
    var colors = 0;

    range.addEventListener('input', function() {
      //document.write(range.value);
      screen.scene.remove( surfaces );
      isovalue = 128*range.value;
      surfaces = Isosurfaces02( volume, isovalue ,colors)
      screen.scene.add( surfaces );
    });

    color.addEventListener('input', function() {
      //document.write(colors.value);
      screen.scene.remove( surfaces );
      colors = color.value;
      surfaces = Isosurfaces02( volume, isovalue ,colors)
      screen.scene.add( surfaces );
    });

    shares.addEventListener('input', function() {
      //document.write(colors.value);
      screen.scene.remove( surfaces );
      isovalue = 128*shares.value;
      colors = 256*shares.value;
      surfaces = Isosurfaces02( volume, isovalue ,colors)
      screen.scene.add( surfaces );
    });

    //document.write(range.value);

    screen.init( volume, {
        width: window.innerWidth * 0.8,
        //width: window.innerWidth,
        height: window.innerHeight,
        targetDom: document.getElementById('display'),
        enableAutoResize: false
    });

    var bounds = Bounds( volume );
    screen.scene.add( bounds );

    var isovalue = 128;
    var surfaces = Isosurfaces02( volume, isovalue , colors);
    screen.scene.add( surfaces );

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth, window.innerHeight ] );
    });

    screen.loop();
}
