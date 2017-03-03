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
var points = [];
for ( var deg = 0; deg <= 180; deg += 6 ) {

    var rad = Math.PI * deg / 180;
    var point = new THREE.Vector2( ( 1.44 + .16 * Math.cos( rad ) ) * Math.sin( rad ), - Math.cos( rad ) ); // the "egg equation"
    //console.log( point ); // x-coord should be greater than zero to avoid degenerate triangles; it is not in this formula.
    points.push( point );

}

var geometry = new THREE.LatheBufferGeometry( points, 32 );
//var forma = new THREE.LatheGeometry(figura);

var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( geometry, material );
malla.rotateY( Math.PI/6 );

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 30;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );


