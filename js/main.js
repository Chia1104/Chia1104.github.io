(function () {

	let hm_click = false;
	let clicked = false;

	const isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	const fullHeight = () => {

		if (!isMobile.any()) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function () {
				$('.js-fullheight').css('height', $(window).height());
			});
		}
	};

	// Parallax
	const parallax = () => {
		$(window).stellar();
	};

	const contentWayPoint = () => {
		let i = 0;
		$('.animate-box').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .animate-box.item-animate').each(function (k) {
						let el = $(this);
						setTimeout(function () {
							let effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						}, k * 100, 'easeInOutExpo');
					});

				}, 50);

			}

		}, { offset: '85%' });
	};



	const goToTop = () => {

		$('.js-gotop').on('click', function (event) {

			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');

			$("#chia-hm_exp").attr("aria-expanded", "false");
			$("#chia-hm").attr("aria-expanded", "false");
			clicked = false;
			return false;
		});

		$(window).scroll(function () {

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});

	};

	const pieChart = () => {
		$('.chart').easyPieChart({
			scaleColor: false,
			lineWidth: 4,
			lineCap: 'butt',
			barColor: '#FF9000',
			trackColor: "#f5f5f5",
			size: 160,
			animate: 1000
		});
	};

	const skillsWayPoint = () => {
		if ($('#chia-skills').length > 0) {
			$('#chia-skills').waypoint(function (direction) {

				if (direction === 'down' && !$(this.element).hasClass('animated')) {
					setTimeout(pieChart, 400);
					$(this.element).addClass('animated');
				}
			}, { offset: '90%' });
		}

	};


	// Loading page
	const loaderPage = () => {
		$(".chia-loader").fadeOut("slow");
	};

	const narbarClick = () => {

		$("#chia-hm").click(function () {
			if (hm_click === clicked) {
				$("#chia-hm_exp").attr("aria-expanded", "true");
				$(this).attr("aria-expanded", "true");
				clicked = true;
				return;
			}
			$("#chia-hm_exp").attr("aria-expanded", "false");
			$(this).attr("aria-expanded", "false");
			clicked = false;
		});

		$("#chia-hm_exp").click(function () {
			if (clicked === true) {
				$("#chia-hm_exp").attr("aria-expanded", "false");
				$("#chia-hm").attr("aria-expanded", "false");
				clicked = false;
				return;
			}
		});

		$("#page").click(function () {
			if (clicked === true) {
				$("#chia-hm_exp").attr("aria-expanded", "false");
				$("#chia-hm").attr("aria-expanded", "false");
				clicked = false;
				return;
			}
		});
	}


	$(function () {
		contentWayPoint();
		goToTop();
		loaderPage();
		fullHeight();
		parallax();
		skillsWayPoint();
		narbarClick();
	});


}());