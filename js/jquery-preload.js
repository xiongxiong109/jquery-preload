/*
jquery的图片预加载插件，为了保证程序运行的正确性
请使用jQuery-1.11.0以上的版本
可以在$(img).on方法之后使用console.log( Math.round( ( i/imgArr.length )*100 )+"%" );
进行加载进度的追踪
*/
(function($){
	$.extend({
		'preload':function(imgArr,fn){
			var i=0;
			var img=new Image();
			img.src=imgArr[i];
			$(img).on('load error',function(){
				i++;
				if(i<imgArr.length){
					img.src=imgArr[i];
				}else{
					fn && fn.call();
				}
			});
		}
	})
})(jQuery);