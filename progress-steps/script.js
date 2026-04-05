/**
 * 1、设置当前活动节点变量
 * 2、监听点击事件，更新active样式
 * 3、注意当前节点边界 以及 设置按钮的不可点击
 */
let currentActive = 1;
const circles = document.querySelectorAll(".circle"),
    progress = document.getElementById("progress"),
    prev = document.getElementById("prev"),
    next = document.getElementById("next");

next.addEventListener("click", () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
});

prev.addEventListener("click", () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
});

function update() {
    // 更新圆圈和进度条样式
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });
    const actives = document.querySelectorAll('.active')
    progress.style.width =
        ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

    // 更新按钮样式
    if (currentActive === 1) {
        prev.disabled = true
    } else {
        prev.disabled = false
    }

    if (currentActive === circles.length) {
        next.disabled = true
    } else {
        next.disabled = false
    }
}
