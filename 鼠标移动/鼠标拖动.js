/**
 * Created by Administrator on 2017-06-11.
 */
/*window.onload = function(){
    var drop = document.getElementById("drop");
    var d_box = document.getElementById("d_box");

    //鼠标按下在页面中的位置
    drop.onmousedown = function(event){
        var event =  event || window.event;
        var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
        var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;
        //鼠标按下在小盒子中的位置
        var l = pageX - d_box.offsetLeft;
        var t = pageY - d_box.offsetTop;

        //鼠标在页面上移动
        document.onmousemove = function(event){
        var event =  event || window.event;
        var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
        var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;
        d_box.style.left = pageX - l + "px";
        d_box.style.top = pageY - t + "px";
    }
}

//鼠标弹起 盒子就不应该跟着了
document.onmouseup = function () {
    document.onmousemove = null;
};
}*/

$(function(){
    $("#drop").on("mousedown",function(event){
        var event = event || window.event;
        var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
        var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;
        //当鼠标按下时的瞬间鼠标在小盒子中的位置
        var l = pageX - $("#d_box").offset().left;
        var t = pageY- $("#d_box").offset().top;
        $(document).on("mousemove",function(event){
            //获得鼠标在页面中的位置
            var event = event || window.event;
            var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
            var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;
            var le = pageX-l;
            var to = pageY-t;
            $("#d_box").offset({"left":le});
            $("#d_box").offset({"top":to});

        });
    });

    $("#drop").on("mouseup",function(){
        $(document).off("mousemove");
    })
});