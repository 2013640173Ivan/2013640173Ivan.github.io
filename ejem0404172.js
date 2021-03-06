function setup() {
var forma = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshLambertMaterial({color: '#00cc00'});
malla = new THREE.Mesh( forma, material );

escena = new THREE.Scene();
escena.add(malla);

camara = new THREE.WebGLRenderer();
renderer.setSize( window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild( renderer.domElement );
}

function loop(){
 requestAnimationFrame( loop );
 
 malla.rotation.x += 0.01;
 malla.rotation.y += 0.01;
 
 renderer.render( escena, camara );
 }
 
 
 var camara, escena, renderer, malla;
 setup();
 loop();
 
 
