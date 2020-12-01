function openwin() {
　　window.open ("popup.html", "newwindow", "height=100, width=400,toolbar=no,menubar=no, scrollbars=no, resizable=no, location=no, status=no")
}
//寫成一行



//回到頂端按鈕的功能 以下


//回到頂端按鈕 start
//<![CDATA[
(function () {
$("body").append("<img id='goTopButton' style='display: none; z-index: 5; cursor: pointer;' title='回到頂端'/>");
var img = "http://1.bp.blogspot.com/-zMfrIkyhlVs/Uh7FePoKU8I/AAAAAAAAHnA/WA0H_vbWAWc/s1600/go-top.png",
locatioin = 3/4, // 按鈕出現在螢幕的高度
right = 10, // 距離右邊 px 值
opacity = 0.5, // 透明度
speed = 500, // 捲動速度
$button = $("#goTopButton"),
$body = $(document),
$win = $(window);
$button.attr("src", img);
$button.on({
mouseover: function() {$button.css("opacity", 1);},
mouseout: function() {$button.css("opacity", opacity);},
click: function() {$("html, body").animate({scrollTop: 0}, speed);}
});
window.goTopMove = function () {
var scrollH = $body.scrollTop(),
winH = $win.height(),
css = {"top": winH * locatioin + "px", "position": "fixed", "right": right, "opacity": opacity};
if(scrollH > 20) {
$button.css(css);
$button.fadeIn("slow");
} else {
$button.fadeOut("slow");
}
};
$win.on({
scroll: function() {goTopMove();},
resize: function() {goTopMove();}
});
} )();
//]]>
//回到頂端按鈕 end, Design by WFU BLOG

///回到頂端按鈕的功能 以上





//區域背景換色 以下

var a = document.getElementsByTagName("header")[0];
var b = document.getElementsByTagName("nav")[0];
var c = document.getElementsByTagName("article01")[0];
var d = document.getElementsByTagName("article02")[0];
var e = document.getElementsByTagName("Footer")[0];




function mycolor01() {
  a.style.backgroundColor = "red";
}
function mycolor02() {
  a.style.backgroundColor = "white";
}
function mycolor03() {
  a.style.backgroundColor = "gray";
}   
function mycolor04() {
  a.style.backgroundColor = "#f88d01";
}
function mycolor11() {
  b.style.backgroundColor = "red";
}
function mycolor12() {
  b.style.backgroundColor = "white";
}
function mycolor13() {
  b.style.backgroundColor = "gray";
}   
function mycolor14() {
  b.style.backgroundColor = "#f88d01";
}
function mycolor21() {
  c.style.backgroundColor = "red";
}
function mycolor22() {
  c.style.backgroundColor = "white";
}
function mycolor23() {
  c.style.backgroundColor = "gray";
}   
function mycolor24() {
  c.style.backgroundColor = "#f88d01";
}
function mycolor31() {
  d.style.backgroundColor = "red";
}
function mycolor32() {
  d.style.backgroundColor = "white";
}
function mycolor33() {
  d.style.backgroundColor = "gray";
}   
function mycolor34() {
  d.style.backgroundColor = "#f88d01";
}
function mycolor41() {
  e.style.backgroundColor = "red";
}
function mycolor42() {
  e.style.backgroundColor = "white";
}
function mycolor43() {
  e.style.backgroundColor = "gray";
}   
function mycolor44() {
  e.style.backgroundColor = "#f88d01";
}
function mycolor00() {
  a.style.backgroundcolor = "#52545E";
  b.style.backgroundColor = "#D4E6F8"; 
  c.style.backgroundcolor = "#f1f1f1";
  d.style.backgroundcolor = "#f1f1f1";
  e.style.backgroundcolor = "#CBB29D";
}
//區域背景換色 以上








































/*document.getElementById('userinurl').addEventListener('click', function(e) {
   


});
*/







function change(){

    //x++;
     document.getElementById("youtube-vedio").src="https://www.youtube.com/embed/"+fNodename;
     
     //document.getElementById("youtube-vedio").src="https://www.youtube.com/watch?v="+x+".jpg";
    //https://www.youtube.com/watch?v=iC1rEdLGerw
    
  }



