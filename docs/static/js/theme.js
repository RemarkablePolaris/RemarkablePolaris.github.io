//up键开始
var backTop = document.querySelector(".toTop");

backTop.addEventListener("click", function () {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
})
//up键结束