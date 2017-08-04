/**
 * Created by Administrator on 2017-06-11.
 */
window.onload = function (){
    var ss = document.getElementById("s");
    var mm = document.getElementById("m");
    var hh = document.getElementById("h");
    function clock(){
        var d = new Date();
        var ms = d.getMilliseconds();
        var s = d.getSeconds() + ms /1000;
        var m = d.getMinutes() + s / 60;
        var h = d.getHours() + m / 60;
        ss.style.transform = "rotate(" + (s*6 ) + "deg)";
        mm.style.transform = "rotate(" + (m*6 ) + "deg)";
        hh.style.transform = "rotate(" + (h*30) + "deg)";

    };
    setInterval(clock,100);
    
};