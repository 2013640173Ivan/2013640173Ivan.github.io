var r0 = 40
var r1 = r0/4;
var inc = Math.PI/r0;
points = [];
points.push( new THREE.Vector2( 0.0001, -r0/2 ) );
for ( var i = 0; i <= r0; i ++ ) {
    var def = i<r0/2 ? 0 : r1*Math.sin((i-r0/2)*inc);
    points.push( new THREE.Vector2( Math.sqrt(r0*i-i*i), i+def-r0/2 ) );
}
points.push( new THREE.Vector2( 0.0001, -r0/2 ) );
var geometry = new THREE.LatheGeometry( points, 30 );
var material = new THREE.MeshPhongMaterial( { color: 0xFFFF20 } );
Ovo = new THREE.Mesh( geometry, material );
Ovo.position.set(0, 20.1, 0);
escena.add( Ovo );
