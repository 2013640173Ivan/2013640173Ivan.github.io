var geometry = new THREE.SphereGeometry( 50, 32, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var sphere = new THREE.Mesh( geometry, material );

var escena = new THREE.Scene();
escena.add(sphere);

