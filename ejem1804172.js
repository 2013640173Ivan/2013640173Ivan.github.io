var iluminacion = new THREE.AmbientLight(0xFFFF33);
iluminacion.position.y=20;

var forma = new THREE.SphereGeometry(1);
var material = new THREE.MeshLambertMaterial({color: "#33F6FF"});
var malla = new THREE.Mesh( forma, material);

malla.position.y=2;

var base = new THREE.Mesh(new THREE.BoxGeometry(5,.1,5), new THREE.MeshLambertMaterial({color: 0XFFFFFF}));

var escena = new THREE.Scene();
escena.add(malla);
escena.add(base);
escena.add(iluminacion);

var camara = new THREE.PerspectiveCamera();
camara.position.z=15;
camara.position.y=5;


var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderizador.domElement );


renderizador.shadowMapEnabled = true;
malla.castShadow = true;
base.receiveShadow = true;
iluminacion.castShadow = true;
renderizador.render(escena, camara);
