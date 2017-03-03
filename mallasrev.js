//var puntos = [];
//for ( var i = 0; i < 50; i ++ ) {
   // puntos.push( new THREE.Vector2( Math.sin( i * 0.25 ) * 10 + 1.5, ( i - 5 ) * 3 ) );
//}



//var x = 0, y = 0;

//var heartShape = new THREE.Shape();

//heartShape.moveTo( x + 5, y + 5 );
//heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
//heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
//heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
//heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
//heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
//heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );

//var geometry = new THREE.LatheGeometry( heartShape );


//var figura = new THREE.Shape();

//figura.moveTo(10, 10);
//figura.lineTo(10, 40);
//figura.lineTo(40, 40);
//figura.lineTo(10, 10);


// points - (x, y) pairs are rotated around the y-axis
//var points = [];
//for ( var deg = 0; deg <= 180; deg += 6 ) {

//var rad = Math.PI * deg / 180;
    //var point = new THREE.Vector2( ( 0.72 + 0.08 * Math.cos( rad ) ) *Math.sin( rad ), - Math.cos( rad ) ); // the "egg equation"
    //console.log( point ); // x-coord should be greater than zero to avoid degenerate triangles; it is not in this formula.
  //  points.push( point );

//}
var r0 = 20
var r1 = r0/2;
var inc = Math.PI/r0;
points = [];
points.push( new THREE.Vector2( 0.0001, -r0/2 ) );
for ( var i = r0/2; i <= r0; i ++ ) {
    var def = i<r0/2 ? 0 : r1*Math.sin((i-r0/2)*inc);
    points.push( new THREE.Vector2( Math.sqrt(r0*i-i*i), i+def-r0/2 ) );
}
points.push( new THREE.Vector2( 0.0001, -r0/2 ) );

var geometry = new THREE.LatheBufferGeometry( points, 32 );
//var forma = new THREE.LatheGeometry(figura);

var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( geometry, material );
malla.rotateY( Math.PI/6 );

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 100;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );


