window.onload=function(){
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
	function Cn(classname){
		return document.getElementsByClassName(classname);
	}
	function Tn(tagname){
		return document.getElementsByTagName(tagname);
	}
	var goods = Cn('store');
	console.log(goods)
	//店铺合计
	function getAllTotal(){
		var price = 0;
		var yunfei=0;
		for(var i = 0;i<goods.length;i++){//遍历商品个数
			if(goods[i].getElementsByClassName("choose")[0].checked == true){
				//商品选中
				price+=parseFloat(goods[i].getElementsByClassName("xiaoji")[0].innerHTML);
				yunfei=parseFloat(document.getElementsByClassName("kuaidi")[i].innerHTML)
			}
		}
		Cn("heji")[0].innerHTML = (price+yunfei).toFixed(2);
	}
	//商品小计
	function getSubTotal(goods){
		var subtotal = 0;
		var youhui=0;
		var a=goods.getElementsByTagName("select")[0][Tn("select")[0].selectedIndex].value
		if(a){
			youhui=parseFloat(a);
		}else{
			youhui=1;
		}
		console.log(youhui)
		subtotal = parseFloat(goods.getElementsByClassName("danjia")[0].innerHTML) * parseInt(goods.getElementsByClassName("shuliang")[0].value)*youhui;
		goods.getElementsByClassName("xiaoji")[0].innerHTML = subtotal.toFixed(2);
	}
	//合计
	function Total(){
		var total=0;
		for(var i=0;i<Cn("heji").length;i++){
			total+=parseFloat(Cn("heji")[i].innerHTML)
		}
		document.getElementById("total").innerHTML=total.toFixed(2);
	}

	// 复选框事件
	var inputChecked = Cn("checked");
	for(var i=0;i<inputChecked.length;i++){
		inputChecked[i].checked=true;
		getAllTotal();
		Total();
	} 
	for(var i = 0;i<inputChecked.length;i++){
		inputChecked[i].onclick = function(){
			if(this.className.indexOf("all")>=0){
				for(var j = 0;j<inputChecked.length;j++){
					inputChecked[j].checked = this.checked;
				}
			}else{
				var kaiguan = 1;
				for(var n = 0,len = Cn("choose");n<len.length;n++){
					if(len[n].checked ==false){
						kaiguan = 0;
					}	
				}
				if(kaiguan == 1){
					for(var m = 0,len=Cn("all");m<len.length;m++){
						Cn("all")[m].checked = true;
					}
				}
			}
			if(this.checked == false){
				for(var m = 0,len=Cn("all");m<len.length;m++){
					Cn("all")[m].checked = false;
				}
			}
			getAllTotal();
			Total();
		}
	}
	for(var i = 0;i<goods.length;i++){
		Cn("yunfei")[i].getElementsByTagName("select")[0].onclick=function(){
			console.log(this.selectedIndex)
			var yunfei1=parseFloat(this[this.selectedIndex].value);
			console.log(yunfei1)
			this.parentNode.getElementsByClassName("kuaidi")[0].innerHTML=yunfei1.toFixed(2);	
		}

	}
	for(var i = 0;i<goods.length;i++){
		goods[i].onclick = function(event){
			var e = event || window.event;
			var tar = e.target || e.srcElement;
			
			if(tar.tagName!="SELECT"){
				var cls = tar.className;
				var num = parseInt(tar.parentNode.parentNode.getElementsByClassName("shuliang")[0].value)
				switch (cls){
					case "jia":
					num+=1;tar.parentNode.parentNode.getElementsByClassName("choose")[0].checked = true;break;
					case "jian":
					if(num>1){
						num-=1;
					}break;
				
				}
				tar.parentNode.parentNode.getElementsByClassName("shuliang")[0].value = num;
				getSubTotal(tar.parentNode.parentNode)
				getAllTotal();
				Total();
			}
		}
	}
	Cn("shuliang")[0].oninput=function(){
		getSubTotal(this.parentNode.parentNode);
		getAllTotal();
		Total();
	}
	for(var i=0;i<document.getElementById("list").getElementsByTagName("span").length;i++){
		if(document.getElementById("list").getElementsByTagName("span")[i].className.indexOf("moren")>=0){
			document.getElementById("list").getElementsByTagName("span")[i].parentNode.parentNode.getElementsByClassName("radio")[0].checked=true;
			addClass(document.getElementById("list").getElementsByTagName("span")[i].parentNode.parentNode,"bg")
			addClass(document.getElementById("list").getElementsByTagName("span")[i].parentNode.parentNode.getElementsByTagName("img")[0],"active")		
			addClass(document.getElementById("list").getElementsByTagName("span")[i].parentNode.parentNode.getElementsByClassName("jisong")[0],"active")		
			addClass(document.getElementById("list").getElementsByTagName("span")[i].parentNode.parentNode.getElementsByClassName("xiugai")[0],"active")
		}
	}
	for(var i=0;i<document.getElementById("list").getElementsByTagName("li").length;i++){
		document.getElementById("list").getElementsByTagName("li")[i].style.cursor="pointer";
	}
	for(var i=0;i<document.getElementById("list").getElementsByTagName("li").length;i++){		
		document.getElementById("list").getElementsByTagName("li")[i].onclick=function(){
			for(var j=0;j<document.getElementById("list").getElementsByTagName("li").length;j++){
				removeClass(document.getElementById("list").getElementsByTagName("li")[j],"bg")	
				removeClass(document.getElementById("list").getElementsByClassName("pic")[j],"active")
				removeClass(document.getElementById("list").getElementsByClassName("jisong")[j],"active")
				removeClass(document.getElementById("list").getElementsByClassName("xiugai")[j],"active")
			}
			this.getElementsByClassName("radio")[0].checked=true;			
			addClass(this,"bg")
			addClass(this.getElementsByClassName("pic")[0],"active")		
			addClass(this.getElementsByClassName("jisong")[0],"active")		
			addClass(this.getElementsByClassName("xiugai")[0],"active")				
		}		
	}	
	document.getElementById("tuichu").onclick=function(event){
		addClass(document.getElementsByClassName('h-m-inner-right')[0],"yincang")
		removeClass(document.getElementById("h-m-inner-right-two"),"yincang")
		event.preventDefault();
	}	
}