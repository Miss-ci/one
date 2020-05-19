$(function(){
	$("html,body").scrollTop(0)
	$(window).scroll(function(){
		var scrollTop=$("html,body").scrollTop()
		if(scrollTop>0){
			$("header").addClass("col1").find("a").addClass("col1")
		}else{
			$("header").removeClass("col1").find("a").removeClass("col1")
		}
	})
	// 移动端二级菜单
	$(".icon-tabulation").click(function(){
		$("nav>ul").addClass("nav-show");
	})
	$(".icon-31guanbi").click(function(){
		$("nav>ul").removeClass("nav-show");
	})
	// 移动端banner图下方按钮
	$(".icon-fanhui4").click(function(){
		$(this).addClass("hides").siblings(".icon-guanbijiantou").addClass("shows");
		// $(this).hide().siblings(".icon-guanbijiantou").show();
		$(".xilie").addClass("fl")
	})
	$(".icon-guanbijiantou").click(function(){
		$(this).removeClass("shows").siblings(".icon-fanhui4").removeClass("hides");
		$(".xilie").removeClass("fl")
	})
	// 搜索按钮
	$(".search-start").click(function(){
		$(".sousuo").show();
		$("header").addClass("col1").find("a").addClass("col1");
		$("body").css("overflow","hidden")
	})
	$(".closes").click(function(){
		$(".sousuo").hide();
		$("header").removeClass("col1").find("a").removeClass("col1")
		$("body").css("overflow","auto")
	})
})

// swiper插件
$(function(){
	var counts=1.5;
	function count(){
		// var ne=$(window).width(); 
		var ne=window.innerWidth; //包含滚动条（js）
		if(ne<=767){counts=1;}
		else{counts=1.5;}
		return counts;
	};
	var right=count();
	var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'horizontal', // 垂直切换选项
	    loop: true, // 循环模式选项
	    slidesPerView : right, //slide之间的距离
			on: {
			    resize: function(){
						var ne=window.innerWidth;
						if(ne<=767){
							 mySwiper.params.slidesPerView=1
						}else{
							mySwiper.params.slidesPerView=1.5
						}
			    }, 
			  },
	    // 如果需要分页器
	    pagination: {
	      el: '.swiper-pagination',
				clickable :true,//点击控制切换
	    },
	    // 如果需要前进后退按钮
	    navigation: {
	      nextEl: '.swiper-button-next',
	      // prevEl: '.swiper-button-prev',
	    },
	  })       
})

$(function(){
	// 时尚文字效果
	function funScroll(nodes){
		var tops=$(nodes).offset().top - $(window).height();
		var pageTops=$("html,body").scrollTop();
		if(pageTops>=tops){
			$(nodes).removeClass("fashion-hide");
		}else{
			$(nodes).addClass("fashion-hide");
		}
	}
	$(window).scroll(function(){funScroll(".fashion");})
	
	// lable选项
	$(".cl label").click(function(){
		$(this).children(".sp1").addClass("sp-bj");
		$(this).parent().siblings().find(".sp1").removeClass("sp-bj")
	});
	
	// 电子邮件信息
	$(".text").blur(function(){
		var em=$(this).val();
		var rex=/^\w+@\w+\.\w{2,3}$/;
		// console.log(em);
		if(em==""){
			$(".hint").html("必填字段").show().parent().addClass("bor");
		}else{
			if(rex.test(em)){
				$(".hint").html("").show().parent().removeClass("bor")
			}else{
				$(".hint").html("该电子邮件地址无效").show().parent().addClass("bor")
			}
		}
	})
	$(".cr span").click(function(){
		var em1=$(".text").val();
		if(em1==""){
			$(".hint").html("必填字段").show();}
	})
	
	// 移动端底部事件
	$(".foot>ul>li>h3").click(function(){
		$(this).children("span").toggleClass("rota").end().parent("li").siblings().find("span").removeClass("rota");
		$(this).toggleClass("zk").siblings("ul").stop().toggleClass("hei").end().parent("li").siblings().children("ul,h3").removeClass("hei zk");
		// var dis=$(this).siblings("ul").css("display")
		// if(dis=="none"){
		// 	$(this).siblings("ul").stop().slideDown().addClass("zk").end().parent("li").siblings().children("ul").slideUp()
		// }else{
		// 	$(this).siblings("ul").stop().slideUp()
		// }
	})
})