var container, stats;

var camera, scene, renderer;
var cz = -1000 * 98
var cs = -1000 * 98
init();
animate();

document.addEventListener('touchstart', function (e) {
    e.preventDefault()
    return false;
})

function init() {

    container = document.createElement('div');
    document.body.appendChild(container);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 3000);
    // camera = new THREE.OrthographicCamera(window.innerWidth/-2, window.innerWidth/2 ,window.innerHeight/2, window.innerHeight/-2, 1,5000);
    // camera = new THREE.CinematicCamera( 60, window.innerWidth / window.innerHeight, 199, 1000 );
    camera.position.z = cs;
    scene = new THREE.Scene();

    var light, object;

    // scene.add(new THREE.AmbientLight(0x404040));

    light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0, 1, 0);
    scene.add(light);

    var texture = THREE.ImageUtils.loadTexture('img/TEST.PNG', null, function (t) {
    })
    var material = new THREE.MeshBasicMaterial({
        map: texture, transparent: true
    })

    // var map = new THREE.TextureLoader().load('img/TEST.PNG');
    // // map.wrapS = map.wrapT = THREE.RepeatWrapping;
    // // map.anisotropy = 16;
    //
    // var material = new THREE.MeshLambertMaterial({map: map});


    for (var i = 0; i < 100; i++) {

        object = new THREE.Mesh(new THREE.PlaneGeometry(200, 200, 1, 1), material);
        object.position.set(0, 0, -i * 1000);
        scene.add(object);
    }
    //
    // object = new THREE.Mesh(new THREE.PlaneGeometry(400, 400, 4, 4), material);
    // object.position.set(0, 0, -1000);
    // scene.add(object);


    object = new THREE.AxisHelper(150);
    object.position.set(0, 0, 0);
    scene.add(object);

    object = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 0), 50);
    object.position.set(400, 0, -200);
    scene.add(object);

    //


    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0xf0f0f0)

    renderer.setSize(window.innerWidth, window.innerHeight);

    container.appendChild(renderer.domElement);

    stats = new Stats();
    container.appendChild(stats.dom);

    window.addEventListener( 'resize', onWindowResize, false );

    var h = new Hammer(document);
    console.log(h)
    var h = new Hammer(document)

    var startX = 0
    h.on('panstart', function (e) {
        startX = cz
    })

    h.on('panmove', function (e) {
        console.log(e.deltaY)
        cz = cz - e.deltaY * .2
        // console.log(e)
    })

    h.on('panend', function (e) {
        startX = cz
    })


    //


}

function onDocumentMouseMove(event) {
    event.preventDefault();


}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}

//

function animate() {

    requestAnimationFrame(animate);
    render();
    stats.update();

}

function render() {


    console.log(cz)
    camera.position.z += 20;

    renderer.render(scene, camera);

}
