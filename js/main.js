
$('.switch').on('click',function(e) {

if($('button').hasClass('on'))

{
	$('body').addClass('dark').removeClass('light');
	$('button').addClass('off').removeClass('on');
	$('.status').text("IT IS SO BRIGHT HERE");
}
else {
	$('body').addClass('light').removeClass('dark');
	$("button").addClass('on').removeClass('off');
	$('.status').text("HEY WHO TURNS OFF THE LIGHT");
}
});

