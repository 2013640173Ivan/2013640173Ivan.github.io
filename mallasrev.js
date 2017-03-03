var geometry = new THREE.SphereGeometry( 10, 60, 60, Math.PI, Math.PI*2, 3*Math.PI/2);
geometry.translate(0,7,0)
var material = new THREE.MeshBasicMaterial( { color: 0xddddff } );
var sphere = new THREE.Mesh( geometry, material );
//scene.add( sphere );
//sphere.position.set(0,10,0);


var troncoForma = new THREE.CylinderGeometry(3, 6, 12);
var troncoMalla = new THREE.Mesh(troncoForma);
troncoMalla.position.set(0, 0, 0);

var ojoi=new THREE.SphereGeometry(1,32,32);
ojoi.translate(-2,8,7);
var mallojoi =new THREE.Mesh( ojoi, material);


var ojod=new THREE.SphereGeometry(1,32,32);
ojod.translate(2,8,7);
var mallojod =new THREE.Mesh( ojod, material);



var figura = new THREE.Shape();
figura.moveTo(5, -4);
figura.lineTo(5.2, -4);
figura.lineTo(5.2, -4.05);
figura.lineTo(5, -4.05);
figura.lineTo(5, -4);
var pied = new THREE.ExtrudeGeometry( figura,
                                       {amount: .75} );

var mallapied =new THREE.Mesh( pied, material);


var figura2 = new THREE.Shape();
figura2.moveTo(-5, -4);
figura2.lineTo(-5.2, -4);
figura2.lineTo(-5.2, -4.05);
figura2.lineTo(-5, -4.05);
figura2.lineTo(-5, -4);
var piei = new THREE.ExtrudeGeometry( figura2,
                                       {amount: 0.75} );

var mallapiei =new THREE.Mesh( piei, material);

var hongoForma = new THREE.Geometry();


hongoForma.merge(sphere.geometry, sphere.matrix);
hongoForma.merge(troncoMalla.geometry, troncoMalla.matrix);
hongoForma.merge(mallojoi.geometry, mallojoi.matrix);
hongoForma.merge(mallojod.geometry, mallojod.matrix);
hongoForma.merge(mallapied.geometry, mallapied.matrix);
hongoForma.merge(mallapiei.geometry, mallapiei.matrix);






var material2 = new THREE.MeshNormalMaterial();
var mallahongoForma = new THREE.Mesh(hongoForma, material2);

var escena = new THREE.Scene();
//escena.add(mallahongoForma);

escena.add(sphere,troncoMalla,mallojoi,mallojod,mallapied,mallapiei);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 50;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );


