


var points = [];
for ( var deg = 0; deg <= 180; deg += 6 ) {
    var rad = Math.PI * deg / 180;
    var point = new THREE.Vector2( ( 10*0.72 + 10*.08 * Math.cos( rad ) ) * Math.sin( rad ), - 10*Math.cos( rad ) ); // the "egg equation"
    //console.log( point ); // x-coord should be greater than zero to avoid degenerate triangles; it is not in this formula.
    points.push( point );
}

var geometry = new THREE.LatheGeometry( points, 32 );

var material = new THREE.MeshBasicMaterial( {color: 0xF90AEE} );
 malla = new THREE.Mesh( geometry,material);
//malla.position.set(0, 0, 0);




malla.rotateY( Math.PI/8 );
var escena = new THREE.Scene();
escena.add(malla);



var camara = new THREE.PerspectiveCamera();
camara.position.z = 50;

 renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );




function loop() 
{
requestAnimationFrame(loop);


malla.rotation.x += 0.05;

malla.rotation.y += 0.05;


renderizador.render(escena, camara);

}

var camara, escena, renderizador, malla;


loop();
