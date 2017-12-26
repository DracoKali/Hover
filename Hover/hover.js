
if (window.jQuery){
	console.log('Ready');
}else{
	location.reload();
}

	$(document).ready(function(){
		$('img').hover(function(){
			var temp = $(this).attr('src');
			$(this).attr('src', $(this).attr('alt-src'));
			$(this).attr('alt-src', temp);
			});
		});	
		