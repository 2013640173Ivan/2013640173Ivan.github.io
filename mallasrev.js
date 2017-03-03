
var r0 = 20
var r1 = r0/2;
var inc = Math.PI/r0;
points = [];
points.push( new THREE.Vector2( 0.0001, -r0/2 ) );
for ( var i = 0; i <= r0/2; i ++ ) {
    var def = i<r0/2 ? 0 : r1*Math.sin((i-r0/2)*inc);
    points.push( new THREE.Vector2( Math.sqrt(r0*i-i*i), i+def-r0/2 ) );
}
points.push( new THREE.Vector2( 0.0001, r0/2 ) );

var geometry = new THREE.LatheBufferGeometry( points, 32 );
//var forma = new THREE.LatheGeometry(figura);

var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( geometry, material );
malla.rotateY( Math.PI/6 );

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 50;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );


