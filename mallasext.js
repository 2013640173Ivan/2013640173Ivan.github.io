var figura = new THREE.Shape();

figura.moveTo(-160, -40);
figura.lineTo(-185, -95);
figura.lineTo(-280, -80);
figura.lineTo(-240, 20);
figura.lineTo(-165, 0);
figura.lineTo(-170, 40);
figura.lineTo(-150, 120);
figura.lineTo(-400, 340);
figura.lineTo(-260, 760);
figura.lineTo(-70, 190);
figura.lineTo(20, 220);
figura.lineTo(135, 130);
figura.lineTo(170, 80);
figura.lineTo(520, 320);
figura.lineTo(480, 60);
figura.lineTo(190, 30);
figura.lineTo(190, -60);
figura.lineTo(130, -130);
figura.lineTo(50, -150);
figura.lineTo(140, -220);
figura.lineTo(80, -280);
figura.lineTo(0, -240);
figura.lineTo(30, -160);
figura.lineTo(-240, 20);
figura.lineTo(-50, -170);
figura.lineTo(-85, -95);
figura.lineTo(-160, -40);


var forma = new THREE.ExtrudeGeometry( figura,
                                       {amount: 10} );
                                       
                                var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
//malla.rotateY( Math.PI/6 );

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 500;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );

