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
 		var num=parseInt(Cn("fenxiang")[0].innerHTML);
 		if(kaiguan){
 			Id("kongxin").setAttribute("src","../images/xihuan_07.png")
 			num+=1;
 			Cn("fenxiang")[0].innerHTML=num;
 			kaiguan=0;
 		}else{
 			Id("kongxin").setAttribute("src","../images/xin1_69.png")
 			num-=1;
 			Cn("fenxiang")[0].innerHTML=num;
 			kaiguan=1;
 		}
 		event.preventDefault();
 	}
 	var sqtj=Id("sqtj");//获取main-top下的ul列表
    var a=sqtj.getElementsByTagName('a');//获取ul下的a
    var fenlei=Cn("fenlei") ;//获取名字叫fenlei这个div
    var img=sqtj.getElementsByTagName("img")
   	for(i=0;i<a.length;i++){//循环每个a标签
    	a[i].index=i 
 		//btn[i]是指定button的第i个按钮;为该按钮添加一个index属性，并将index的值设置为i
     	a[i].onclick=function(event){//按钮的第i个点击事件
    		for(j=0;j<a.length;j++){//循环去掉a的样式，把div隐藏	 
       			removeClass(a[j],"active") //清空按钮的样式
      			removeClass(fenlei[j],"active2")//隐藏div
      			removeClass(img[j],"active3")
      		}
    	addClass(this,"active")//自身添加active
    	addClass(fenlei[this.index],"active2")//this.index是当前div 
    	addClass(img[this.index],"active3")
    	event.preventDefault();
    	}
    }
    var span=Cn("new")[0].getElementsByTagName("span")
    var span2=Cn("price")[0].getElementsByTagName("span")
    var span3=Cn("color")[0].getElementsByTagName("span")
    for(var i=0;i<span.length;i++){
    	span[i].onclick=function(){
    		for(var j=0;j<span.length;j++){
    			removeClass(span[j],"change")
    		}
    		addClass(this,"change")
    	}
    }
    for(var i=0;i<span2.length;i++){
    	span2[i].onclick=function(){
    		for(var j=0;j<span2.length;j++){
    			removeClass(span2[j],"change")
    		}
    		addClass(this,"change")
    	}
    }
    for(var i=0;i<span3.length;i++){
    	span3[i].onclick=function(){
    		for(var j=0;j<span3.length;j++){
    			removeClass(span3[j],"change")
    		}
    		addClass(this,"change")
    	}
    }
}