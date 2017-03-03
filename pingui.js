var points = [];
for ( var deg = 0; deg <= 180; deg += 6 ) {

    var rad = Math.PI * deg / 180;
    var point = new THREE.Vector2( ( 10*0.72 + 10*.08 * Math.cos( rad ) ) * Math.sin( rad ), - 10*Math.cos( rad ) ); // the "egg equation"
    //console.log( point ); // x-coord should be greater than zero to avoid degenerate triangles; it is not in this formula.
    points.push( point );

}



geometry = new THREE.LatheGeometry( points, 32 );

var material = new THREE.MeshBasicMaterial( {color: 0x09F7F3} );
var material2 = new THREE.MeshBasicMaterial( {color: 0xF709EC} );


var Ovo = new THREE.Mesh( geometry,material);
Ovo.position.set(0, 0, 0);

//escena.add(sphere,troncoMalla,mallojoi,mallojod,mallapied,mallapiei);

var geometry = new THREE.SphereGeometry( 5, 32, 32 );

var sphere = new THREE.Mesh( geometry, material2 );
sphere.position.set(0,12,0)



var ojoi=new THREE.SphereGeometry(0.75,32,32);
ojoi.translate(-1.5,12,10);
var mallojoi =new THREE.Mesh( ojoi, material);


var ojod=new THREE.SphereGeometry(0.75,32,32);
ojod.translate(1.5,12,10);
var mallojod =new THREE.Mesh( ojod, material);

var forma = new THREE.Geometry();

forma.vertices.push( new THREE.Vector3( 1,  9,  10 ) ); // Vértice 0
forma.vertices.push( new THREE.Vector3( 1,  10.5, 10 ) ); // Vértice 1
forma.vertices.push( new THREE.Vector3(-1,  10.5, 10 ) ); // Vértice 2
forma.vertices.push( new THREE.Vector3(-1,  9,  10 ) ); // Vértice 3
forma.vertices.push( new THREE.Vector3( 0,  9.75,  12.5 ) ); // Vértice 


forma.faces.push( new THREE.Face3( 3, 2, 1 ) ); // Cara 0
forma.faces.push( new THREE.Face3( 3, 1, 0 ) ); // Cara 1
forma.faces.push( new THREE.Face3( 3, 0, 4 ) ); // Cara 2
forma.faces.push( new THREE.Face3( 0, 1, 4 ) ); // Cara 3
forma.faces.push( new THREE.Face3( 1, 2, 4 ) ); // Cara 4
forma.faces.push( new THREE.Face3( 2, 3, 4 ) ); // Cara 5

forma.computeBoundingSphere();

forma.computeFaceNormals();

var material = new THREE.MeshNormalMaterial();

var mallapic = new THREE.Mesh( forma, material );

//var geometry = new THREE.ConeGeometry( 1.5, 5, 32 );
//var material3 = new THREE.MeshBasicMaterial( {color: 0xffff00} );
//var cone = new THREE.Mesh( geometry, material3 );
//cone.position.set(0,10,5)


var figura = new THREE.Shape();
figura.moveTo(6, -7);
figura.lineTo(6.1, -7);
figura.lineTo(6.1, -7.05);
figura.lineTo(6, -7.05);
figura.lineTo(6, -7);
var pied = new THREE.ExtrudeGeometry( figura,
                                       {amount: .75} );

var mallapied =new THREE.Mesh( pied, material);


var figura2 = new THREE.Shape();
figura2.moveTo(-6, -7);
figura2.lineTo(-6.1, -7);
figura2.lineTo(-6.1, -7.05);
figura2.lineTo(-6, -7.05);
figura2.lineTo(-6, -7);
var piei = new THREE.ExtrudeGeometry( figura2,
                                       {amount: 0.75} );

var mallapiei =new THREE.Mesh( piei, material);


var pingui = new THREE.Geometry();
pingui.merge(Ovo.geometry, Ovo.matrix);
pingui.merge(sphere.geometry, sphere.matrix);
pingui.merge(mallojod.geometry, mallojod.matrix);
pingui.merge(mallojoi.geometry, mallojoi.matrix);
pingui.merge(mallapic.geometry, mallapic.matrix);
pingui.merge(mallapiei.geometry, mallapiei.matrix);
pingui.merge(mallapied.geometry, mallapied.matrix);


var mallapingui = new THREE.Mesh(pingui, material);
//mallabomba.rotateY( Math.PI/4 );
var escena = new THREE.Scene();
escena.add(mallapingui);


//var escena = new THREE.Scene();
//escena.add(Ovo,sphere,mallojod,mallojoi,mallapic,mallapied,mallapiei);


var camara = new THREE.PerspectiveCamera();
camara.position.z = 50;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
