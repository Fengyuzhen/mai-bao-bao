$(function(){
	
		//侧边栏导航*/
		$(".nav-oul1 li").mouseenter(function(){
				index=$(this).index();
				$(".uol").hide().eq(index).show();
				$(".nav-oul1 li").css("box-shadow","0px 0px 0px white").eq(index).css("box-shadow","1px 1px 4px black");
				$(".nav-list-left li").css("box-shadow","0px 0px 0px white").eq(index).css("box-shadow","1px 1px 4px black");
				$(".nav-list-left li").hide().eq(index).show();
			})
			
			$(".nav-list-xiala").mouseleave(function(){
				$(".nav-list-left li").hide();
			})
			
			 //nav首页导航
			$(".oul").children().hover(function(){
//				console.log($(this).eq(index).children().parent().siblings('.oul>li').children())
				$(this).children().parent().prev().children().css("border","none")
				$(this).children().css("border","none");
			},function(){
			$(this).children().parent().prev().children().css("border-right","1px solid #e85573");
			$(this).children().css("border-right","1px solid #e85573");
			
			});
			//bander的jq
		
	 	   var num33=0;
			var t1=setInterval(move11,1000)
			//开启计时器
			function move11(){
				num33++;
			if(num33>=$('.bander-img>img').length){
					num33=0;
				}
				$(".bander-img>img").hide().eq(num33).show();
				$(".bander-img>img").fadeIn(2000).eq(num33).fadeOut(2000);
				$("p").fadeIn("slow");
				$(".bander-btn").css("background","#777777").eq(num33).css("background","#d41c50");
			
			}
			 //清除计时器方法
			$(".bander").hover(function(){
				clearInterval(t1);
			},function(){
				t=setInterval(move11,1000);
			})
			//获取按钮
			$(".bander-btn").click(function(){
				$(".bander-img>img").hide().eq($(this).index()).show();
				$(".bander-img>img").fadeIn(1002).eq(num33).fadeOut(1002);
				$(".bander-btn").css("background","#777777").eq($(this).index()).css("background","#d41c50");
			}
			)
			//获取bander-right的按钮
			$(".bander-right").click(function(){
				move11();
			});
			//获取bander-left的按钮
			$(".bander-left").click(function(){
				num33--;
				if(num33==-1){
					num33=$(".bander-img>img").length-1; //错误z这个地方元素要包起来，
				                   //错误的是num=img.length-1
				}
				$(".bander-img>img").hide().eq(num33).show();
				$(".bander-img>img").fadeIn(1002).eq(num33).fadeOut(1002);
				$(".bander-btn").css("background","black").eq(num33).css("background","black");
				
			});
			
			
			
			
					 //mian内容轮播
		var w=$(".miao-box-img img").width();
		var imgs=$(".tu img").eq(0).clone();
		$(".miao-box-img").append(imgs);
		var nuw=0;
		var t=setInterval(move,2000);
		//开始计时器
		function move(){
			if(!$(".miao-box-img").is(":animated")){
				nuw++;
			if(nuw>=5){
			$(".miao-box-img").css("left","0px");
			 nuw=1;
			}
			$(".miao-box-img").animate({
				left:-nuw*w+"px"
			},1000);
		}
			}
			 
		//结束
		//右按钮
		$(".miao-biao-right-img").hover(function(){
				clearInterval(t);
			},function(){
				t=setInterval(move,2000);
			});
			
		$(".miao-biao-btn").click(function(){
			var indd=$(this).index();
			$(".miao-box-img").animate({
				
				left:-(indd*952)
			},500);
			
		});
			
			/*楼层效果*/

			
			
		
	
	$(document).scroll(function(){
		var tops=$(this).scrollTop();
		if(tops>=200){
		     $("#lou-cheng").show(700)
		}else{
			$("#lou-cheng").hide(700)
		}
		$(".mian-box-louti").each(function(i,o){
			var bTop=$(o).offset().top;
			var bh=$(o).height();
			var indexsdf=$(this).index();
			console.log(tops+"---"+bTop+"---"+bh+"--"+i)
		if(tops>bTop-1&&tops<bTop+bh){
			$(".btn>span").removeClass("active").eq(i).addClass("active")
		}
			
			if(tops>=200){
		     $("#list-oo").css("display","block");
		}else{
		 $("#list-oo").css("display","none").fadeOut("slow");
		}
	})
	})
	$(".btn>span").hover(function(){
		$(".btn>span").removeClass("hover")
		$(this).addClass("hover")
	},function(){
		$(".btn>span").removeClass("hover")
	})
	
	$(".btn").click(function(){
		var index=$(this).index();
		var topss=$(".mian-box-louti").eq(index).offset().top;
		$("html,body").stop().animate({scrollTop:topss},800)
	})
		
		$("#list-oo").click(function(){	
		$("html,body").stop().animate({scrollTop:0},800)
	})
	
	
	
	
	
})
