$(function(){
	colors = [
		"#F22613",
		"#F62459",
		"#BF55EC",
		"#19B5FE",
		"#26C281",
		"#26A65B",
		"#FFB61E",
		"#FFA631",
		"#F2F1EF",
		"#FFA400",
		"#87D37C",
		"#4B77BE",
		"#22A7F0",
		"#9B59B6",
		"#D24D57"
	];// A bunch of flat colors
	function st(date, col){
			h = date.getHours() - 1;
			$(".pm").text("AM");
			if (date.getHours() > 12) {
				h = (date.getHours() - 12) - 1;
				$(".pm").text("PM");
			}
			$("p").css("color", col);
			v = $("div.tens p");
			cont = "False";
			if (date.getMinutes().toString().length == 2) {
				switch(date.getMinutes()){
					case 11:
						v.eq(0).animate({color: colors[Math.floor(Math.random() * colors.length)]}, 400);
						break;
					case 12:
						v.eq(1).animate({color: colors[Math.floor(Math.random() * colors.length)]}, 400);
						break;
					case 13: 
						v.eq(2).animate({color: colors[Math.floor(Math.random() * colors.length)]}, 400);
						break;
					case 14: 
						v.eq(3).animate({color: colors[Math.floor(Math.random() * colors.length)]}, 400);
						break;
					case 15:
						v.eq(4).animate({color: colors[Math.floor(Math.random() * colors.length)]}, 400);
						break;
					case 16:
						v.eq(5).animate({color: colors[Math.floor(Math.random() * colors.length)]}, 400);
						break;
					case 17:
						v.eq(6).animate({color: colors[Math.floor(Math.random() * colors.length)]}, 400);
						break;
					case 18:
						v.eq(7).animate({color: colors[Math.floor(Math.random() * colors.length)]}, 400);
						break;
					case 19:
						v.eq(8).animate({color: colors[Math.floor(Math.random() * colors.length)]}, 400);
						break;
					default : 
						cont = "True";
				}	
				if (cont == "True") {
					s = parseInt(date.getMinutes().toString().slice(1, 2)) -1;
					$("div.mins p").eq(parseInt(date.getMinutes().toString().slice(0, 1)) -1).animate({color: colors[Math.floor(Math.random() * colors.length)]}, 400);
					if (s < 0) {

					}else{
						$("div.min p").eq(s).animate({color: colors[Math.floor(Math.random() * colors.length)]}, 400);	
					}
				}
			}else{
				if (date.getMinutes() - 1 < 0) {
					$("div.o p").animate({color: colors[Math.floor(Math.random() * colors.length)]}, 400);
				}else{
					$("div.min p").eq(date.getMinutes() - 1).animate({color: colors[Math.floor(Math.random() * colors.length)]}, 400);
				}			
			}
			$("div.hours p").eq(h).animate({color: colors[Math.floor(Math.random() * colors.length)]}, 400);
			$("#is, p.pm").animate({color: colors[Math.floor(Math.random() * colors.length)]}, 400);
	}
	now = new Date().getMinutes();
	def = new Date();
	time = setInterval(function(){ 
		date = new Date();
		/*date.setHours(07, 12, 00, 00);*/ // For testing on minute count: (hour, min, sec, millisec)
		j = date.getMinutes();
		if (j == now) {
		}else{
			now = j;
			st(date, "#1d1d1d");// Use #F2F1EF on white background
		}
	}, 1000);

	/*date.setHours(07, 12, 00, 00);*/ // For testing on page load: (hour, min, sec, millisec)
	st(def, "#1d1d1d"); // Update on page load
	$( "div.main" ).fadeIn( "slow" );
});
