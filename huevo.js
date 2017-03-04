var points = [];
for ( var deg = 0; deg <= 180; deg += 6 ) {

    var rad = Math.PI * deg / 180;
    var point = new THREE.Vector2( ( 10*0.72 + 10*.08 * Math.cos( rad ) ) * Math.sin( rad ), - 10*Math.cos( rad ) ); // the "egg equation"
    //console.log( point ); // x-coord should be greater than zero to avoid degenerate triangles; it is not in this formula.
    points.push( point );

}



geometry = new THREE.LatheGeometry( points, 32 );

var material = new THREE.MeshBasicMaterial( {color: 0x09F7F3} );

var material2 = new THREE.MeshBasicMaterial( {color: 0xF90AEE} );

var Ovo = new THREE.Mesh( geometry,material);
Ovo.position.set(0, 0, 0);
