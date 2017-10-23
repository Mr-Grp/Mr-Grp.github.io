


	//nav部分开始
	var car=document.getElementsByClassName("car")[0];
	var shopcar=document.getElementsByClassName("shopcar")[0];
	car.onmouseover=function(){
		shopcar.style.height='96px';
		shopcar.style.color='#666';
		shopcar.style.boxShadow="0 2px 5px 3px rgba(100,100,100,0.1)"
	}
	car.onmouseout=function(){
		shopcar.style.height='0';
		shopcar.style.boxShadow="none"
	}
	//nav部分结束

	// shop-nav部分开始
	var search=document.getElementsByClassName("search")[0];
	var searchLogo=search.getElementsByTagName("span")[0];
	var searchInput=search.getElementsByTagName("input")[0];
	var searchA=search.getElementsByClassName("search-a")[0];
	
	search.onmouseover=function(){
		if(!search.classList.contains("current")){
			search.style.border='#aaa 1px solid';
			searchLogo.style.borderLeft='#aaa 1px solid';
		}
	}
	search.onmouseout=function(){
		if(!search.classList.contains("current")){
			search.style.border='#E0E0E0 1px solid';
			searchLogo.style.borderLeft='#E0E0E0 1px solid';
		}
	}
	searchInput.onfocus=function(){
		search.classList.add("current");
		search.style.border='#FF6700 1px solid';
		searchLogo.style.borderLeft='#FF6700 1px solid';
		searchA.style.display='none';
	}
	searchInput.onblur=function(){
		search.classList.remove("current");
		search.style.border='#E0E0E0 1px solid';
		searchLogo.style.borderLeft='#E0E0E0 1px solid';
		searchA.style.display='inline-block';
	}
	searchLogo.onmouseover=function(){
		searchLogo.style.backgroundColor='#FF6700';
		searchLogo.style.color='#FFF';
	}
	searchLogo.onmouseout=function(){
		searchLogo.style.backgroundColor='#FFF';
		searchLogo.style.color='black';
	}
	$('.shop-nav').find(".search").find('input').focus(function(){
		$('.shop-nav').find(".search-list").css({"display":"block"});
	})
	$('.shop-nav').find(".search").find('input').blur(function(){
		$('.shop-nav').find(".search-list").css({"display":"none"});
	})

	$('.shop-nav-ul').find('.shop-nav-ul-li').find('a').mouseover(function(){
		$('.shop-nav-list').addClass('shop-nav-list-active');
		$('.shop-nav-ul').find('.mouse').css({"display":"block"});
		if($(this).attr('num')){
			$(".shop-nav-li[num="+$(this).attr('num')+"]").css({"display":"block"}).siblings().css({"display":"none"});
		}else{
			$('.shop-nav-list').removeClass('shop-nav-list-active');
		}
	});
	$('.shop-nav-ul').mouseleave(function(){
		$('.shop-nav-list').removeClass('shop-nav-list-active');	
	});
	// shop-nav部分开始



	// picture-nav部分开始
	var time=0;
	var bannerIndex=0;
	var bannerNextIndex;
	   $(".picture-nav-bottom").find('li').eq(bannerIndex).addClass('picture-current')
	var bannerAnimate=setInterval(function(){
		bannerIndex=$(".picture-nav-bottom-current").index();
		bannerNextIndex=(bannerIndex+1)>5?0:(bannerIndex+1);
		pictureChange(bannerNextIndex);
	},4000);

	$(".picture-nav-bottom").find('li').click(function(){
		clearInterval(bannerAnimate);
		if(!($(this).index()==$(".picture-nav-bottom-current").index())) {
			$(this).addClass('picture-current').siblings().removeClass('picture-current');
 			pictureChange($(this).index());
		}
	});
	$(".picture-nav-bottom").find('span').eq(1).click(function(){
		if(time==0){
			time=10;
			clearInterval(bannerAnimate);
			bannerIndex=$(".picture-nav-bottom-current").index();
			bannerNextIndex=(bannerIndex+1)>5?0:(bannerIndex+1);
			pictureChange(bannerNextIndex);
			setTimeout(function(){time=0;},600);
		}
	});

	$(".picture-nav-bottom").find('span').eq(0).click(function(){
		if(time==0){
			time=10;
			clearInterval(bannerAnimate);
			bannerIndex=$(".picture-nav-bottom-current").index();
			bannerNextIndex=(bannerIndex-1)<0?5:(bannerIndex-1);
			pictureChange(bannerNextIndex);
			setTimeout(function(){time=0;},600);
		}
	});

	function pictureChange(index){
		$(".picture-nav-bottom-current").fadeOut(500).removeClass('picture-nav-bottom-current');
		setTimeout(function(){
			$(".picture-nav-bottom").find('a').eq(index).addClass('picture-nav-bottom-current').fadeIn(400);
			$(".picture-nav-bottom").find('li').eq(index).addClass('picture-current').siblings().removeClass('picture-current');
		},200);
	}

	$(".picture-nav-aside").find('li').mouseover(function() {
		$(this).find('.content').css({"display":"flex"});
	});
	$(".picture-nav-aside").find('li').mouseout(function() {
		$(this).find('.content').css({"display":"none"});
	});
	// picture-nav部分结束

    // picture-nav-foot部分开始
    $(".picture-nav-foot-option").find('li').mouseover(function() {
    	$(this).find("i").css({"color":"white"})
    })
    $(".picture-nav-foot-option").find('li').mouseout(function() {
    	$(this).find("i").css({"color":"#CFCDCB"})
    })
    // picture-nav-foot部分结束


	// section-star-change a部分开始
	$(".section-star-header").find('a').eq(0).addClass('section-star-header-active');
	var sectionStarAnimate=setInterval(sectionStarChange,8000)	

	function sectionStarChange(){
		if($(".section-star-content").find('ul').hasClass('section-star-content-active')){
			$(".section-star-content").find('ul').removeClass('section-star-content-active');
			$(".section-star-header").find('a').eq(0).addClass('section-star-header-active').siblings().removeClass('section-star-header-active');
		}else{
			$(".section-star-content").find('ul').addClass('section-star-content-active')
			$(".section-star-header").find('a').eq(1).addClass('section-star-header-active').siblings().removeClass('section-star-header-active');
		}
	}

	$(".section-star-header").find('a').eq(1).click(function(){
		if($(".section-star-content").find('ul').hasClass('section-star-content-active')){
			$(".section-star-content").find('ul').removeClass('section-star-content-active');
			$(".section-star-header").find('a').eq(0).addClass('section-star-header-active').siblings().removeClass('section-star-header-active');
		}
	});
	$(".section-star-header").find('a').eq(0).click(function(){
		if(!$(".section-star-content").find('ul').hasClass('section-star-content-active')){
			$(".section-star-content").find('ul').addClass('section-star-content-active')
			$(".section-star-header").find('a').eq(1).addClass('section-star-header-active').siblings().removeClass('section-star-header-active');
		}
	});


	$(".section-star-header").find('a').mouseover(function(){
		clearInterval(sectionStarAnimate);
	});

	$(".section-star-header").find('a').mouseout(function(){
		sectionStarAnimate=setInterval(sectionStarChange,3000);
	});
	// section-star-change a部分开始








	//page-main-vedio部分开始 color: #FF6700;
	$(".page-main-video").find('.more').mouseover(function(){
		$(".page-main-video").find('.more').find('a').css({"color":"#FF6700"});
		$(".page-main-video").find('.more').find('i').css({"background-color":"#FF6700"});
	});

	$(".page-main-video").find('.more').mouseout(function(){
		$(".page-main-video").find('.more').find('a').css({"color":"#B0B0B0"});
		$(".page-main-video").find('.more').find('i').css({"background-color":"#B0B0B0"});
	});

	$(".page-main-video").find('.section-content').find('a').mouseover(function(){
		$(this).find('i').css({"background-color":"#FF6B00"})
	})
	$(".page-main-video").find('.section-content').find('a').mouseout(function(){
		$(this).find('i').css({"background-color":"rgba(0,0,0,0)"})
	})
	//page-main-vedio部分结束




		// section-star-change a部分开始
	// section-star-change a部分开始

		// section-star-change a部分开始
	// section-star-change a部分开始