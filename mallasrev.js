
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

var cabeza = new THREE.LatheBufferGeometry( points, 32 );

var material = new THREE.MeshNormalMaterial();

var mallacabeza = new THREE.Mesh( cabeza, material );
mallacabeza.rotateY( Math.PI/6 );
mallacabeza.position.set(0, 10, 0);

var troncoForma = new THREE.CylinderGeometry(4, 8, 12);
var troncoMalla = new THREE.Mesh(troncoForma);
troncoMalla.position.set(0, 0, 0);

//var hongoForma = new THREE.Geometry();

//hongoForma.merge(troncoMalla.geometry, troncoMalla.matrix);
//hongoForma.merge(mallacabeza.geometry, mallacabeza.matrix);


//var material2 = new THREE.MeshNormalMaterial();
//var hong = new THREE.Mesh(hongoForma, material2);

var escena = new THREE.Scene();
escena.add(troncoMalla,mallacabeza);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 50;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );


