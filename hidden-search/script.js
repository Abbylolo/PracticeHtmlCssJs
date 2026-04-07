const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

// classList.toggle用来切换某个 CSS 类的存在状态：如果元素上没有指定的类，则添加该类。如果元素上已经有指定的类，则移除该类。
btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})