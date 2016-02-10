$(document).ready(function(){

	if ($(window).scrollTop() > 150){
		$('#main-nav').addClass('scrolled');
		
	} else{
		$('#main-nav').removeClass('scrolled');
	}

	$(window).scroll(function(){
		if ($(window).scrollTop() > 150){
			$('#main-nav').addClass('scrolled'); 
		} else{
			$('#main-nav').removeClass('scrolled');

		}
	});

	$('#skills').waypoint(function(direction) {
		$('.chart').easyPieChart({
			barColor: "#4285f4",
			size: "150",
			easing: "easeOutBounce",
			onStep: function (e, i, a) {
				$(this.el).find(".percent").text(Math.round(a))
			}
		});
	}, {offset: function () {
		return $('#main-nav').height() + 10;
	}
});
	
	$("a.scrollto").on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ 
			scrollTop: $(this.hash).offset().top - $('#main-nav').height() + 10
		}, 600);

		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
	});

	$.vegas({
		src:'assets/img/background.jpg'
	});
	$.vegas('overlay', {
		src:'assets/img/overlays/16.png'
	});
	
	$('#contact-form').validate({
		rules: {
			entry_572051207: {
				minlength: 2,
				required: !0
			},
			entry_170128903: {
				required: !0,
				email: !0
			},
			entry_1616508937: {
				minlength: 2,
				required: !0
			}
		},
		highlight: function (e) {
			$(e).closest(".control-group").removeClass("success").addClass("error")
		},
		success: function (e) {
			e.text("OK!").addClass("valid").closest(".control-group").removeClass("error").addClass("success")
		}
	});
	$('#contact-form').removeAttr("novalidate");
});