/*公共脚本1:处理返回顶部按钮和鼠标悬停显示信息bootstrap激活*/

$(function(){
	/*返回顶部*/
	$(window).on('scroll',function(){
		var st = $(document).scrollTop();
		if( st>0 ){
			if( $('#main-container').length != 0  ){
				var w = $(window).width(),mw = $('#main-container').width();
				if( (w-mw)/2 > 70 )
					$('#go_top').css({'left':(w-mw)/2+mw+20});
				else{
					$('#go_top').css({'left':'auto'});
				}
			}
			$('#go_top').fadeIn(function(){
				$(this).removeClass('dn');
			});
		}else{
			$('#go_top').fadeOut(function(){
				$(this).addClass('dn');
			});
		}	
	});
	$('#go_top .go').on('click',function(){
		$('html,body').animate({'scrollTop':0},500);
	});

	/*鼠标悬停显示信息bootstrap激活*/
	$("[data-toggle='tooltip']").tooltip({html:true});
});