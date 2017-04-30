var iluminación = new THREE.AmbientLight(0xFFFFFF);

var forma = new THREE.SphereGeometry(1);
var material = new THREE.MeshLambertMaterial({color: "#00cc00"});
var malla = new THREE.Mesh(forma, material);

var escena = new THEEE.Scene();
escena.add(malla);
escena.add(iluminacion);

var camara = new THREE.PerspectiveCamera();
camara.position.z=5;

var lienzo = document.getElementById("luzAmbiental");
var renderizador = new THREE.WebGLRenderer({canvas: lienzo, antialias: true});
renderizador.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena, camara);




