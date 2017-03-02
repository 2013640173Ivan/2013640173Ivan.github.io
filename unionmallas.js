var troncoForma = new THREE.CylinderGeometry(.25, .5, 1);
var esferaForma = new THREE.TorusKnotBufferGeometry(.5, 2, 1.5, 2);
esferaForma.translate(1,1,1);

var troncoMalla = new THREE.Mesh(troncoForma);
var esferaMalla = new THREE.Mesh(esferaForma);

var arbolForma = new THREE.Geometry();

arbolForma.merge(troncoMalla.geometry, troncoMalla.matrix);
arbolForma.merge(esferaMalla.geometry, esferaMalla.matrix);

var material = new THREE.MeshNormalMaterial();
var arbolMalla = new THREE.Mesh(arbolForma, material);

var escena = new THREE.Scene();
escena.add(arbolMalla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
