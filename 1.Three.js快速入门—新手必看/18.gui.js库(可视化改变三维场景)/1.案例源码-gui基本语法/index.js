
// 从threejs扩展库引入gui.js
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';


//创建一个GUI对象，你可以看到浏览器右上角多了一个交互界面，GUI本质上就是一个前端js库。
const gui = new GUI();//......就这一句话，就可以让右上角有一个GUI的交互界面框框
//改变交互界面style属性
gui.domElement.style.right = '0px';//设置右上角gui框距离右侧的距离
gui.domElement.style.width = '300px';//设置gui框的宽度


//创建一个对象，对象属性的值可以被GUI库创建的交互界面改变
const obj = {
    x: 30,
    y: 60,
    z: 100,
    alpha: 300,
};//创建一个gui对象，并赋一个初始值
// gui界面上增加交互界面，改变obj对应属性
gui.add(obj, 'x', 0, 100);
gui.add(obj, 'y', 0, 200);
gui.add(obj, 'z', 0, 300);
gui.add(obj, 'alpha', 0, 300);//调用gui.add 给gui库对象中的不同属性赋两个最值

// 可以不停地打印obj的值，这样通过gui界面拖动改变obj对象属性的的时候，便于观察obj的变化
setInterval(function () {
    // console.log('x', obj.x);
    // console.log('y',obj.y);
    // console.log('z',obj.z);
    console.log('alpha',obj.alpha);
}, 1000) //间隔1s循环打印alpha的值，如果gui界面有拖动，那么alpha的值也会跟着变



