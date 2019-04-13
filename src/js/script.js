//rewrite function document.getElementById
function byId(id) {
    if (typeof (id) === "string") {
        return document.getElementById(id);
    } else {
        return id;
    }
}

var index = 0;
var timer = null;
var imgs = byId("banner").getElementsByTagName("div");
var len = imgs.length;

var dots = byId("dots").getElementsByTagName("span");
var prev = byId("prev");
var next = byId("next");
var menu = byId("menu-content");
var menuItems = menu.getElementsByClassName("menu-item");
var subMenu = byId("sub-menu");
var innerBox = subMenu.getElementsByClassName("inner-box");

function slideImg() {
    var main = byId("main");
    main.onmouseover = function () {
        if (timer) {
            clearInterval(timer);
        }
    }

    main.onmouseout = function () {
        timer = setInterval(function () {
            index++;

            if (index >= len) {
                index = 0;
            }

            //switch imgs
            changeImg();
        }, 3000);
    }
    main.onmouseout();
    //iterate all dots
    for (let i = 0; i < len; i++) {
        dots[i].id = i;
        dots[i].onclick = function () {
            // alert(this.id);
            //change index to current img
            index = this.id;

            changeImg();
        }
    }

    //next img button
    next.onclick = function () {
        index++;
        if (index >= len) {
            index = 0;
        }
        console.log(index);
        changeImg();
    }

    //previous img button
    prev.onclick = function () {
        index--;
        if (index < 0) {
            index = len - 1;
        }
        changeImg();
    }

    //menu and sub menu
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].setAttribute("data-index",i);

        menuItems[i].onmouseover = function() {
            subMenu.className = "sub-menu";
            var idx = this.getAttribute("data-index");
            for (let j = 0; j < innerBox.length; j++) {
                innerBox[j].style.display = "none";
                menuItems[j].style.background = "none";
            }
            menuItems[idx].style.background = 'rgba(0,0,0,0.1)';
            innerBox[idx].style.display = "block";
        }
        
    }

    menu.onmouseout = function () {
        subMenu.className = "sub-menu hide";
    }

    subMenu.onmouseover = function(){
        this.className = "sub-menu";
    }

    subMenu.onmouseout = function () {  
        subMenu.className = "sub-menu hide";
    }
}

//function switch img
function changeImg() {
    // console.log(index);
    //set other pics display to none
    for (let i = 0; i < len; i++) {
        imgs[i].style.display = 'none';
        dots[i].className = "";
    }
    imgs[index].style.display = 'block';
    dots[index].className = "active";

}

slideImg();