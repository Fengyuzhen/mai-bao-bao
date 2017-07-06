
$(function(){
	$("dt").click(function(){
		$(this).toggleClass("ddtt");
		$(this).siblings('dd').fadeToggle(0);
	})
	
	var idssd=0;
	$(".mian-buttom>ul>li").click(function(){
		idssd=$(this).index();
		$(".box-ul-oo").hide().eq(idssd).show();
		$(".mian-buttom>ul>li").css("background","gray").eq(idssd).css("background","red");
		fff();
		
		
	})
	
	function fff(){
		if(idssd==0){
				$(".mian-buttom-leftd").css("display","none");	
				$(".mian-buttom-rightdd").css("display","block");
			}
			if(idssd==2){
				$(".mian-buttom-leftd").css("display","none");	
			}
			if(idssd>=1){
				$(".mian-buttom-leftd").css("display","block");	
			}
			if(idssd>=2){
				$(".mian-buttom-rightdd").css("display","none");
			}
		
	}
		
	//获取bander-left的按钮
			$(".mian-buttom-rightdd").click(function(){
		idssd++;
		$(".box-ul-oo").hide().eq(idssd).show();
		$(".mian-buttom>ul>li").css("background","gray").eq(idssd).css("background","red");
			
			fff();

			});
	
	
	
		$(".mian-buttom-leftd").click(function(){
		idssd--;
		$(".box-ul-oo").hide().eq(idssd).show();
		$(".mian-buttom>ul>li").css("background","gray").eq(idssd).css("background","red");
			
			fff();

			});
	/*	
				$(".mian-buttom>ul>li").css("background","gray").eq(inddssd).css("background","red");	
	*/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
	
	
	
	
	
	
	
	
	
	
	

