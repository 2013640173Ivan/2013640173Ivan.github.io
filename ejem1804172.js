var iluminacion = new THREE.Ambientallight(0xFFFFFF)
var iluminacion = new THREE.SphereGeometry(1);
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

var lienzo = document.getElementbyId("luzSinSombras");
var renderizador = new THREE.WebGLRenderer({canvas: lienzo, antialias: true});

renderizador.setSize(600, 600);
renderizador.renderer(escena, camara);

