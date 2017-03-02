var puntos = [];
for ( var i = 0; i < 50; i ++ ) {
    points.push( new THREE.Vector2(
                     Math.sin( i * 0.3 ) * 15 + 50,
                     ( i - 2.5 ) * 2 ) )points.push( new THREE.Vector2( Math.sin( i * 0.25 ) * 10 + 1.5, ( i - 5 ) * 3 ) );
}

var forma = new THREE.LatheGeometry(puntos);

var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( forma, material );
malla.rotateX( Math.PI/12 );

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 500;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );


