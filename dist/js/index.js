// 一起的时间
var TimeDate = Date.parse(new Date());
var lasttime = Date.parse("2019-01-11");
var day = parseInt((TimeDate - lasttime) / (1000 * 60 * 60 * 24));

var str = `                          生日是谁，它快不快乐有什么要紧的。
                          在这个世界上，我们希望你是快乐的。
                          都自由，都拥有。
                          祝你不止生日快乐，以后日日快乐。
                          Wuli兔兔，我们爱你爱你爱你爱你爱你爱你~ `;
//判断手机类型
var audio = document.querySelector('#audio');
function ismobile(test) {
    var u = navigator.userAgent, app = navigator.appVersion;
    if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
        if (window.location.href.indexOf("?mobile") < 0) {
            try {
                if (/iPhone|mac|iPod|iPad/i.test(navigator.userAgent)) {
                    return '0';
                } else {
                    return '1';
                }
            } catch (e) { }
        }
    } else if (u.indexOf('iPad') > -1) {
        return '0';
    } else {
        return '1';
    }
};

var pla = ismobile(1);
if(ismobile(1)==='1'){
    (function () {
        audio.load();
        audio.play();
    })();
}else{
    function forceSafariPlayAudio() {
        audio.load(); // iOS 9   还需要额外的 load 一下, 否则直接 play 无效
        audio.play(); // iOS 7/8 仅需要 play 一下
    }
    audio.addEventListener('play', function () {
        // 当 audio 能够播放后, 移除这个事件
        window.removeEventListener('touchstart', forceSafariPlayAudio, false);
    }, false);
    window.addEventListener('touchstart', forceSafariPlayAudio, false);
}

//监听音乐
window.onload = function () {
    //随机颜色
    function bianse() {
        var r = Math.floor(Math.random() * 100000) % 256;
        var g = Math.floor(Math.random() * 100000) % 256;
        var b = Math.floor(Math.random() * 100000) % 256;
        return huan = 'rgb(' + r + ',' + g + ',' + b + ')';
    }
    var Photo4 = document.querySelector('.photo4');
    var fontIndex = 0;
    var timer;
    var aa = str.length;
    function typeWord() {
        if (aa == fontIndex) {
            clearInterval(timer);
        }
        Photo4.style.color = bianse();
        Str = str.substring(0, fontIndex++) + "_";
        Photo4.innerText = Str;
    }
    timer = setInterval(typeWord, 250);

};
