
THREE.ImageUtils.crossOrigin = '';
//var textura =THREE.ImageUtils.loadTexture('2013640173Ivan.github.io/easter.jpg');
  var textura =THREE.ImageUtils.loadTexture('crate.gif');
var material = new THREE.MeshLambertMaterial({map: textura});

var material2 = new THREE.MeshBasicMaterial( {color: 0xfff99} );

var geometry = new THREE.BoxGeometry( 8, 7, 10 );
geometry.translate(0,0,0);
var cube = new THREE.Mesh( geometry, material2 );


var geometry2 = new THREE.BoxGeometry(10,3,4);
geometry2.translate(0,2,7);
var cube2 = new THREE.Mesh( geometry2, material2 );


var geometry3 = new THREE.BoxGeometry(6,2,3);
geometry3.translate(0,3,10.5);
var cube3 = new THREE.Mesh( geometry3, material2 );

var geometry4 = new THREE.BoxGeometry(8,5,4);
geometry4.translate(0,5.5,7);
var cube4 = new THREE.Mesh( geometry4, material2 );

var zo = new THREE.Geometry();
zo.merge(cube.geometry, cube.matrix);
zo.merge(cube2.geometry, cube2.matrix);
zo.merge(cube3.geometry, cube3.matrix);
zo.merge(cube4.geometry, cube4.matrix);

var mallazo = new THREE.Mesh(zo, material);
//mallabomba.rotateY( Math.PI/4);
var escena = new THREE.Scene();
//mallabomba.scale.set(0.75,0.75,0.75);
escena.add(mallazo);


/*var escena = new THREE.Scene();


escena.add( cube );
escena.add(cube2);
*/


 
  
  
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



mallazo.rotation.x += 0.01;

mallazo.rotation.y += 0.01;


renderer.render(escena, camara);


}

var camara, escena, renderer, mallapingui;



loop();
