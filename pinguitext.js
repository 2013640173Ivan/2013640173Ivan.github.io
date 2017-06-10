

material = new THREE.MeshBasicMaterial( {color: 0x09F7F3} );

var points = [];
for ( var deg = 0; deg <= 180; deg += 6 ) {
    var rad = Math.PI * deg / 180;
    var point = new THREE.Vector2( ( 10*0.72 + 10*.08 * Math.cos( rad ) ) * Math.sin( rad ), - 10*Math.cos( rad ) ); // the "egg equation"
    //console.log( point ); // x-coord should be greater than zero to avoid degenerate triangles; it is not in this formula.
    points.push( point );
}

geometry = new THREE.LatheGeometry( points, 32 );
var Ovo = new THREE.Mesh( geometry,material);
Ovo.position.set(0, 0, 0);




Ovo.rotateY( Math.PI/8 );
var escena = new THREE.Scene();
escena.add(Ovo);



var camara = new THREE.PerspectiveCamera();
camara.position.z = 50;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );


function loop() 
{
requestAnimationFrame(loop);


Ovo.rotation.x += 0.01;

Ovo.rotation.y += 0.01;


rendererizador.render(escena, camara);

}

var camara, escena, renderer, malla;






var camara, escena, renderizador, Ovo;

setup()
loop();
