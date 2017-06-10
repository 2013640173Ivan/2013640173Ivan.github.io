


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



var ojoi=new THREE.SphereGeometry(0.75,32,32);
ojoi.translate(-1.5,12,5);
var mallojoi =new THREE.Mesh( ojoi, material);




var pin = new THREE.Geometry();
pin.merge(malla.geometry, malla.matrix);
pin.merge(mallojoi.geometry, mallojoi.matrix);
pin.translate(-52,10,70);
var mallapin = new THREE.Mesh(bomba, material);
//mallabomba.rotateY( Math.PI/12 );
//mallabomba.rotateZ( Math.PI/4 );
escena.add(mallapin);





mallapin.rotateY( Math.PI/8 );
var escena = new THREE.Scene();




var camara = new THREE.PerspectiveCamera();
camara.position.z = 50;

 renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );




function loop() 
{
requestAnimationFrame(loop);


mallapin.rotation.x += 0.05;

mallapin.rotation.y += 0.05;


renderizador.render(escena, camara);

}

var camara, escena, renderizador, mallapin;


loop();
