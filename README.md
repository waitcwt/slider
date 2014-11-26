#slider.html实现的是兼容focus或是走马灯式的轮播
*slider.js 实现可以定制使用参数
```javascript
 
var s = initSlider({
			Wrap:$('div'),
            Handle:$('.scrollArea'),
			selector:'li',
			btnLeft:'.left',
			btnRight:'.right',
			btnHandle:$('.btnscroll'),
			btnselector:'a',
			shape:'slide' ('fade','explode')
			btnshow:true,（左右按钮一直显示，false是hover上去才显示）
			dir:0, 方向（0，是上下；1是左右）
			autoPlay:true,
			timer:5000，
			cnt:1 (一次轮播多少个）
	});
s.on('beforeslide',function(e,cur,prev){
});
s.on('afterslide',function(e,cur,prev){
});
```
