/*办事指南脚本*/

$(function(){
	/*服务对象切换*/
	$('#tabTec').siblings().hide();
	$('.list-group-item').each(function(){
		$(this).click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			var value = $(this).attr('id');
			$('.'+value).show().siblings().hide();
		});
	});
});