$('.cover-image-container').on('mouseover',function(){
	console.log('here');
	console.log($( this ).find('.front-image'));
	$( this ).find('.front-image').css("mix-blend-mode", "normal");
});

$('.cover-image-container').on('mouseout',function(){
	console.log('here');
	console.log($( this ).find('.front-image'));
	$( this ).find('.front-image').css("mix-blend-mode", "luminosity");
});