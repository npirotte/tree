
//THREEJS RELATED VARIABLES 

var scene, 
    camera,
    controls,
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane,
    shadowLight, 
    backLight,
    light, 
    renderer,
    container;

//SCENE
var floor, lion, fan,
    isBlowing = false;

//SCREEN VARIABLES

var HEIGHT,
    WIDTH,
    windowHalfX,
    windowHalfY,
    mousePos = {x:0,y:0};
    dist = 0;

function init(){
  scene = new THREE.Scene();
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;
  aspectRatio = WIDTH / HEIGHT;
  fieldOfView = 60;
  nearPlane = 1;
  farPlane = 2000; 
  camera = new THREE.PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane);
  camera.position.z = 800;  
  camera.position.y = 0;
  camera.lookAt(new THREE.Vector3(0,0,0));    
  renderer = new THREE.WebGLRenderer({alpha: true, antialias: true });
  renderer.setSize(WIDTH, HEIGHT);
  renderer.shadowMapEnabled = true;
  container = document.getElementById('world');
  container.appendChild(renderer.domElement);
  windowHalfX = WIDTH / 2;
  windowHalfY = HEIGHT / 2;
/*  window.addEventListener('resize', onWindowResize, false);
  document.addEventListener('mousemove', handleMouseMove, false);
  document.addEventListener('mousedown', handleMouseDown, false);
  document.addEventListener('mouseup', handleMouseUp, false);
  document.addEventListener('touchstart', handleTouchStart, false);
  document.addEventListener('touchend', handleTouchEnd, false);
  document.addEventListener('touchmove',handleTouchMove, false);*/
  /*
  controls = new THREE.OrbitControls( camera, renderer.domElement);
  //*/
}

function createLights()
{
    light = new THREE.HemisphereLight(0xffffff, 0xffffff, .5)
  
  shadowLight = new THREE.DirectionalLight(0xffffff, .8);
  shadowLight.position.set(200, 200, 200);
  shadowLight.castShadow = true;
  shadowLight.shadowDarkness = .2;
  
  backLight = new THREE.DirectionalLight(0xffffff, .4);
  backLight.position.set(-100, 200, 50);
  backLight.shadowDarkness = .1;
  backLight.castShadow = true;
  
  scene.add(backLight);
  scene.add(light);
  scene.add(shadowLight);
}

function createFan(){
  fan = new Fan();
  fan.threegroup.position.z = 350;
  scene.add(fan.threegroup);
}

var Fan = function()
{
    this.isBlowing = true;
    this.speed = .1;
    this.acc = 0;

    this.redMat = new THREE.MeshLambertMaterial ({
        color: 0xad3525,
        shading: THREE.FlatShading
    });

    this.yellowMat = new THREE.MeshLambertMaterial ({
        color: 0xfdd276, 
        shading:THREE.FlatShading
    });

    var coreGeom = new THREE.BoxGeometry(10,10,20),
        sphereGeom = new THREE.BoxGeometry(10,10,3),
        propGeom = new THREE.BoxGeometry(10,30,2);

    propGeom.applyMatrix( new THREE.Matrix4().makeTranslation(0,25,0));

    this.core = new THREE.Mesh(coreGeom, this.greyMat);

    // propellers

    var prop1 = new THREE.Mesh(propGeom, this.redMat);
    prop1.position.z = 15;
    var prop2 = prop1.clone();
    prop2.rotation.z = Math.PI/2;
    var prop3 = prop1.clone();
    prop3.rotation.z = Math.PI;
    var prop4 = prop1.clone();
    prop4.rotation.z = -Math.PI/2;

    this.sphere = new THREE.Mesh(sphereGeom, this.yellowMat);
    this.sphere.position.z = 15;

    this.propeller = new THREE.Group();
    this.propeller.add(prop1);
    this.propeller.add(prop2);
    this.propeller.add(prop3);
    this.propeller.add(prop4);

    this.threegroup = new THREE.Group();
    this.threegroup.add(this.core);
    this.threegroup.add(this.propeller);
    this.threegroup.add(this.sphere);

}

Fan.prototype.update = function()
{
    this.threegroup.lookAt(new THREE.Vector3(20,80,60));

    this.tPosX = 100;
    this.tPosY = 100;

    this.threegroup.position.x += (this.tPosX - this.threegroup.position.x) /10;
    this.threegroup.position.y += (this.tPosY - this.threegroup.position.y) /10;

    this.targetSpeed = (this.isBlowing) ? .3 : .01;

    /*if (this.isBlowing && this.speed < .05) {
        this.acc += .001;
        this.speed += this.ass;
    }
    else if (!this.isBlowing)
    {
        this.acc = 0;
        this.speed *= .98;
    }*/

    console.log(this.speed);

    this.propeller.rotation.z += this.speed;
}


function loop(){
  render();
  var xTarget = (mousePos.x-windowHalfX);
  var yTarget= (mousePos.y-windowHalfY);
  
  //fan.isBlowing = isBlowing;
  fan.update(xTarget, yTarget);
  /*if(isBlowing) {
    lion.cool(xTarget, yTarget);
  }else{
    lion.look(xTarget, yTarget);
  }*/
  requestAnimationFrame(loop);
}

function render(){
  if (controls) controls.update();
  renderer.render(scene, camera);
}

init();
createLights();
createFan();

loop();
