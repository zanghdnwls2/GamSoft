

function goGoogle(e){
	link = $("#"+e.id).data("link");

	if(isMobile() && $("#"+e.id).data("type") == "mobile"){
		location.href = link;
	}else if(!isMobile() && $("#"+e.id).data("type") == "pc"){
		location.href = link;
	}else{
		alert("해당되는 기기로 다운받아주세요.")
	}
}

$(function(){
	initDown();
	alert("asd");
	function initDown(){
		$.ajax({
			url:"DownloadSum.txt",
			dataType:"text",
			success:function(e){
				alert(e);
			}
		});
	}

	function openMenu(){
		$("#btnMenuText").html("닫기");
		$("#menuIcon-m").hide();
		$("#menuIcon-q").show();
		$("#overlay").show();
		$("#slide-menu").stop();
		$("#slide-menu").animate({
			'left': 0,
		},200,
		function() {

		});
	}

	function closeMenu(){
		$("#btnMenuText").html("메뉴");
		$("#menuIcon-m").show();
		$("#menuIcon-q").hide();
		$("#overlay").hide();
		$("#slide-menu").stop();
		$("#slide-menu").animate({
			'left': -200,
		},200,
		function() {

		});
	}

	$("#btnMenu").on("click", function () {
		return (this.tog ^= 1) ? openMenu() : closeMenu();
	});

	$("#overlay").on("click", function () {
		closeMenu();
		$("#btnMenu")[0].tog = 0;
	});
});

function isMobile() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}