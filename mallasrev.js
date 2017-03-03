var geometry = new THREE.SphereGeometry( 8, 60, 60, Math.PI, Math.PI*2, 3*Math.PI/2);
var material = new THREE.MeshBasicMaterial( { color: 0xddddff } );
var sphere = new THREE.Mesh( geometry, material );
//scene.add( sphere );
sphere.position.set(0,5,0);


var troncoForma = new THREE.CylinderGeometry(3, 6, 10);
var troncoMalla = new THREE.Mesh(troncoForma);
troncoMalla.position.set(0, -7, 0);

var ojoi=new THREE.SphereGeometry(1.5,32,32);
ojoi.translate(-2,2,8);
var mallojoi =new THREE.Mesh( ojoi, material);

var hongoForma = new THREE.Geometry();


hongoForma.merge(sphere.geometry, sphere.matrix);
hongoForma.merge(troncoMalla.geometry, troncoMalla.matrix);
hongoForma.merge(mallojoi.geometry, mallojoi.matrix);






var material2 = new THREE.MeshNormalMaterial();
var mallahongoForma = new THREE.Mesh(hongoForma, material2);

var escena = new THREE.Scene();
escena.add(mallahongoForma);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 50;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );


