// JavaScript Document
$(function () {
  // 親メニュー処理
  //$('span').click(function() {
  $('.globalMenuSp ul li').click(function() {
    // メニュー表示/非表示
    $(this).next('ul').slideToggle('fast');
	//サブボタンの切り替え
	if($(this).find('.btnsub').attr('src')=='images/sp_menu_sub.png'){
		$(this).find('.btnsub').attr('src','images/sp_menu_close.png');	
	} else {
		$(this).find('.btnsub').attr('src','images/sp_menu_sub.png');
	}
	
  });

  // 子メニュー処理
  $('li').click(function(e) {
    // メニュー表示/非表示
    $(this).children('ul').slideToggle('fast');
	  
	if($(this).hasClass('minus')){
		$(this).removeClass().addClass('oya close');
		//$('.btnsub').attr('src','images/sp_menu_close.png');


	} else {
		if($(this).hasClass('close')){
			$(this).removeClass('oya').addClass('minus open');
		}
	}
	e.stopPropagation();
  });
	
	
});
