window.onload=function(){ 
 	function Id(id){
 		return document.getElementById(id)
 	}
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
	document.getElementById("tuichu").onclick=function(event){
		addClass(document.getElementsByClassName('h-m-inner-right')[0],"yincang")
		removeClass(document.getElementById("h-m-inner-right-two"),"yincang")
		event.preventDefault();
	}
 	var kaiguan=1;
 	Id("like").onclick=function(event){
 		var num=parseInt(Cn("fenxiang")[0].getElementsByTagName('span')[0].innerHTML);
 		if(kaiguan){
 			Id("kongxin").setAttribute("src","../images/xihuan_07.png")
 			num+=1;
 			Cn("fenxiang")[0].getElementsByTagName('span')[0].innerHTML=num;
 			kaiguan=0;
 		}else{
 			Id("kongxin").setAttribute("src","../images/xin1_69.png")
 			num-=1;
 			Cn("fenxiang")[0].getElementsByTagName('span')[0].innerHTML=num;
 			kaiguan=1;
 		}
 		event.preventDefault();
 	}
 	Id("tubiao").onclick=function(){
 		var e = event || window.event;
		var tar = e.target || e.srcElement;
		var cls = tar.className;
		switch (cls){
			case "sina":window.location.href="http://weibo.com/";break;
			case "tengxun":window.location.href="http://t.qq.com/";break;
			case "douban":window.location.href="https://www.douban.com/";break;
			case "kongjian":window.location.href="http://qzone.qq.com/";break;
			case "renren":window.location.href="http://www.renren.com/";break;
			case "wangyi":window.location.href="http://www.163.com/";break;
		}
 	}
 	Id("focus").onclick=function(event){
 		if(Id("focus").innerHTML=="+关注"){
 			var fensi=parseInt(Cn("fensi")[1].innerHTML);
 			fensi+=1;
 			Cn("fensi")[1].innerHTML=fensi;
 			Id("focus").innerHTML="已关注";
 		}
 		event.preventDefault();
 	}
 	for(var i=0;i<Id("xiaotu").getElementsByTagName("li").length;i++){
 		Id("xiaotu").getElementsByTagName("li")[i].onclick=function(){
 			var src=this.getElementsByTagName("img")[0].getAttribute("src")
 			Id("datu").setAttribute("src",src)
 			for(var j=0;j<document.getElementsByClassName("suoluetu").length;j++){
 				removeClass(document.getElementsByClassName("suoluetu")[j],"border")
 				removeClass(document.getElementsByClassName("jiantou")[j],"active")
 			}
 			addClass(this.getElementsByTagName("img")[0],"border")
 			addClass(this.getElementsByClassName("jiantou")[0],"active")
 		}
 	}
 	var num=0;
 	Id("huan").onclick=function(event){
 		if (num<3) {
				num = num + 1;
			} else{
				 num = 0;
			};
			var ml = num * -280 + "px";	
			Id("lunbo-inner").style.marginLeft = ml;
			event.preventDefault();
 	}
 	function fun(){
			if(num<3){
				num+=1;
				var ml1 = num * -280 + "px";
				Id("lunbo-inner").style.marginLeft = ml1;
			}else{
				Id("lunbo-inner").style.marginLeft = 0;
				num=0;
			}	
	}
	var stop=setInterval(fun,2000)
	Id("lunbo").onmouseover=function(){
		clearInterval(stop)
	}
	Id("lunbo").onmouseout=function(){
		stop=setInterval(fun,1000)
	}
} 