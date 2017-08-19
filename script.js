for (var i=1; i<15; i++){
	$('.gallery').append('<img src="" alt="" class="photo" />');
};
$('.gallery img').each(function(index){
	var x = index + 1;
	$(this).attr('alt', 'foto' + x);
	$(this).attr('src', 'img/foto'+ x +'.jpg');
});

$('.gallery img').mouseover(function(){
	var fotosrc = $(this).attr('src');
	$('.popup img').attr('src', fotosrc);
	$('.popup img').css('height', '200px');
	$('.popup').show();
}).mouseout(function() {
	$('.popup').hide();
}).mousemove(function(){
	$('.popup').css('left', event.pageX + 10);
	$('.popup').css('top', event.pageY + 10);
});