
window.addEventListener("load",function(){
	"use strict";

	autoFunc();
	
	
	var bclick = document.querySelectorAll(".bulletBox img");
	bclick.item(0).onclick=function(){
		clearFunc();
		bnum=0;
		fadeSlide(2);
	};
	bclick.item(1).onclick=function(){
		clearFunc();
		bnum=1;
		fadeSlide(2);
	};
	bclick.item(2).onclick=function(){
		clearFunc();
		bnum=2;
		fadeSlide(2);
	};
	bclick.item(3).onclick=function(){
		clearFunc();
		bnum=3;
		fadeSlide(2);
	};
	
});////////////// load //////////////////////////////////
////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////




var bnum=0;
var snum=0;
var psts=0;
function fadeSlide(dir){
	"use strict";
	if(psts===1){return false;}
	psts=1;
	setTimeout(function(){
		psts=0;
	},800);
	

	
	var tg = document.querySelectorAll("#slider>li");

	

	for(var i=0;i<tg.length;i++){
		tg.item(i).setAttribute("class","");
	}
	

	if(dir===1){
		snum++;	
		if(snum===3){snum=0;}
	}
	else if(dir===0){
		snum--;
		if(snum===-1){snum=2;}
	}
	else if(dir===2){
		snum=bnum;
	}
	
	//console.log(snum);//확인
	// 1. 선택된 슬라이드 보이기(class를 변경함)
	tg.item(snum).setAttribute("class","opaView");
	
	// 2. 선택된 슬라이드와 순서가 같은 불릿변경하기
	var bbtn = document.querySelectorAll(".bulletBox img");

	// 모든 블릿이미지 초기화
	for(var i=0; i<bbtn.length; i++){
		if(i===snum){continue;}///바뀔번호만 빼고 계속해라~!
		bbtn.item(i)
		.setAttribute("src","../img/ico_pm_55_off.png");
	}/// for문 ///
	//선택된 순번의 블릿이미지를 변경
	bbtn.item(snum)
	.setAttribute("src","../img/ico_pm_55_on.png");
		
	
	
	
}////// fadeSlide함수 ////////////////////////////////////////////


/*
	함수명: autoFunc
	기능: 자동 호출 함수로 fadeSlide함수를 일정시간간격으로 호출하게함.
*/
var autocall;//setInterval용 전역변수
var autocallT;//setTimeout용 전역변수
function autoFunc(){
	"use strict";
	autocall = setInterval("fadeSlide(1)", 4000);//4초간격호출
	
}//// autoFunc함수 //////////////////////////////////////

/*
	함수명: clearFunc
	기능: setInterval함수와 setTimeout함수를 지우고 setTimeout을 설정하여 일정시간 후 아무런 동작이 없으면 다시 자동실행함수를 호출함.
*/
function clearFunc(){
	"use strict";
	clearInterval(autocall);//setInterval지우기
	clearTimeout(autocallT);//setTimeout지우기
	autocallT=setTimeout(autoFunc, 8000);//8초간 기다린후 호출	
}///// clearFunc함수 ///////////////////////////////////////////

/*
	함수명: <strong>goSideBan</strong>
	기능: 사이트 배너 ul의 top값을 li하나의 값만큼 이동하여 배너가 흘러가게 한다. (위로 이동한 경우 첫번째 li를 맨뒤로 이동, 아래로이동한 경우 맨 마지막 li를 맨 위로 이동)
*/
var gsbsts=0;//goSideBan동작중 상태값(0-휴식중, 1-동작중)
function goSideBan(){
	"use strict";
	//alert("나야나!");//호출여부확인
	
	/// 잠금장치 /////
	if(gsbsts===1){return false;}//아래쪽코드 실행안함!!
	gsbsts=1;//잠금
	
	
	// 1. 변경할 대상선정: #sbox>ul
	var tg = document.querySelector("#sbox>ul");
	var tg2 = document.querySelectorAll("#sbox>ul>li");
	
	// 2. 위치값 변경 설정
	tg.style.top="-92px";
	tg.style.transition="top .4s ease-out";
	
	// 3. 0.4초후에 첫번째 li를 잘라서 맨뒤로 이동하기
	//  그리고 ul의 top값을 0으로 변경하기 
	setTimeout(function(){
		tg.appendChild(tg2.item(0));//ul안에 첫번째 li를 선택하여 맨뒤에 추가하는 코드
		tg.style.top="0px";/*top값 초기화*/
		tg.style.transition="none";/*애니메이션 없애기*/
		
		//잠금풀기
		gsbsts=0;
		
	},400);/// setTimeout ///
}

/*
	함수명: backSideBan
	기능: 마지막 배너를 잘라서 맨앞으로 이동하여 위에서 아래로 애니메이션 되게함.
*/
function backSideBan(){
	"use strict";
	//alert("나야나!");//호출여부확인
	
	/// 잠금장치 /////
	if(gsbsts===1){return false;}//아래쪽코드 실행안함!!
	gsbsts=1;//잠금
	
	
	// 1. 변경할 대상선정: #sbox>ul
	var tg = document.querySelector("#sbox>ul");
	var tg2 = document.querySelectorAll("#sbox>ul>li");
	
	// 2. 맨마지막 li를 선택하여 맨 앞으로 이동
	tg.insertBefore(tg2[7],tg2[0]);
	tg.style.top="-92px";//ul박스를 위로 한칸만큼 올라가게함
	tg.style.transition="none";//애니메이션 없앰
	
	setTimeout(function(){
		tg.style.top="0px";/*위에서 아래로 이동*/
		tg.style.transition="top .4s ease-in-out";/*애니메이션설정*/	
	},10);/// 0.01초를 준 이유는 약간의 시차있어야 효과있음
	
	setTimeout(function(){
		gsbsts=0;//잠금풀기
	},410);
	
}/// backSideBan함수 /////////////////////////////////////////


/*
	함수명: autoFunc2
	기능: 사이드배너 자동호출
*/
var autocall2, autocallT2;//setInterval, setTimeout용 전역변수
function autoFunc2(){
	autocall2=setInterval("goSideBan()",3000);//3초간격 호출
}//// autoFunc2함수 ////////////////////////////////////////

/*
	함수명: clearFunc2
	기능: 사이드배너 자동호출 지우기
*/
function clearFunc2(){
	clearInterval(autocall2);
	clearTimeout(autocallT2);
	autocallT2=setTimeout(autoFunc2,5000);//5초후 자동실행함수
}//// clearFunc2함수 /////////////////////////////////////



