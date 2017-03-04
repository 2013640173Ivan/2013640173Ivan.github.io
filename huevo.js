var points = [];
for ( var deg = 0; deg <= 180; deg += 6 ) {

    var rad = Math.PI * deg / 180;
    var point = new THREE.Vector2( ( 10*0.72 + 10*.08 * Math.cos( rad ) ) * Math.sin( rad ), - 10*Math.cos( rad ) ); // the "egg equation"
    //console.log( point ); // x-coord should be greater than zero to avoid degenerate triangles; it is not in this formula.
    points.push( point );

}



geometry = new THREE.LatheGeometry( points, 32 );

var material2 = new THREE.MeshBasicMaterial( {color: 0xF90AEE} );

var Ovo = new THREE.Mesh( geometry,material2);
Ovo.position.set(0, 0, 0);




var ojoi=new THREE.SphereGeometry(0.75,32,32);
ojoi.translate(-1.5,12,5);
var mallojoi =new THREE.Mesh( ojoi, material2);


var ojod=new THREE.SphereGeometry(0.75,32,32);
ojod.translate(1.5,12,5);
var mallojod =new THREE.Mesh( ojod, material2);


var escena = new THREE.Scene();
escena.add(Ovo,mallaojoi,mallaojod);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 50;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
