import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// 从threejs扩展库引入gui.js
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
const gui = new GUI();//创建GUI对象 
gui.domElement.style.right = '100px';
gui.domElement.style.width = '500px';

//场景
const scene = new THREE.Scene();


// 一个网格模型
const geometry = new THREE.BoxGeometry(50, 100, 100);//一个立方体
const material = new THREE.MeshLambertMaterial({color: 0x00ffff});//颜色
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);



//辅助观察的坐标系
const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);


//光源设置
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);//创建一个平行光，参数分别是光的颜色、强度
directionalLight.position.set(100, 60, 50);
scene.add(directionalLight);
const ambient = new THREE.AmbientLight(0xffffff, 0.4);//创建环境光
scene.add(ambient);

// 光照强度属性.intensity
console.log('ambient.intensity',ambient.intensity);//0.4
// 通过GUI改变mesh.position对象的xyz属性
gui.add(ambient, 'intensity', 0, 2.0);//四个参数：对象、属性名称、最小值、最大值
setInterval(() => {
    console.log('ambient.intensity',ambient.intensity);
}, 1000);

//渲染器和相机
const width = window.innerWidth;//当前窗口的宽度，如果窗口被伸缩了，那么获取到的宽度会响应缩小
console.log('width', width);
const height = window.innerHeight;
console.log('height', height);
const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
camera.position.set(292, 223, 185);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);//设置渲染器的尺寸
document.body.appendChild(renderer.domElement);//将渲染器的dom元素添加到body



// 渲染循环
function render() {
    renderer.render(scene, camera);//将场景和相机添加到渲染器
    requestAnimationFrame(render);
}
render();

// 初始化一个控制器，这个控制器用于旋转、平移、拖拽、缩放
const controls = new OrbitControls(camera, renderer.domElement);

// 画布跟随窗口变化，这个是指，当窗口大小发生变化时，画布中的内容如果是居中展示的，那么画布中内容也会跟随窗口变化，居中展示
window.onresize = function () {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
};


// threejs基本的使用就是：导库、初始化场景、添加光源、初始化相机、初始化渲染器、初始化控制器