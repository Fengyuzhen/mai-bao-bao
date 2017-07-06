$(function(){
	
	 var num=0;
			var t=setInterval(move,1000)
			//开启计时器
			function move(){
				num++;
			if(num>=$('.bander-img>img').length){
					num=0;
				}
				$(".bander-img>img").hide().eq(num).show();
				$(".bander-img>img").fadeIn(2000).eq(num).fadeOut(2000);
				$("p").fadeIn("slow");
				$(".bander-btn").css("background","#777777").eq(num).css("background","#d41c50");
			
			}
			 //清除计时器方法
			$(".bander").hover(function(){
				clearInterval(t);
			},function(){
				t=setInterval(move,1000);
			})
			//获取按钮
			$(".bander-btn").click(function(){
				$(".bander-img>img").hide().eq($(this).index()).show();
				/*$(".bander-img>img").fadeIn(1002).eq(num).fadeOut(1002);*/
				$(".bander-btn").css("background","#777777").eq($(this).index()).css("background","#d41c50");
			}
			)
			//获取bander-right的按钮
			$(".bander-right").click(function(){
				
				move();
			});
			//获取bander-left的按钮
			$(".bander-left").click(function(){
				num--;
				if(num==-1){
					num=$(".bander-img>img").length-1; //错误z这个地方元素要包起来，
				                   //错误的是num=img.length-1
				}
				$(".bander-img>img").hide().eq(num).show();
			/*	$(".bander-img>img").fadeIn(1002).eq(num).fadeOut(1002);*/
				$(".bander-btn").css("background","#777777").eq(num).css("background","#d41c50");
				
			});
			
	//bannan2
	 var numm=0;
			var t1=setInterval(move1,2000)
			//开启计时器
			function move1(){
				numm++;
			if(numm>=$(".bander-img1>img").length){
					numm=0;
				}
				$(".bander-img1>img").hide().eq(numm).show();
				/*$(".bander-img1>img").fadeIn(2000).eq(num).fadeOut(2000);*/
				/*$("p").fadeIn("slow");*/
				$(".bander-btn1").css("background","#777777").eq(numm).css("background","#d41c50");
			
			}
			 //清除计时器方法
			$(".bander-img1").hover(function(){
				clearInterval(t1);
			},function(){
				t1=setInterval(move1,2000);
			})
			//获取按钮
			$(".bander-btn1").click(function(){
				$(".bander-img1>img").hide().eq($(this).index()).show();
				/*$(".bander-img1>img").fadeIn(1002).eq(num).fadeOut(1002);*/
				$(".bander-btn1").css("background","#777777").eq($(this).index()).css("background","#d41c50");
			}
			)
			//获取bander-right的按钮
			$(".bander-right1").click(function(){
				
				move1();
				
			});
			//获取bander-left的按钮
			$(".bander-left1").click(function(){
				numm--;
				if(numm==-1){
					numm=$(".bander-img1>img").length-1; //错误z这个地方元素要包起来，
				              //错误的是num=img.length-1
				}
				$(".bander-img1>img").hide().eq(numm).show();
			/*	$(".bander-img1>img").fadeIn(1002).eq(num).fadeOut(1002);*/
				$(".bander-btn").css("background","#777777").eq(numm).css("background","#d41c50");
				
				
			});
	
	
	
	//bannan2
	 var numm3=0;
			var t13=setInterval(move13,2000)
			//开启计时器
			function move13(){
				numm3++;
			if(numm3>=$(".bander-img1>img").length){
					numm3=0;
				}
				$(".bander-img13>img").hide().eq(numm3).show();
				/*$(".bander-img1>img").fadeIn(2000).eq(num).fadeOut(2000);*/
				/*$("p").fadeIn("slow");*/
				$(".bander-btn13").css("background","#777777").eq(numm3).css("background","#d41c50");
			
			}
			 //清除计时器方法
			$(".bander-img13").hover(function(){
				clearInterval(t13);
			},function(){
				t13=setInterval(move13,2000);
			})
			//获取按钮
			$(".bander-btn13").click(function(){
				$(".bander-img13>img").hide().eq($(this).index()).show();
				/*$(".bander-img1>img").fadeIn(1002).eq(num).fadeOut(1002);*/
				$(".bander-btn13").css("background","#777777").eq($(this).index()).css("background","#d41c50");
			}
			)
			//获取bander-right的按钮
			$(".bander-right13").click(function(){
				
				move13();
				
			});
			//获取bander-left的按钮
			$(".bander-left13").click(function(){
				numm3--;
				if(numm3==-1){
					numm3=$(".bander-img13>img").length-1; //错误z这个地方元素要包起来，
				              //错误的是num=img.length-1
				}
				$(".bander-img13>img").hide().eq(numm3).show();
			/*	$(".bander-img1>img").fadeIn(1002).eq(num).fadeOut(1002);*/
				$(".bander-btn3").css("background","#777777").eq(numm3).css("background","#d41c50");
				
				
			});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
