function main02()
{
    var range = document.querySelector("[type=range]");
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();

    range.addEventListener('input', function() {
      //document.write(range.value);
      screen.scene.remove( surfaces );
      isovalue = 128*range.value;
      surfaces = Isosurfaces02( volume, isovalue )
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
    var surfaces = Isosurfaces02( volume, isovalue );
    screen.scene.add( surfaces );

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth, window.innerHeight ] );
    });

    screen.loop();
}
