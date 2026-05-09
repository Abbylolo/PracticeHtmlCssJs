/**
 * 设置底线高度，如果当前盒子距离顶部高度top小于底线，设置class-show，否则移除show
 */
const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)
// 初始化检查一次
checkBoxes()

function checkBoxes() {
    boxes.forEach(box => {
        // 设置底线高度
        const triggerBottom = window.innerHeight / 5 * 4
        // 获取当前盒子距离顶部高度top
        const top = box.getBoundingClientRect().top
        if (top < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}