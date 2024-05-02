$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
			$('.spclose').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
			$('.spclose').removeClass('active');
        }
    });
});