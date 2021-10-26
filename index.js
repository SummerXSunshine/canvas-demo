// 元素获取
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d");
// 设定画布大小
function resizeCanvas() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}
resizeCanvas();
// 页面缩放改变画布大小
window.addEventListener("resize", resizeCanvas)