
THREE.ImageUtils.crossOrigin = '';
//var textura =THREE.ImageUtils.loadTexture('2013640173Ivan.github.io/easter.jpg');
  var textura =THREE.ImageUtils.loadTexture('crate.gif');
var material = new THREE.MeshLambertMaterial({map: textura});


var geometry = new THREE.BoxGeometry( 10, 8, 7 );
geometry.translate(0,0,7);
var cube = new THREE.Mesh( geometry, material );

var escena = new THREE.Scene();


escena.add( cube );



 
  
  
  var luzPuntual = new THREE.PointLight(0xFFFFFF);
  luzPuntual.position.x=50;
  luzPuntual.position.y=50;
  luzPuntual.position.z=50;
  
  



  
  escena.add(luzPuntual);

camara = new THREE.PerspectiveCamera();
camara.position.z = 50;

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderer.domElement);



function loop() {

requestAnimationFrame(loop);



cube.rotation.x += 0.00;

cube.rotation.y += 0.00;


renderer.render(escena, camara);


}

var camara, escena, renderer, mallapingui;



loop();
