window.onload=function(){
var img1=$(".bdx")
var img=$(".slb")
var lis=$(".lis")
var movein=$(".bannerbox")[0]
var btnL=$(".btnL")[0]
var btnR=$(".btnR")[0]
var now=0
var flag=true
var t=setInterval(move,2000)
   function move (){ 
    now++
    if (now==img1.length) {
    	now=0
    }
    for (var i = 0; i < img1.length; ++i) {
        animate(img1[i],{opacity:0},2000,Tween.Quad.easeOut)
    	animate(img[i],{opacity:0},2000,Tween.Quad.easeOut)
    	lis[i].style.backgroundColor=""
    }
    animate(img[now],{opacity:1},1000,Tween.Quad.easeOut)
    animate(img1[now],{opacity:1},1000,Tween.Quad.easeOut,function(){flag=true})
    lis[now].style.backgroundColor="#e5004f"
}

  movein.onmouseover=function(){
      clearInterval(t)
      btnL.style.display="block"
      btnR.style.display="block"
  }
  movein.onmouseout=function(){
      t=setInterval(move,2000)
      btnL.style.display="none"
      btnR.style.display="none"
  }

  for (var i = 0; i < lis.length; i++) {
  	lis[i].index=i
  	lis[i].onclick=function(){
  		for (var i = 0; i < lis.length; i++) {
  		  lis[i].style.backgroundColor=""
        animate(img1[i],{opacity:0},1000)
  		  animate(img[i],{opacity:0},1000)
  		}
  		  this.style.backgroundColor="#e5004f"

  		  animate(img1[this.index],{opacity:1},1000,Tween.Quad.easeOut,function(){flag=true})

  		  animate(img[this.index],{opacity:1},1000,Tween.Quad.easeOut,function(){flag=true})
  	}
  }

   btnL.onclick=function(){
      if (flag==false) {
         return
      }
      flag=false

      move1()


   }
   btnR.onclick=function(){
      if (flag==false) {
         return
      }
      flag=false
      move()
   }
   function move1 (){  
    now--
    if (now<0) {
        now=img.length-1
    }
   for (var i = 0; i < img1.length; ++i) {
        animate(img1[i],{opacity:0},2000,Tween.Quad.easeOut)
      animate(img[i],{opacity:0},2000,Tween.Quad.easeOut)
      lis[i].style.backgroundColor=""
    }
    animate(img[now],{opacity:1},1000,Tween.Quad.easeOut)
    animate(img1[now],{opacity:1},1000,Tween.Quad.easeOut,function(){flag=true})
    lis[now].style.backgroundColor="#e5004f"
  }

var slc=$(".chaozhi3")
var box=$(".chaozhi4")
var sanjiao=$(".sanjiao")
sanjiao[0].style.borderBottomColor="#e5004f"
 for (var i = 0; i <slc.length; i++) {
      slc[i].aa=i
      slc[i].onmouseover=function(){
        for (var i = 0; i <slc.length; i++) {
          box[i].style.zIndex="5"
          slc[i].style.borderBottom= "5px solid black"
          slc[i].style.fontWeight="500"
          sanjiao[i].style.display="none"
        }
        this.style.borderBottom= "5px solid #e5004f"
        box[this.aa].style.zIndex="10"
        this.style.fontWeight="600"
        sanjiao[this.aa].style.borderBottomColor="#e5004f"
        sanjiao[this.aa].style.display="block"
 }
}
var slc1=$(".baihuo5")
var box1=$(".baihuo6")
var sanjiao1=$(".sanjiao11")
sanjiao1[0].style.display="block"
 for (var i = 0; i <slc1.length; i++) {
      slc1[i].bb=i
      slc1[i].onmouseover=function(){
        console.log(sanjiao1.length)
        for (var i = 0; i <slc1.length; i++) {
          box1[i].style.zIndex="5"
          slc1[i].style.borderBottom= "3px solid black"
          slc1[i].style.fontWeight="500"
          sanjiao1[i].style.display="none"
        }
        this.style.borderBottom= "3px solid #e5004f"
        box1[this.bb].style.zIndex="10"
        this.style.fontWeight="600"
        sanjiao1[this.bb].style.borderBottomColor="#e5004f"
        sanjiao1[this.bb].style.display="block"
  }
 }

 //小轮播开始
 function xlb(fanwei){
var sst=$(fanwei)[0]
var ytt=setInterval(ytxmove,2000);
var ytimg=$("img",sst)
var ytnow=0 
var ytnext=0 
var ytkuan=parseInt(getStyle(ytimg[0],"width"))
var btnL2=$(".btnL2",sst)[0]
var btnR2=$(".btnR2",sst)[0]
var redpt=$(".redpt",sst)[0]
var redli=$("li",redpt)
var ytflag=true
function ytxmove(){
   ytnext=ytnow+1
   if (ytnext==ytimg.length) {
       ytnext=0
   }
   for (var i = 0; i <ytimg.length; i++) {
      redli[i].style.background=""
   }
   console.log(ytnow,ytnext)
   ytimg[ytnext].style.left=ytkuan+"px"
   animate(ytimg[ytnow],{left:-ytkuan},1000)
   animate(ytimg[ytnext],{left:0},1000,function(){
    ytflag=true
   })
   redli[ytnext].style.background="#e5004f"
   ytnow=ytnext
}
sst.onmouseover=function(){
  btnL2.style.display="block"
  btnR2.style.display="block"
  clearInterval(ytt)
}
sst.onmouseout=function(){
  btnL2.style.display="none"
  btnR2.style.display="none"
  ytt=setInterval(ytxmove,2000)
}
btnL2.onclick=function(){
  if (ytflag==false) {
    return
  }
  ytflag=false
  ytxmove()
}
btnR2.onclick=function(){
  if (ytflag==false) {
    return
  }
  ytflag=false
  ytxmove1()
}
for (var i = 0; i <ytimg.length; i++) {
  redli[i].ytx=i
  redli[i].onclick=function(){
    if (ytflag==false) {
    return
  }
  ytflag=false
    for (var i = 0; i <ytimg.length; i++) {
      redli[i].style.background=""
    }
    if (this.ytx>ytnext) {
   ytimg[this.ytx].style.left=-ytkuan+"px"
   animate(ytimg[ytnow],{left:ytkuan},1000)
   animate(ytimg[this.ytx],{left:0},1000,function(){
    ytflag=true
   })
   redli[this.ytx].style.background="#e5004f"
   ytnow=this.ytx
    }
    else if(this.ytx<ytnext){
   ytimg[this.ytx].style.left=ytkuan+"px"
   animate(ytimg[ytnow],{left:-ytkuan},1000)
   animate(ytimg[this.ytx],{left:0},1000,function(){
    ytflag=true
   })
   redli[this.ytx].style.background="#e5004f"
   ytnow=this.ytx
    }
    return ytnow

}
}

function ytxmove1(){
   ytnext=ytnow-1

   if (ytnext<0) {
       ytnext=ytimg.length-1
   }
   for (var i = 0; i <ytimg.length; i++) {
      redli[i].style.background=""
   }
   ytimg[ytnext].style.left=-ytkuan+"px"
   animate(ytimg[ytnow],{left:ytkuan},1000)
   animate(ytimg[ytnext],{left:0},1000,function(){
    ytflag=true
   })
   redli[ytnext].style.background="#e5004f"
   ytnow=ytnext
}
}
xlb(".shishangtu")
xlb(".shishangtu1")
xlb(".shishangtu2")
xlb(".shishangtu3")
//小轮播结束
//黑线效果开始
function blcline(obj){
var flag1=true
var blackline=$(obj)[0]
var texiao=$(".texiao",blackline)
var wid=parseInt(getStyle(blackline,"width"))
var hei=parseInt(getStyle(blackline,"height"))
blackline.onmouseover=function(){
  
  for (var i = 0; i <texiao.length; i++) {
     texiao[i].style.width=1+"px"
     texiao[i].style.height=1+"px"
  }  
    
    animate(texiao[0],{width:wid},400)
    animate(texiao[1],{height:hei},400)
    animate(texiao[2],{width:wid},400)
    animate(texiao[3],{height:hei},400,function(){
    })
}
blackline.onmouseout=function(){ 
     animate(texiao[0],{width:0},400)
     animate(texiao[1],{height:0},400)
     animate(texiao[2],{width:0},400)
     animate(texiao[3],{height:0},400,function(){
     for (var i = 0; i <texiao.length; i++) {
     texiao[i].style.width=0+"px"
     texiao[i].style.height=0+"px"
     }

     }) 
}
}
for (var i = 0; i <40; i++) {
    blcline(".blackline"+i)
}
//黑线效果结束

//品牌盒子轮播开始
function pphz(lunbobox,zuotiao,youtiao){
var lunbobox=$(lunbobox)
var zuotiao=$(zuotiao)[0]
var youtiao=$(youtiao)[0]
var kuan111=parseInt(getStyle(lunbobox[0],"width"))
var nowhz=0
var nexthz=0
zuotiao.onclick=function(){
   nexthz=nowhz+1
   if (nexthz==lunbobox.length) {
    nexthz=0
   }
   lunbobox[nexthz].style.left=kuan111+"px"
   animate(lunbobox[nowhz],{left:-kuan111},600)
   animate(lunbobox[nexthz],{left:0},600)
   nowhz=nexthz

}
youtiao.onclick=function(){
   nexthz=nowhz-1
   if (nexthz<0) {
    nexthz=lunbobox.length-1
   }
   lunbobox[nexthz].style.left=-kuan111+"px"
   animate(lunbobox[nowhz],{left:kuan111},600)
   animate(lunbobox[nexthz],{left:0},600)
   nowhz=nexthz

}
}
pphz(".lunbobox",".zuotiao",".youtiao")
pphz(".lunboboxc",".zuotiaoc",".youtiaoc")
pphz(".lunboboxn",".zuotiaon",".youtiaon")
pphz(".lunboboxx",".zuotiaox",".youtiaox")
pphz(".lunboboxb",".zuotiaob",".youtiaob")
pphz(".lunboboxm",".zuotiaom",".youtiaom")
pphz(".lunboboxy",".zuotiaoy",".youtiaoy")
pphz(".lunboboxp",".zuotiaop",".youtiaop")
pphz(".lunboboxt",".zuotiaot",".youtiaot")
//品牌盒子轮播结束

//品牌分类移入效果开始
var ban7=$(".banner7")
var hidpt7=$(".hidpt")
for (var i = 0; i <ban7.length; i++) {
   ban7[i].wsb=i
   ban7[i].onmouseover=function(){
    hidpt7[this.wsb].style.display="block"
   }

   ban7[i].onmouseout=function(){
    hidpt7[this.wsb].style.display="none"
   }
}

//品牌分类移入效果结束

//头部效果开始
var yanyuan=$(".yanyuan")[0]
var xg=$(".xg")[0]
yanyuan.onmouseover=function(){
   
}
yanyuan.onmouseout=function(){
   xg.style.display="none"
}


var yanyuan1=$(".yanyuan1")[0]
var xg1=$(".xg1")[0]

yanyuan1.onmouseover=function(){
   xg1.style.display="block"
   yanyuan1.style.background="#fff";
}
yanyuan1.onmouseout=function(){
   xg1.style.display="none"
   yanyuan1.style.background="";
}

var yanyuan2=$(".msd3")[0]
var xg2=$(".xg2")[0]
console.log(yanyuan)
yanyuan2.onmouseover=function(){
   xg2.style.display="block"
   yanyuan2.style.backgroundColor="#fff"
}

yanyuan2.onmouseout=function(){
   xg2.style.display="none"
   yanyuan2.style.backgroundColor=""
}

var yanyuan3=$(".yanyuan3")[0]
var xg3=$(".xg3")[0]
var yincang=$(".yincang")[0]
yanyuan3.onmouseover=function(){
   xg3.style.display="block"
   yincang.style.display="block"
   yincang.style.zIndex="-10"
}

yanyuan3.onmouseout=function(){
   xg3.style.display="none"
   yincang.style.display="none"
}
//头部效果结束

//楼层跳转开始
var floor=$(".shishang")
var floornav=$(".floornav")[0]
var floorlis=$("a",floornav)
var lcdiv=$("p",floornav)
var arr=[]
var arr1=["时尚名品","潮流女装","精品男装","时尚鞋靴","潮流箱包",
"美容护肤","运动户外","内衣配饰","可爱婴童","返回顶部"]
for (var i = 0; i <floor.length; i++) {
   var juli=floor[i].offsetTop
   arr.push(juli)
}
  window.onscroll=function(){
  var Top=document.body.scrollTop||document.documentElement.scrollTop
    for (var i = 0; i <floor.length; i++) {
    if(Top>arr[i]-400){
      floornav.style.display="block"
    for (var j = 0; j <floor.length; j++) {
      lcdiv[j].style.background=""
      lcdiv[j].innerHTML=""
    } 
    lcdiv[i].style.background="#e5004f"
    lcdiv[i].innerHTML=arr1[i]

    }

    else if(Top<arr[0]-300){
      floornav.style.display="none"

    }

  }
}
for (var i = 0; i <floor.length; i++) {
  lcdiv[i].wsb=i
  lcdiv[i].onclick=function(){
  this.style.background="#e5004f"
  animate(document.body,{scrollTop:arr[this.wsb]-300},1000,Tween.Quad.easeInOut)
  animate(document.documentElement,{scrollTop:arr[this.wsb]-300},1000,Tween.Quad.easeInOut)
}
}
for (var i = 0; i <floor.length; i++) {
  lcdiv[i].wsb1=i
  lcdiv[i].onmouseover=function(){
    this.style.background="#e5004f"
    this.innerHTML=arr1[this.wsb1]
}

  lcdiv[i].onmouseout=function(){
    this.style.background=""
    this.innerHTML=""
}
}
//楼层跳转结束
}