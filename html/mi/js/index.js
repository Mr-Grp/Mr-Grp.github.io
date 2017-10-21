


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

	// shop-nav部分开始

	// picture-nav部分开始
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
		$(this).addClass('picture-current').siblings().removeClass('picture-current');
 		pictureChange($(this).index())
	});

	$(".picture-nav-bottom").find('span').eq(1).click(function(){
		clearInterval(bannerAnimate);
		bannerIndex=$(".picture-nav-bottom-current").index();
		bannerNextIndex=(bannerIndex+1)>5?0:(bannerIndex+1);
		pictureChange(bannerNextIndex);
	})

	$(".picture-nav-bottom").find('span').eq(0).click(function(){
		clearInterval(bannerAnimate);
		bannerIndex=$(".picture-nav-bottom-current").index();
		bannerNextIndex=(bannerIndex-1)<0?5:(bannerIndex-1);
		pictureChange(bannerNextIndex);
	})

	function pictureChange(index){
		$(".picture-nav-bottom-current").fadeOut(500).removeClass('picture-nav-bottom-current');
		setTimeout(function(){
			$(".picture-nav-bottom").find('a').eq(index).addClass('picture-nav-bottom-current').fadeIn(500);
			$(".picture-nav-bottom").find('li').eq(index).addClass('picture-current').siblings().removeClass('picture-current');
		},200);
	}

	$(".picture-nav-aside").find('li').mouseover(function() {
		$(this).find('.content').css({"display":"flex"});
	});
	$(".picture-nav-aside").find('li').mouseout(function() {
		$(this).find('.content').css({"display":"none"});
	});
	// picture-nav部分开始

	// shop-nav部分开始
	// shop-nav部分开始