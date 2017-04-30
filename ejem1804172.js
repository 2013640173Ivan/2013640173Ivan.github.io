var iluminacion = new THREE.Ambientallight(0xFFFFFF);
iluminacion.position.y=20;

var forma = new THREE.SphereGeometry(1);
var material = new THREE.MeshLambertMaterial({color: "#00c00"});
var malla = new THREE.Mesh( forma, material);

malla.position.y=2;

var base = new THREE.Mesh(new THREE.BoxGeometry(5,.1,5), new THREE.MeshLambertMaterial({color: 0XFFFFFF}));

var escena = new THREEE.Scene();
escena.add(malla);
escena.add(base);
escena.add(iluminacion);

var camara = new THREE.PerspectiveCameraq();
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
