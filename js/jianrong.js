function getClass(classname,obj){
	obj=obj||document
	//obj===undefined?document:obj
	if (document.getElementsByClassName) {
		 return obj.getElementsByClassName(classname) 
	}
	else{
		 var arr=[]
		 var all=document.getElementsByTagName("*")
		 for (var i = 0; i <all.length; i++) {
		 	if(checkClass(all[i].className,classname)){
		 		arr.push(all[i])
		 	}

		 } return arr
		 	}
	}
function checkClass(classStr,classname){
	     var arr=classStr.split(" ")
	for (var i = 0; i <arr.length; i++) {
		   if (arr[i]==classname) {
               return true
		   }		   
		   	return false		   
	}
}
//获取设置文本内容
//value为真，设置文本
function operateText(obj,value){
	if (value!=undefined) {
      if (obj.innerText) {
      	  obj.innerText=value}
      	 else{
      	  obj.textContent=value
      	 }
  
	}else{
		if (obj.innerText) {
			return obj.innerText
		}
		else(obj.textContent)
			{return obj.textContent}
		
	}
}
//行内样式和外部样式通用的获取方法
function getStyle(obj,shuxing){
	if (window.getComputedStyle) {
		return window.getComputedStyle(obj,null)[shuxing]
	}
	else{
		return obj.currentStyle[shuxing]
	}
}

function $(selecter,range){
	if (typeof(selecter)=="function") {
		window.onload=function(){
			selecter()
		}
	}
	else if(typeof(selecter)=="string"){
	range=range||document
	// range==undefined?document:range
	selecter=selecter.replace(/^\s*|\s*$/g,"")
    if (selecter.charAt(0)==".") {
      return getClass(selecter.substring(1),range)
    }
    else if (selecter.charAt(0)=="#") {
      return range.getElementById(selecter.substring(1))
    }
    else if(/^[a-zA-Z][a-zA-Z0-9]{0,10}$/.test(selecter))
      return range.getElementsByTagName(selecter)
    else if(/^<[a-zA-Z][a-zA-Z0-9]{0,10}>$/.test(selecter))
      return range.createElement(selecter.slice(1,-1))
}

	}

//闭包实现选项卡
// var position
// for (var i = 0; i < position.length; i++) {
// 	(function(n){
// 		position[n].onmouseover=function(){
// 	   div[n].style.display="block"
// 	}
// 		position[n].onmouseout=function(){
// 	   div[n].style.display="none"
// 	}
// })(i)
// }


//获取指定对象的子元素集合
// type 指定获取元素节点的类型
//type为true获得元素节点,如果是false,获得有意义的文本
//和元素节点
 function getChilds(obj,type){
 	var arr=[]
 	var get=obj.childNodes
 	   type=type===undefined?true:type
       if (type) {
       	for (var i = 0; i <get.length; i++) {
       		if (get[i].nodeType==1) {
       			arr.push(get[i])
       		}
       	}

       }
       else{
    for (var i = 0; i <get.length; i++) {
     if (get[i].nodeType==1||get[i].nodeType==3
     	&&get[i].nodeValue.replace(/^\s*|\s*&/g,"")) {
       			
              arr.push(get[i])      
       		}
       	}

       } return arr
 }

function firstChild(){
	
}
// function randomChild(obj,num){
// 	var childs=getChilds(obj)
// 	return childs[num];
// }
// function firstChild(obj){
// return getChilds(obj)[0]
 
// }
// function lastChild(obj){
//  return getChilds(obj)[getChilds(obj).length-1];
// }

//    function getNext(obj){
//     var next=obj.nextSibling;
//     if(next==null){
//       return false;
//     }
//     while(next.nodeType==3||next.nodeType
//     	==8){
//       next=next.nextSibling;
//       if(next==null){
//         return false;
//       }
//     }
//     return next;
//    }

//插入到下一个
   // function insertAfter(newobj,obj,type){
   //   var next=getNext(obj,type);
   //   var parent=obj.parentNode;
   //    if(next){
   //       parent.insertBefore(newobj,next);
   //     }
   //     else{
   //       parent.appendChild(newobj);
   //     }

   // }

//节点轮播
// var win1=$(".win")
// for (var i = 0; i <win1.length; i++) {
// 	lunbo(win1[i],i+1)
// }
// function lunbo(){
// 	var imgBox=$(".imgBox",obj)[0]
// 	var as=$("a",imgBox)
// 	var aw=parseInt(getStyle(as[0],"width"))
// 	+parseInt(getStyle(as[0],"margin-right"))
// 	var btnL=$(".btnL",obj)[0];
// 	var btnR=$(".btnR",obj)[0]==
// }