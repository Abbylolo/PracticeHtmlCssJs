# PracticeHtmlCssJs

[50 Projects In 50 Days - HTML, CSS & JavaScript](https://github.com/bradtraversy/50projects50days.git)

## 项目介绍

### 一、expanding-cards

### 二、progress-steps

### 三、rotating-nav-animation

### 四、rotating-nav-animation

### 五、blurry-loading

### 六、scroll-animation 滚动盒子

1. **实现效果：** 页面向下滚动盒子左右进入，向上滚动盒子左右滚出
2. **实现方案：**
   - CSS：设置水平移动动画`translateX`。初始值200%视口外，再设置样式show水平移动0显示
   - JS：设置底线高度 `window.innerHeight`，如果当前盒子距离顶部高度`Element.getBoundingClientRect().top`小于底线，设置样式show `Element.classList.add(类名)`，否则移除show `element.classList.remove(类名)`

![image-20260510004532111](assets/scroll-animation.gif)
