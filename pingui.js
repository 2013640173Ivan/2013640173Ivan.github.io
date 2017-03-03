var points = [];
for ( var deg = 0; deg <= 180; deg += 6 ) {

    var rad = Math.PI * deg / 180;
    var point = new THREE.Vector2( ( 10*0.72 + 10*.08 * Math.cos( rad ) ) * Math.sin( rad ), - 10*Math.cos( rad ) ); // the "egg equation"
    //console.log( point ); // x-coord should be greater than zero to avoid degenerate triangles; it is not in this formula.
    points.push( point );

}

geometry = new THREE.LatheBufferGeometry( points, 32 );

Ovo = new THREE.Mesh( geometry);
Ovo.position.set(0, 0, 0);

//escena.add(sphere,troncoMalla,mallojoi,mallojod,mallapied,mallapiei);

var geometry = new THREE.SphereBufferGeometry( 5, 32, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var sphere = new THREE.Mesh( geometry, material );
sphere.position.set(0,12,0)


var escena = new THREE.Scene();
escena.add(Ovo,sphere);


var camara = new THREE.PerspectiveCamera();
camara.position.z = 50;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
