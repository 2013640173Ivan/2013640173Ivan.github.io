var troncoForma = new THREE.CylinderGeometry(1, 1, 75, 64);
var points = [];
for ( var i = 0; i < 10; i ++ ) {
	points.push( new THREE.Vector2( Math.sin( i * 0.5 ) * 10 + 1.5, ( i - 5 ) * 3 ) );
}
var esferaForma = new THREE.LatheGeometry( points, 36 );
esferaForma.translate(1,35,1);
troncoForma.translate(1,-1,1);

var material = new THREE.MeshBasicMaterial( { color: 0x32CD32 } );
var material2 = new THREE.MeshBasicMaterial( { color: 0xE6DF0E } );

var troncoMalla = new THREE.Mesh(troncoForma,material2);
var esferaMalla = new THREE.Mesh(esferaForma, material);


var arbolForma = new THREE.Geometry();

arbolForma.merge(troncoMalla.geometry, troncoMalla.matrix);
arbolForma.merge(esferaMalla.geometry, esferaMalla.matrix);



var arbolMalla = new THREE.Mesh(arbolForma);


var escena = new THREE.Scene();
escena.add(arbolMalla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 200;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
