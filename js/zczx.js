/*������ѯ�ű�*/

$(function(){
	
	/*��������������ѯ��ť*/
	$('#online_zcask').click(function(){
		window.open("zxzczx.html","_blank");
	});
	
	/*��������л�*/
	$('.btnTec').siblings().hide();
	$('.list-group-item').each(function(){
		$(this).click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			var value = $(this).attr('id');
			$('.'+value).show().siblings().hide();
		});
	});
});