var camera, scene, renderer, controls;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

function load_3d_model(container) {
    obj_file = jQuery(container).data('obj-file');
    mtl_file = jQuery(container).data('mtl-file');
    console.log(obj_file, mtl_file);
    //init(obj_file, mtl_file, container);
    init('./javascripts/Polyeder.obj','./javascripts/Polyeder.mtl',container);
    animate();
}

function init(obj_file, mtl_file, container) {
    camera = new THREE.PerspectiveCamera( 5, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.set(0, 10, 50);
    // scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xffffff );
    ambientLight = new THREE.AmbientLight( 0xcccccc, 0.8 );
    scene.add( ambientLight );
    pointLight = new THREE.PointLight( 0xffffff, 0.8 );
    camera.add( pointLight );
    scene.add( camera );
    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );
    // controls
    controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.5;
    controls.screenSpacePanning = false;
    controls.minDistance = 50;
    controls.maxDistance = 500;
    controls.maxPolarAngle = Math.PI / 2;
    controls.autoRotate = true;
    //controls.autoRotateSpeed = 0.5;
    controls.enabled = false;
    //
    window.addEventListener( 'resize', onWindowResize, false );
    // model
    var onProgress = function ( xhr ) {
        if ( xhr.lengthComputable ) {
            var percentComplete = xhr.loaded / xhr.total * 100;
            console.log( Math.round( percentComplete, 2 ) + '% downloaded' );
        }
    };
    var onError = function ( xhr ) { };
    THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );
    new THREE.MTLLoader()
        .load( mtl_file, function ( materials ) {
            materials.preload();
            new THREE.OBJLoader()
                .setMaterials( materials )
                .load( obj_file, function ( object ) {
                    console.log("B")
                    // Rotate object manually to get a nice view on it.
                    object.rotation.x = -Math.PI/180*29;
                    object.rotation.z = Math.PI/180*0;
                    object.rotation.y = Math.PI/180*0;
                    // Center object.
                    // https://stackoverflow.com/questions/28848863/threejs-how-to-rotate-around-objects-own-center-instead-of-world-center/28860849#28860849
                    var box = new THREE.Box3().setFromObject(object);
                    box.getCenter(object.position);
                    object.position.multiplyScalar(-1);
                    var pivot = new THREE.Group();
                    scene.add(pivot);
                    pivot.add(object);
                }, onProgress, onError );
        } );
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate() {
    requestAnimationFrame( animate );
    controls.update();
    render();
}

function render() {
    renderer.render( scene, camera );
}
