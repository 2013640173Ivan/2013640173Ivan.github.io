var geometry = new THREE.SphereGeometry( 50, 32, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var sphere = new THREE.Mesh( geometry, material );

var escena = new THREE.Scene();
escena.add(sphere);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 500;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
