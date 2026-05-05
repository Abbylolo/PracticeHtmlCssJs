const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0
let int = setInterval(blurring, 30)
function blurring() {
    load++
    if (load > 99) {
        clearInterval(int)
    }
    loadText.innerText = `${load}%`
    loadText.style.opacity = 1 - load / 100
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// 作用：将一个范围的数字映射到另一个范围
// 例如：将0-100映射到0-1
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}