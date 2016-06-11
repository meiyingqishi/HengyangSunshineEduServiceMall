/*政策咨询脚本*/

$(function(){
	
	/*单击在线政策咨询按钮*/
	$('#online_zcask').click(function(){
		window.open("zxzczx.html","_blank");
	});
	
	/*服务对象切换*/
	$('.btnTec').siblings().hide();
	$('.list-group-item').each(function(){
		$(this).click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			var value = $(this).attr('id');
			$('.'+value).show().siblings().hide();
		});
	});
});