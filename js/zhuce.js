window.onload=function(){
	function Cn(classname){
		return document.getElementsByClassName(classname)
	}
	function addClass(obj,classname){
			var old =obj.getAttribute("class")
			if(old){
				obj.setAttribute("class",old+" "+classname)
			}else{
				obj.setAttribute("class",classname)
			}
		}
	function removeClass(obj,classname){
		var old=obj.className;
		var arr=old.split(" ")
		function fil(num){
			return num!==classname
		}
		var newArr=arr.filter(fil)
		var newClass=newArr.join(" ")
		obj.className=newClass;
	}
	Cn("main-right")[0].onclick=function(){
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
 	Cn("mail")[0].onblur=function(){
		var re=/^[0-9a-zA-z][_0-9A-z]{3,20}@(qq|sina|163|soho).(com|cn|com.cn)$/;
	    var txt=this.value;
		if (re.exec(txt)){
			document.getElementById("list").getElementsByTagName('p')[0].innerHTML="√";
			addClass(document.getElementById("list").getElementsByTagName('p')[0],"green")
		} else{
			document.getElementById("list").getElementsByTagName('p')[0].innerHTML="×请输入正确邮箱格式";
			addClass(document.getElementById("list").getElementsByTagName('p')[0],"red")
		};
	}
	Cn("mail")[0].onclick=function(){
		document.getElementById("list").getElementsByTagName('p')[0].innerHTML="";
	}
	Cn("mima1")[0].onblur=function(){
		var re1=/\S{6,20}$/;
	    var txt2=this.value;
		if (re1.exec(txt2)) {
			document.getElementById("list").getElementsByTagName('p')[1].innerHTML="√";
			addClass(document.getElementById("list").getElementsByTagName('p')[1],"green")
		} else{
			document.getElementById("list").getElementsByTagName('p')[1].innerHTML="×密码格式不正确";
			addClass(document.getElementById("list").getElementsByTagName('p')[1],"red")
		}
	}
	Cn("mima1")[0].onclick=function(){
		document.getElementById("list").getElementsByTagName('p')[1].innerHTML="";
	}
	Cn("mima2")[0].onblur=function(){
		var txt3=Cn("mima1")[0].value
		var txt4=this.value
		if (txt3==txt4&&txt3!="") {
			document.getElementById("list").getElementsByTagName('p')[2].innerHTML="√";
			addClass(document.getElementById("list").getElementsByTagName('p')[2],"green")
		} else{
			document.getElementById("list").getElementsByTagName('p')[2].innerHTML="×两次输入的密码不一致";
			addClass(document.getElementById("list").getElementsByTagName('p')[2],"red")
		};
	}
	Cn("mima2")[0].onclick=function(){
		document.getElementById("list").getElementsByTagName('p')[2].innerHTML="";
	}
	document.getElementById("tuichu").onclick=function(event){
		addClass(document.getElementsByClassName('h-m-inner-right')[0],"yincang")
		removeClass(document.getElementById("h-m-inner-right-two"),"yincang")
		event.preventDefault();
	}
}