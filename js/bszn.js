/*����ָ�Ͻű�*/

$(function(){
	/*��������л�*/
	$('#tabTec').siblings().hide();
	$('.list-group-item').each(function(){
		$(this).click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			var value = $(this).attr('id');
			$('.'+value).show().siblings().hide();
		});
	});
});