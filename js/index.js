window.onload=function(){
	function Id (id) {
			return document.getElementById(id)
	}
	function Tn(TagName){
		return document.getElementsByTagName(TagName)
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
	var num = 0;
	for(i=0;i<Id("lunbo").getElementsByTagName("a").length;i++){
		Id("lunbo").getElementsByTagName("a")[i].index=i;
		Id("lunbo").onclick=function(){
			var tar = event.target;
			if(tar.getAttribute("href")=="#"){
				var ind=tar.index;
				num=ind;
				var ml = num * -960 + "px";
				Id("main-top-inner").style.marginLeft = ml;
				event.preventDefault();
				for(var j=0;j<Id("lunbo").getElementsByTagName("a").length;j++){
					removeClass(Id("lunbo").getElementsByTagName("a")[j],"beijing");
				}
				addClass(tar,"beijing");
			}			
		}
	}	
	function fun(){
		if(num<3){
			num+=1;
			var ml2 = num * -960 + "px";
			Id("main-top-inner").style.marginLeft = ml2;
			for(var j=0;j<Id("lunbo").getElementsByTagName("a").length;j++){
				removeClass(Id("lunbo").getElementsByTagName("a")[j],"beijing");
			}
			addClass(Id("lunbo").getElementsByTagName("a")[num],"beijing");
		}else{
			Id("main-top-inner").style.marginLeft = 0;
			addClass(Id("lunbo").getElementsByTagName("a")[0],"beijing");
			removeClass(Id("lunbo").getElementsByTagName("a")[3],"beijing");
			num=0;
		}	
	}
	var stop=setInterval(fun,2000)
	Id("main-top").onmouseover=function(){
		clearInterval(stop)
	}
	Id("main-top").onmouseout=function(){
		stop=setInterval(fun,2000)
	}
	console.log(Cn("pic").length)
	for(var i=0;i<Cn("pic").length;i++){
		Cn("pic")[i].onclick=function(){
			window.location.href="pages/xiangqingye.html"
		}
	}
}