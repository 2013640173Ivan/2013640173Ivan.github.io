var troncoForma = new THREE.CylinderGeometry(5, 5, 20, 32);
var points = [];
for ( var i = 0; i < 10; i ++ ) {
	points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 5 ) * 2 ) );
}
var esferaForma = new THREE.LatheGeometry( points );
esferaForma.translate(1,3,1);

var troncoMalla = new THREE.Mesh(troncoForma);
var esferaMalla = new THREE.Mesh(esferaForma);

var material = new THREE.MeshBasicMaterial( { color: 0x32CD32 } );
var florMalla = new THREE.Mesh(esferaMalla, material);

var material2 = new THREE.MeshBasicMaterial( { color: 0xE6DF0E } );
var talloMalla = new THREE.Mesh(troncoMalla, material2);


var arbolForma = new THREE.Geometry();

arbolForma.merge(troncoMalla.geometry, troncoMalla.matrix);
arbolForma.merge(esferaMalla.geometry, esferaMalla.matrix);






var arbolMalla = new THREE.Mesh(arbolForma);


var escena = new THREE.Scene();
escena.add(arbolMalla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 50;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
