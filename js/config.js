var BaseUrl =  "http://103.8.69.108:1663";
var ResourceUrl = 'http://103.8.69.108:1999/ttxinshenshou/';

if(window.location.pathname!='/'
    &&window.location.pathname!='/index.html'
    &&window.location.pathname!='/site/login.html'
    &&window.location.pathname!='/site/wxredd.html')
{
    var wwid=window.localStorage.getItem("wwid");
    if(!wwid)
    {
        localStorage.setItem('enter_url',encodeURIComponent(window.location.href))

        alert('请先登录');
        window.location.href = '/index.html';
    }
}


        