$(function(){
	
	$(".nav-quanbu").mouseenter(function(){
		var iness=$(this).index();
		$(".nav-oul1").hide().eq(iness).show();
		$(".nav-list-xiala").hide().eq(iness).show();
	});
	
	
	
	$(".nav-quanbu").mouseleave(function(){
	   	     $(".uol").hide();
			$(".nav-oul1").hide();
			$(".nav-list-xiala").hide()
		});
		
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
			
			
			
			
			$(document).scroll(function(){
				var tops=$(this).scrollTop();
				
			if(tops>=200){
		     $("#list-oo").css("display","block");
		}else{
		 $("#list-oo").css("display","none").fadeOut("slow");
		}
				
				
			})
			
		$("#list-oo").click(function(){
			
		$("html,body").stop().animate({scrollTop:0},800)
	})
			
			});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
