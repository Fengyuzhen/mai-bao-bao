document.onload=function(){
	
	var ss=document.querySelector(".aaaaa-top");
		$.ajax({
				type:"post",
				url:"php/00session.php",
				 dataType:'json', //类型字符串
				
				async:true, //同步还是异步
				//返回页面
				success:function(dataa){
					ss.innerHTML=dataa;
			   }
		});
	
	
	
}

