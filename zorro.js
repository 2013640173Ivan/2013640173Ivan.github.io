// Creamos un prisma
var geometriaCubo = new THREE.CubeGeometry(
    100, // Dimensiones en eje X
    140, // Dimensiones en eje Y
    100 // Dimensiones en eje Z
);
  
// Creamos una apariencia (de lila claro)
var aparienciaLila = new THREE.MeshLambertMaterial({
    color: 0x9999FF // Color hexadecimal
});
  
// Generamos el prisma y le aplicamos la apariencia
var cubo = new THREE.Mesh(geometriaCubo, aparienciaLila);




var escena = new THREE.Scene()
escena.add(cubo);
//escena.add(mallabot2);





//var escena = new THREE.Scene();
//escena.add(sphere,malla,mallai,mallaiu,mallaiue );

var camara = new THREE.PerspectiveCamera();
camara.position.y = 160; // Elevamos la cámara
camara.position.z = 400; // Alejamos la cámara

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
