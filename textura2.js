
THREE.ImageUtils.crossOrigin = '';
//var textura =THREE.ImageUtils.loadTexture('2013640173Ivan.github.io/easter.jpg');
  var textura =THREE.ImageUtils.loadTexture('crate.gif');
var material = new THREE.MeshLambertMaterial({map: textura});
  var material2 = new THREE.MeshLambertMaterial();
  var points = [];
for ( var deg = 0; deg <= 180; deg += 6 ) {
    var rad = Math.PI * deg / 180;
    var point = new THREE.Vector2( ( 10*0.72 + 10*.08 * Math.cos( rad ) ) * Math.sin( rad ), - 10*Math.cos( rad ) ); // the "egg equation"
    //console.log( point ); // x-coord should be greater than zero to avoid degenerate triangles; it is not in this formula.
    points.push( point );
}

 var forma = new THREE.LatheGeometry( points, 32 );
  
//var forma = new THREE.BoxGeometry(1,1,1);
malla = new THREE.Mesh(forma, material2);
  
  
  
  
  
var ojos=new THREE.SphereGeometry(5,32,32);
ojos.translate(0,12,0);
 mallojos =new THREE.Mesh( ojos, material2);
  
  
  
  
  
  var pingui = new THREE.Geometry();
pingui.merge(malla.geometry, malla.matrix);
pingui.merge(mallojos.geometry, mallojos.matrix);
  
  var mallapingui = new THREE.Mesh(pingui, material);
//mallapingui.rotateY( Math.PI/8 );

  
  
  
  var luzPuntual = new THREE.PointLight(0xFFFFFF);
  luzPuntual.position.x=50;
  luzPuntual.position.y=50;
  luzPuntual.position.z=50;
  
  


escena = new THREE.Scene();
escena.add(mallapingui);
  
  escena.add(luzPuntual);

camara = new THREE.PerspectiveCamera();
camara.position.z = 50;

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderer.domElement);



function loop() {

requestAnimationFrame(loop);



mallapingui.rotation.x += 0.01;

mallapingui.rotation.y += 0.01;


renderer.render(escena, camara);


}

var camara, escena, renderer, mallapingui;



loop();
