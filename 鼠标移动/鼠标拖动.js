/**
 * Created by Administrator on 2017-06-11.
 */
/*window.onload = function(){
    var drop = document.getElementById("drop");
    var d_box = document.getElementById("d_box");

    //��갴����ҳ���е�λ��
    drop.onmousedown = function(event){
        var event =  event || window.event;
        var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
        var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;
        //��갴����С�����е�λ��
        var l = pageX - d_box.offsetLeft;
        var t = pageY - d_box.offsetTop;

        //�����ҳ�����ƶ�
        document.onmousemove = function(event){
        var event =  event || window.event;
        var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
        var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;
        d_box.style.left = pageX - l + "px";
        d_box.style.top = pageY - t + "px";
    }
}

//��굯�� ���ӾͲ�Ӧ�ø�����
document.onmouseup = function () {
    document.onmousemove = null;
};
}*/

$(function(){
    $("#drop").on("mousedown",function(event){
        var event = event || window.event;
        var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
        var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;
        //����갴��ʱ��˲�������С�����е�λ��
        var l = pageX - $("#d_box").offset().left;
        var t = pageY- $("#d_box").offset().top;
        $(document).on("mousemove",function(event){
            //��������ҳ���е�λ��
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