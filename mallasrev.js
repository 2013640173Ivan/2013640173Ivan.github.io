
//var r0 = 20
//var r1 = r0/2;
//var inc = Math.PI/r0;
//points = [];
//points.push( new THREE.Vector2( 0.0001, -r0/2 ) );
//for ( var i = 0; i <= r0; i ++ ) {
  //  var def = i<r0/2 ? 0 : r1*Math.sin((i-r0/2)*inc);
    //points.push( new THREE.Vector2( Math.sqrt(r0*i-i*i), i+def-r0/2 ) );
//}
//points.push( new THREE.Vector2( 0.0001, r0/2 ) );

//var cabeza = new THREE.LatheBufferGeometry( points, 32 );

//var material = new THREE.MeshNormalMaterial();

//var mallacabeza = new THREE.Mesh( cabeza, material );
//mallacabeza.rotateY( Math.PI/6 );
//mallacabeza.position.set(0, 10, 0);

var geometry = new THREE.SphereGeometry( 8, 32, 15, 1*Math.PI/2, 2*Math.PI, Math.PI, Math.PI);
var material = new THREE.MeshBasicMaterial( { color: 0xddddff } );
var sphere = new THREE.Mesh( geometry, material );
//scene.add( sphere );


var troncoForma = new THREE.CylinderGeometry(3, 6, 10);
var troncoMalla = new THREE.Mesh(troncoForma);
troncoMalla.position.set(0, -3, 0);

var ojoi=new THREE.SphereGeometry(2,32,32);
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


