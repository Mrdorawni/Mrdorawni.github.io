// ********* 均等割り付けスクリプト ***********
// 改造などはご自由に行って結構ですが、このスクリプトそのものを販売することを禁じます。
// web屋 内藤　http://www.web-naito.net/
// ***************** 2013.9.8 *****************

(function( $ ){  
	$.fn.justify = function(options) {

		return this.each(function(){
			if (document.body.clientWidth >= 980){
			var words               = $(this).text(),
				origFontSize        = $(this).css("font-size").replace("px", ""),
				wordsLength			= $(this).text().length,
				lineText			= "",
				fontRatio			= 0;

			if(wordsLength == 1) {
				$(this).css("text-align", "center");
				return;
			}

			// 現在の文章の幅を測る
			function grabPixelLineSize(text) {
				var dummy = '<div id="dummy" style="margin:0; padding:0; display: inline-block; font-size:' + origFontSize + ';">' + text + '</div>';
				$("body").append(dummy);
				var emW   = $("#dummy").width();
				$("#dummy").remove();
				return emW;
            };

			var wordsWidth = grabPixelLineSize(words); // 文字列の幅を取得する

			// 親要素の禁則処理を無効にする
			$(this).css("word-break", "keep-all");

			var parentWidth = $(this).width(); // 親要素の幅を取得する

			var fontRatio = ( parentWidth - wordsWidth ) / (wordsLength - 1) /*- origFontSize.replace("px", "")*/;

			lineText += '<span style="letter-spacing: ' + fontRatio + 'px !important">' + words.slice(0, wordsLength-1)  + '</span>' + words.slice(wordsLength-1);

			$(this).html(lineText);
			}
		});
		
	};
						 
})(jQuery);