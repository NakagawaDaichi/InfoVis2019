function main01()
{


    var range = document.querySelector("[type=range]");
    //var e1 = document.getElementById(range);

    range.addEventListener('input', function() {
      //document.write(range.value);
    });
    //document.write(range.value);
    //var slide = range.getRangeAt(0);
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();

    screen.init( volume, {
        width: window.innerWidth * 0.8,
        //width: window.innerWidth,
        height: window.innerHeight,
        targetDom: document.getElementById('display'),
        enableAutoResize: false
    });

    // create color map
    var cmap = [];
    for ( var i = 0; i < 256; i++ )
    {
        var S = i / 255.0; // [0,1]
        //var R = Math.max( Math.cos( ( S ) * Math.PI ), 0.0 );
        var G = Math.max( Math.cos( ( S ) * Math.PI ), 0.0 );
        var B = Math.max( Math.cos( ( S ) * Math.PI ), 0.0 );
        var color = new THREE.Color( 1.0, G, B );
        //if ( S == 0){
        //  var color = new THREE.Color( 1, 1, 1 );
        //} else {
        //  var color = new THREE.Color( S, 0, 0 );
        //}
        cmap.push( [ S, '0x' + color.getHexString() ] );
    }





    var bounds = Bounds( volume );
    screen.scene.add( bounds );

    var isovalue = 128*range.value;
    var surfaces = Isosurfaces( volume, isovalue );
    screen.scene.add( surfaces );

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth * 0.8, window.innerHeight ] );
    });

    screen.loop();
}
