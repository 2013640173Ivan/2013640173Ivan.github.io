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
                                       {amount: 10} );
                                       
                                var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
//malla.rotateY( -Math.PI/4 );



var escena = new THREE.Scene();
escena.add(sphere,malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 300;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );


