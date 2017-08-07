$(function(){
	var sidebar=$("#sidebar"),
	mask=$(".mask"),
		menu=$("#menu"),
		backbnt=$('.back-to-top');
	 function showsidebar(){
		mask.fadeIn();
		sidebar.css("right","0px") 
		 
	 }
	 function hidesidebar(){
		 mask.fadeOut();
		 sidebar.css("right",-sidebar.width());
	 }
	menu.on('click',showsidebar);
	mask.on("click",hidesidebar);
	backbnt.on('click',function(){
		$('body').animate({scrollTop:0},800);
	})
	 $(window).on('scroll',function(){
		 if($(window).scrollTop()>$(window).height())
		    backbnt.fadeIn();
			else
			backbnt.fadeOut();
	 })
	$(window).trigger("scroll");
	
	
	
})