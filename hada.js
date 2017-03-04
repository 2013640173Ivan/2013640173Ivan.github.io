var geometry = new THREE.SphereGeometry( 60, 32, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0x0AF9EE} );
var sphere = new THREE.Mesh( geometry, material );


var figura = new THREE.Shape();

figura.moveTo(40,40);
figura.lineTo(150,60);
figura.lineTo(200,180);
figura.lineTo(35,45);
figura.lineTo(40,40);


var forma = new THREE.ExtrudeGeometry( figura,
                                       {amount: 1} );
                                       
                                var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
//malla.rotateY( -Math.PI/4 );

var figurai = new THREE.Shape();

figurai.moveTo(-40,40);
figurai.lineTo(-140,40);
figurai.lineTo(-170,180);
figurai.lineTo(-35,45);
figurai.lineTo(-40,40);


var formai = new THREE.ExtrudeGeometry( figurai,
                                       {amount: 1} );
                                       
                                var material = new THREE.MeshNormalMaterial();
var mallai = new THREE.Mesh( formai, material );




var figuraiu = new THREE.Shape();

figuraiu.moveTo(-40,40);
figuraiu.lineTo(-140,40);
figuraiu.lineTo(-170,180);
figuraiu.lineTo(-35,45);
figuraiu.lineTo(-40,40);


var formaiu = new THREE.ExtrudeGeometry( figuraiu,
                                       {amount: 1} );
                                       
                                var material = new THREE.MeshNormalMaterial();
var mallaiu = new THREE.Mesh( formaiu, material );





var escena = new THREE.Scene();
escena.add(sphere,malla,mallai,mallaiu);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 500;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );


