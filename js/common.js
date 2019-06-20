// 서울랜드 공통 JS
///// html 모두 로딩 후 실행구역 ///////////
window.addEventListener("load",function(){
	"use strict";
	/////// GNB 박스 변수에 담기
	var gnb = document.querySelector("#gnb");
	////// GNB 라인 박스 변수에 담기
	var gnbline = document.querySelector(".gnbline");
	// GNB 에 마우스 오버시 배경라인 박스 내려오기
	gnb.onmouseover=function(){
		gnbline.style.height="60px";
		gnbline.style.transition="height .3s ease-in-out";
	};/////마우스오버///////////////////
	// GNB 에 마우스 아웃시 배경라인 박스 올라가기
	gnb.onmouseout=function(){
		gnbline.style.height="0px";
	};///////마우스아웃///////////////////
	
	
});
	
	
	
	
	
	
	



