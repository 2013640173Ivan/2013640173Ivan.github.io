function setup () {

cubo 1 = new THREE.Mesh(new THREE.BoxGeometr(1,1,1),new
                        new THREE.MeshNormalMaterial());
cubo 2 = new THREE.Mesh ( new THREE.BoxGeometr(1,1,1),new
                        new THREE.MeshNormalMaterial());
                        
    cubo1.position.x = 0.7;
    cubo2.position.x = -0.7;
    
    camara = new THREE.PerspectiveCamera();
    camara.position.z = 5;
    
    
    escena = new THREE.Scene();
    escena.add(cubo1);
    escena.add(cubo2);
    escena.add(camara);
    
    
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerHeight*.95,
                      window.innerHeight*.95);
                      document.body.appendChild(renderer.domElement);
                      
                      }
                      
                      function loop() {
                           var step = 0.01;
                           
                           
                           cubo.rotation.x += step; 
                           cubo.rotation.y += step;
                           
                           
    
