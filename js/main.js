window.addEventListener("load",function () {
    var imgs=this.document.querySelectorAll(".scroll img");
    var dots=this.document.querySelectorAll(".scroll .dots span");
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].setAttribute("data-index",i);
    }


    let current = this.document.querySelector(".scroll .current");
    var currentIndex=current.getAttribute("data-index");
    let square = this.document.querySelector(".scroll .square");
    var squareIndex=current.getAttribute("data-index");

    let left = this.document.querySelector(".leftg");
    let right = this.document.querySelector(".rightg");
    left.addEventListener("mouseenter",function (){
        this.style.backgroundPosition="0 0"
    })
    left.addEventListener("mouseleave",function (){
        this.style.backgroundPosition="-83px 0"
    })
    right.addEventListener("mouseenter",function (){
        this.style.backgroundPosition="-41px 0"
    })
    right.addEventListener("mouseleave",function (){
        this.style.backgroundPosition="-120px 0"
    })
    function changnameImg() {
        if (currentIndex<4){
            imgs[currentIndex].classList.remove("current");
            dots[currentIndex].classList.remove("square");
            imgs[++currentIndex].classList.add("current");
            dots[currentIndex].classList.add("square");
        }else {
            imgs[currentIndex].classList.remove("current");
            dots[currentIndex].classList.remove("square");
            currentIndex=1
            imgs[--currentIndex].classList.add("current");
            dots[currentIndex].classList.add("square");
        }
    }
    right.addEventListener("click",changnameImg)
    left.addEventListener("click",function () {
        if (currentIndex>0){
            imgs[currentIndex].classList.remove("current");
            dots[currentIndex].classList.remove("square");
            imgs[--currentIndex].classList.add("current");
            dots[currentIndex].classList.add("square");
        }else {
            // imgs[currentIndex].classList.remove("current");
            // dots[currentIndex].classList.remove("square");
            // imgs[--currentIndex].classList.add("current");
            // dots[currentIndex].classList.add("square");
        }
    })
    this.setInterval(changnameImg,5000)
    for (let i = 0; i < dots.length; i++) {
        dots[i].setAttribute("data-index",i);
        dots[i].addEventListener("click",function () {
            // alert("!")
            let index=dots[i].getAttribute("data-index");
            if (currentIndex!=index){
                imgs[currentIndex].classList.remove("current");
                dots[currentIndex].classList.remove("square");
                currentIndex=index;
                imgs[currentIndex].classList.add("current");
                dots[currentIndex].classList.add("square");
            }
        })
    }

    var items=document.querySelectorAll(".goods .item");
    var list1=document.querySelectorAll(".goods .goodList1 .list1");
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener("click",function () {
            // alert("!")
            document.querySelector(".goods .action").classList.remove("action");
            document.querySelector(".goods .actions").classList.remove("actions")
            this.classList.add("action")
            list1[i].classList.add("actions")
        })
    }

    var lis=document.querySelectorAll(".navigation li");
    var boxs=document.querySelectorAll(".cc");
    for (let i = 0; i < lis.length; i++) {
        lis[i].addEventListener("click",function () {
            if (document.querySelector(".cg")){
                document.querySelector(".cg").classList.remove("cg");
            }
            this.classList.add("cg")
            if (i==lis.length-1){
                document.documentElement.scrollTop=0
            }else {
                let long=boxs[i].offsetTop-60;
                document.documentElement.scrollTop=long;
            }


        })
    }

})

window.addEventListener("load",function starttime() {
    var h11=this.document.querySelector(".daojishi");
    time(h11,'2023/1/22 10:00:00');     // 2022年春节时间
    ptimer = setTimeout(starttime,1000); // 添加计时器

})
function time(obj,futimg){
    var nowtime = new Date().getTime(); // 现在时间转换为时间戳
    var futruetime =  new Date(futimg).getTime(); // 未来时间转换为时间戳
    var msec = futruetime-nowtime; // 毫秒 未来时间-现在时间
    var time = (msec/1000);  // 毫秒/1000
    var day = parseInt(time/86400); // 天  24*60*60*1000
    var hour = parseInt(time/3600)-24*day;    // 小时 60*60 总小时数-过去的小时数=现在的小时数
    var minute = parseInt(time%3600/60); // 分 -(day*24) 以60秒为一整份 取余 剩下秒数 秒数/60 就是分钟数
    var second = parseInt(time%60);  // 以60秒为一整份 取余 剩下秒数
    obj.innerHTML="<span>"+hour+"</span>:<span>"+minute+"</span>:<span>"+second+"</span>"

}

window.addEventListener("scroll",function (){
    let tt=document.querySelector(".fixedSearch");
    if (this.document.documentElement.scrollTop>=200){
        tt.style.top='0'
    }else {
        tt.style.top='-52px'
    }
    //
    var navigation=document.querySelector(".site .navigation");
    if (this.document.documentElement.scrollTop>=580){
        // navigation.style.top='690px'
        // alert(111)
        navigation.classList.add("tl")
    }else {
        navigation.classList.remove("tl")
    }
})
