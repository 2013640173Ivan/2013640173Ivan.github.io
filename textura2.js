
THREE.ImageUtils.crossOrigin = '';
//var textura =THREE.ImageUtils.loadTexture('2013640173Ivan.github.io/easter.jpg');
  var textura =THREE.ImageUtils.loadTexture('crate.gif');
var material = new THREE.MeshLambertMaterial({map: textura});


var geometry = new THREE.BoxGeometry( 8, 7, 10 );
geometry.translate(0,0,0);
var cube = new THREE.Mesh( geometry, material );


var geometry2 = new THREE.BoxGeometry(10,3,4);
geometry2.translate(0,2,5);
var cube2 = new THREE.Mesh( geometry2, material );

var escena = new THREE.Scene();


escena.add( cube );
escena.add(ciben2);



 
  
  
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



cube.rotation.x += 0.01;

cube.rotation.y += 0.01;


renderer.render(escena, camara);


}

var camara, escena, renderer, mallapingui;



loop();
