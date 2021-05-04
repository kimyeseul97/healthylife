<<<<<<< HEAD
$(function(){
	//요청 주소 만들기
	var addr = 
		'http://api.openweathermap.org/data/2.5/weather?q=incheon&APPID=e22d0c5998d33d1993a4a74eb94e5b41';
	$.ajax({
		url:addr,
		type:'get',
		data:{},
		success:function(result){
			//데이터 확인
			//console.log(result);
			//국가명과 일출과 일몰 - 객체
			var sys = result.sys;
			//도시이름 정보 - 문자열
			var name = result.name;
			//날씨 - 배열
			var weather = result.weather;
			//온도 - 객체
			var main = result.main;
			//국가명
			var country = sys.country;
			//현재, 최고 , 최저 기온 가져오기
			var temp = main.temp;
			var temp_min = main.temp_min;
			var temp_max = main.temp_max;
			//구름상태, 날씨상태 코드, 날씨 아이콘 정보
			var wid = weather[0].id;
			var icon = weather[0].icon;
			//아이콘 가져오기
			var icon_url = 
				"https://openweathermap.org/img/w/" + icon;
					
			//데이터 출력
			//도시이름과 국가를 출력
			$(".city").html(name + "/" + country);	
			//도시이름과 국가를 출력
			$(".weather").html(result.weather);
			//아이콘 출력
			$(".icon").html("<img src='" + 
					icon_url + ".png'/>");
			//온도 출력
			$(".temp").html('현재기온:' + 	parseInt((temp-273.15)) + '&deg;');
			$(".temp_max").html('최고기온:' +	parseInt((temp_max-273.15)) + '&deg;');
			$(".temp_min").html('최저기온:' +	parseInt((temp_min-273.15)) + '&deg;');

		}
	});
});


//자동슬라이드 이미지
$(document).ready(function(){ 
	$('#sun',"#run").bxSlider({ 
		auto: true, 
		speed: 500, 
		pause: 4000, 
		mode:'fade', 
		// 시작 중지 버튼을 보여지게 합니다.
		autoControls: false, 
		//페이지 바로가기 버튼을 보여지게 합니다.
		pager:false, 
	}); 
	});



//조건에 맞는 운동 추천
$(document).ready(function(){
	if($(".icon").is('04d.png','09d.png','10d.png','11d.png','13d.png')) {
  		// alert("참")/
		  $("#rain").attr('style', 'display:show');
		  $("#sun").attr('style','display:none');
		  $("#rain").bxSlider();
    } else  {
    //   alert("아니다")
		  $("#rain").attr('style', 'display:none');
		  $("#sun").attr('style','display:show');
		  $("#sun").bxSlider('auto:true', 'speed:500');
	}
});


=======
$(function(){
	//요청 주소 만들기
	var addr = 
		'http://api.openweathermap.org/data/2.5/weather?q=incheon&APPID=e22d0c5998d33d1993a4a74eb94e5b41';
	$.ajax({
		url:addr,
		type:'get',
		data:{},
		success:function(result){
			//데이터 확인
			//console.log(result);
			//국가명과 일출과 일몰 - 객체
			var sys = result.sys;
			//도시이름 정보 - 문자열
			var name = result.name;
			//날씨 - 배열
			var weather = result.weather;
			//온도 - 객체
			var main = result.main;
			//국가명
			var country = sys.country;
			//현재, 최고 , 최저 기온 가져오기
			var temp = main.temp;
			var temp_min = main.temp_min;
			var temp_max = main.temp_max;
			//구름상태, 날씨상태 코드, 날씨 아이콘 정보
			var wid = weather[0].id;
			var icon = weather[0].icon;
			//아이콘 가져오기
			var icon_url = 
				"https://openweathermap.org/img/w/" + icon;
					
			//데이터 출력
			//도시이름과 국가를 출력
			$(".city").html(name + "/" + country);	
			//도시이름과 국가를 출력
			$(".weather").html(result.weather);
			//아이콘 출력
			$(".icon").html("<img src='" + 
					icon_url + ".png'/>");
			//온도 출력
			$(".temp").html('현재기온:' + 	parseInt((temp-273.15)) + '&deg;');
			$(".temp_max").html('최고기온:' +	parseInt((temp_max-273.15)) + '&deg;');
			$(".temp_min").html('최저기온:' +	parseInt((temp_min-273.15)) + '&deg;');

		}
	});
});


//자동슬라이드 이미지
$(document).ready(function(){ 
	$('#sun',"#run").bxSlider({ 
		auto: true, 
		speed: 500, 
		pause: 4000, 
		mode:'fade', 
		// 시작 중지 버튼을 보여지게 합니다.
		autoControls: false, 
		//페이지 바로가기 버튼을 보여지게 합니다.
		pager:false, 
	}); 
	});



//조건에 맞는 운동 추천
$(document).ready(function(){
	if($(".icon").is('04d.png','09d.png','10d.png','11d.png','13d.png')) {
  		// alert("참")/
		  $("#rain").attr('style', 'display:show');
		  $("#sun").attr('style','display:none');
		  $("#rain").bxSlider();
    } else  {
    //   alert("아니다")
		  $("#rain").attr('style', 'display:none');
		  $("#sun").attr('style','display:show');
		  $("#sun").bxSlider('auto:true', 'speed:500');
	}
});


>>>>>>> 77d8b195f9398cb3cea2b2ae8b65f07163918efc
