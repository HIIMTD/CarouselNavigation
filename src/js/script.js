//rewrite function document.getElementById
function byId(id){
    if (typeof(id)==="string") {
        return document.getElementById(id);
    } else {
        return id;
    }
}

var index = 0;
var timer = null;
var imgs = byId("banner").getElementsByTagName("div");
var len = imgs.length;
console.log(len);


function slideImg() {
    var main = byId("main");
    main.onmouseover = function(){

    }

    main.onmouseout = function() {
        timer = setInterval(function() {
            index++;
           
            if (index >= len) {
                index = 0;
            }
            console.log(index);
        }, 3000);
    }
    
}

slideImg();