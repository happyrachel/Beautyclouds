window.onload=function(){
	function Cn(classname){
		return document.getElementsByClassName(classname)
	}
	Cn("main-left")[0].onclick=function(){
 		var e = event || window.event;
		var tar = e.target || e.srcElement;
		var cls = tar.className;
		switch (cls){
			case "xinlang":window.location.href="http://weibo.com/";break;
			case "weibo":window.location.href="http://t.qq.com/";break;
			case "qiuqiu":window.location.href="http://www.qq.com/";break;
			case "taobao":window.location.href="http://www.taobao.com/";break;
			case "renren":window.location.href="http://www.renren.com/";break;
		}
 	}
 	Cn("login")[0].onclick=function(event){
 		var href=this.getAttribute;
 		if(Cn("xieyi")[0].getElementsByTagName('input')[0].checked){
 			window.location.href="../index.html";
 		}else{
 			Cn("tips")[0].innerHTML="~您还没有勾选协议哟~"
 		}
 		event.preventDefault();
 	}
}