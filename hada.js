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

figuraiu.moveTo(-35,-45);
figuraiu.lineTo(-25,-90);
figuraiu.lineTo(-55,-75);
figuraiu.lineTo(-75,-55);
figuraiu.lineTo(-40,-40);
figuraiu.lineTo(-35,-45);


var formaiu = new THREE.ExtrudeGeometry( figuraiu,
                                       {amount: 1} );
                                       
                                var material = new THREE.MeshNormalMaterial();
var mallaiu = new THREE.Mesh( formaiu, material );




var figuraiue = new THREE.Shape();

figuraiue.moveTo(-35,-45);
figuraiue.lineTo(-25,-90);
figuraiue.lineTo(-55,-75);
figuraiue.lineTo(-75,-55);
figuraiue.lineTo(-40,-40);
figuraiue.lineTo(-35,-45);


var formaiue = new THREE.ExtrudeGeometry( figuraiue,
                                       {amount: 1} );
                                       
                                var material = new THREE.MeshNormalMaterial();
var mallaiue = new THREE.Mesh( formaiue, material );




var escena = new THREE.Scene();
escena.add(sphere,malla,mallai,mallaiu,mallaiue );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 500;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );


