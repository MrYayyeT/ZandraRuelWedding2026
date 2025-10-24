$(document).ready(function () {

    /***************** Hero Background Slideshow ******************/
    var heroImages = [
        'img/hero-min.jpg',
        'img/eng_pics/_RFX3064-lg.jpg'
    ];
    var currentImageIndex = 0;
    
    // Create background overlay div for smooth transitions
    $('section.hero').css('position', 'relative');
    $('section.hero').prepend('<div class="hero-bg" style="position:absolute;top:0;left:0;width:100%;height:100%;background-size:cover;background-position:center;transition:opacity 1.5s ease-in-out;z-index:0;"></div>');
    var $heroBg = $('.hero-bg');
    $heroBg.css('background-image', 'url(' + heroImages[0] + ')');
    
    // Ensure content is above backgroundss
    $('.hero .container').css('position', 'relative').css('z-index', '1');
    $('.hero .down-arrow').css({'position': 'absolute', 'z-index': '10', 'left': '50%', 'margin-left': '-15px', 'bottom': '30px'});
    $('section.navigation').css('z-index', '999');
    
    function changeHeroBackground() {
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;
        
        // Fade out current image
        $heroBg.css('opacity', '0');
        
        // After fade out, change image and fade in
        setTimeout(function() {
            $heroBg.css('background-image', 'url(' + heroImages[currentImageIndex] + ')');
            $heroBg.css('opacity', '1');
        }, 1500);
    }
    
    // Change image every 7 seconds
    setInterval(changeHeroBackground, 7000);

    /***************** Custom Flower Animation on Scroll ******************/
    var hasScrolled = false;
    var flowersAnimated = false;
    var dressCodeFlowersAnimated = false;
    
    $(window).on('scroll', function() {
        hasScrolled = true;
        
        if (!flowersAnimated) {
            var scrollPos = $(window).scrollTop();
            var introSection = $('#intro').offset().top;
            var triggerPoint = introSection - ($(window).height() * 0.7);
            
            if (scrollPos > triggerPoint) {
                // Animate flowers instantly
                $('img[src="img/flower2.png"]').addClass('animated fadeInLeft');
                $('img[src="img/flower-1.png"]').addClass('animated fadeInLeft');
                $('img[src="img/flower4.png"]').addClass('animated fadeInRight');
                $('img[src="img/flower3.png"]').addClass('animated fadeInRight');
                
                flowersAnimated = true;
            }
        }
        
        if (!dressCodeFlowersAnimated) {
            var scrollPos = $(window).scrollTop();
            var dressCodeSection = $('#dress-code').offset().top;
            var triggerPoint = dressCodeSection - ($(window).height() * 0.7);
            
            if (scrollPos > triggerPoint) {
                // Animate dress code flowers the same way as how we met flowers
                $('img[src="img/dress_code/flower_2.png"]').addClass('animated fadeInLeft');
                $('img[src="img/dress_code/flower_1.png"]').addClass('animated fadeInRight');
                $('img[src="img/dress_code/flower_3.png"]').addClass('animated fadeInUp');
                
                dressCodeFlowersAnimated = true;
            }
        }
        
        
    });

    /***************** Waypoints ******************/

    $('.wp1').waypoint(function () {
        // Only animate non-flower wp1 elements
        $('.wp1').not('img[src*="flower"]').addClass('animated fadeInLeft');
    }, {
        offset: '30%'
    });
    $('.wp2').waypoint(function () {
        // Only animate non-flower wp2 elements
        $('.wp2').not('img[src*="flower"]').addClass('animated fadeInRight');
    }, {
        offset: '30%'
    });
    
    $('.wp3').waypoint(function () {
        $('.wp3').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    
    
    $('.wp4').waypoint(function () {
        $('.wp4').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp5').waypoint(function () {
        $('.wp5').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp6').waypoint(function () {
        $('.wp6').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp7').waypoint(function () {
        $('.wp7').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp8').waypoint(function () {
        $('.wp8').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp9').waypoint(function () {
        $('.wp9').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });

    /***************** Initiate Flexslider ******************/
    $('.flexslider').flexslider({
        animation: "slide"
    });

    /***************** Initiate Fancybox ******************/

    $('.single_image').fancybox({
        padding: 4
    });

    $('.fancybox').fancybox({
        padding: 4,
        width: 1000,
        height: 800
    });

    /***************** Tooltips ******************/
    $('[data-toggle="tooltip"]').tooltip();

    /***************** Nav Transformicon ******************/

    /* When user clicks the Icon */
    $('.nav-toggle').click(function () {
        $(this).toggleClass('active');
        $('.header-nav').toggleClass('open');
        event.preventDefault();
    });
    /* When user clicks a link */
    $('.header-nav li a').click(function () {
        $('.nav-toggle').toggleClass('active');
        $('.header-nav').toggleClass('open');

    });

    /***************** Header BG Scroll ******************/

    $(function () {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 20) {
                $('section.navigation').addClass('fixed');
                $('header').css({
                    "border-bottom": "none",
                    "padding": "35px 0"
                });
                $('header .member-actions').css({
                    "top": "26px",
                });
                $('header .navicon').css({
                    "top": "34px",
                });
            } else {
                $('section.navigation').removeClass('fixed');
                $('header').css({
                    "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
                    "padding": "50px 0"
                });
                $('header .member-actions').css({
                    "top": "41px",
                });
                $('header .navicon').css({
                    "top": "48px",
                });
            }
        });
    });
    /***************** Smooth Scrolling ******************/

    $(function () {

        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 90
                    }, 2000);
                    return false;
                }
            }
        });

    });

	/********************** Countdown Timer ***********************/
	var share_bar = document.getElementsByClassName('share-bar');
	var countdownTargetDate = new Date('March 28, 2026 16:00');

	for (var i = 0; i < share_bar.length; i++) {
		var html = '' +
			'<div class="countdown" style="display:flex; gap:10px; justify-content:center; align-items:center; flex-wrap:wrap; padding:12px 20px; color:#fff;">' +
				'<div style="text-align:center; min-width:50px;">' +
					'<div id="cd-days-' + i + '" style="font-size:22px; font-weight:700; line-height:1;">--</div>' +
					'<div style="font-size:10px; opacity:0.8;">Days</div>' +
				'</div>' +
				'<div style="text-align:center; min-width:50px;">' +
					'<div id="cd-hours-' + i + '" style="font-size:22px; font-weight:700; line-height:1;">--</div>' +
					'<div style="font-size:10px; opacity:0.8;">Hours</div>' +
				'</div>' +
				'<div style="text-align:center; min-width:50px;">' +
					'<div id="cd-mins-' + i + '" style="font-size:22px; font-weight:700; line-height:1;">--</div>' +
					'<div style="font-size:10px; opacity:0.8;">Minutes</div>' +
				'</div>' +
				'<div style="text-align:center; min-width:50px;">' +
					'<div id="cd-secs-' + i + '" style="font-size:22px; font-weight:700; line-height:1;">--</div>' +
					'<div style="font-size:10px; opacity:0.8;">Seconds</div>' +
				'</div>' +
			'</div>' +
			'<div id="cd-expired-' + i + '" style="display:none; font-size:16px; font-weight:600; margin-top:8px;">It\'s wedding time! 🎉</div>';

		share_bar[i].innerHTML = html;
		share_bar[i].style.display = 'inline-block';

		(function(index){
			function updateCountdown() {
				var now = new Date();
				var diff = countdownTargetDate.getTime() - now.getTime();
				var expiredEl = document.getElementById('cd-expired-' + index);
				var dEl = document.getElementById('cd-days-' + index);
				var hEl = document.getElementById('cd-hours-' + index);
				var mEl = document.getElementById('cd-mins-' + index);
				var sEl = document.getElementById('cd-secs-' + index);

				if (diff <= 0) {
					if (expiredEl) expiredEl.style.display = 'block';
					if (dEl) dEl.textContent = '0';
					if (hEl) hEl.textContent = '0';
					if (mEl) mEl.textContent = '0';
					if (sEl) sEl.textContent = '0';
					return; // stop updating once expired
				}

				var seconds = Math.floor(diff / 1000);
				var days = Math.floor(seconds / 86400);
				seconds -= days * 86400;
				var hours = Math.floor(seconds / 3600);
				seconds -= hours * 3600;
				var minutes = Math.floor(seconds / 60);
				seconds -= minutes * 60;

				if (dEl) dEl.textContent = String(days);
				if (hEl) hEl.textContent = String(hours).padStart(2, '0');
				if (mEl) mEl.textContent = String(minutes).padStart(2, '0');
				if (sEl) sEl.textContent = String(seconds).padStart(2, '0');
			}

			updateCountdown();
			var intervalId = setInterval(function(){
				updateCountdown();
				// if expired, clear interval to avoid unnecessary updates
				if ((new Date()).getTime() >= countdownTargetDate.getTime()) {
					clearInterval(intervalId);
				}
			}, 1000);
		})(i);
	}

    /********************** Embed youtube video *********************/
    $('.player').YTPlayer();


    /********************** Toggle Map Content **********************/
    $('#btn-show-map').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn-show-content').toggleClass('toggle-map-content');
    });
    $('#btn-show-content').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn-show-content').toggleClass('toggle-map-content');
    });

    /********************** Add to Calendar **********************/
    var myCalendar = createCalendar({
        options: {
            class: '',
            // You can pass an ID. If you don't, one will be generated for you
            id: ''
        },
        data: {
            // Event title
            title: "Zandra and Ruel's Wedding",

            // Event start date
            start: new Date('March 28, 2026 16:00'),

            // Event duration (IN MINUTES)
            // duration: 120,

            // You can also choose to set an end time
            // If an end time is set, this will take precedence over duration
            end: new Date('Nov 29, 2017 00:00'),

            // Event Address
            address: 'ITC Fortune Park Hotel, Kolkata',

            // Event Description
            description: "We can't wait to see you on our big day. For any queries or issues, please contact Mr. Amit Roy at +91 9876543210."
        }
    });

    $('#add-to-cal').html(myCalendar);


    /********************** RSVP **********************/
    $('#rsvp-form').on('submit', function (e) {
        e.preventDefault();
        var data = $(this).serialize();

        $('#alert-wrapper').html(alert_markup('info', '<strong>Just a sec!</strong> We are saving your details.'));

        if (MD5($('#invite_code').val()) !== '202cb962ac59075b964b07152d234b70'
            && MD5($('#invite_code').val()) !== '250cf8b51c773f3f8dc8b4be867a9a02') {
            $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> Your invite code is incorrect.'));
        } else {
            $.post('https://script.google.com/macros/s/AKfycbwGiA5KVTOafPIPmu3GN1b-pANSK8XVjNpqTwsxQ6zmyBii4LQA83uS9XFIb5-cibkF/exec', data)
                .done(function (data) {
                    console.log(data);
                    if (data.result === "error") {
                        $('#alert-wrapper').html(alert_markup('danger', data.message));
                    } else {
                        $('#alert-wrapper').html(alert_markup('success', '<strong>Thank you!</strong> Your RSVP has been submitted.'));
                        $('#rsvp-form')[0].reset(); // Clear the form
                    }
                })
                .fail(function (jqXHR, textStatus, errorThrown) {
                    console.error("AJAX Error: ", textStatus, errorThrown);
                    $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> There is some issue with the server. Please try again later.'));
                });
        }
    });

});

/********************** Extras **********************/

// Google map
function initMap() {
    var location = {lat: 14.1118088, lng: 120.93007452372359};
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 15,
        center: location,
        scrollwheel: false
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

function initBBSRMap() {
    var la_fiesta = {lat: 20.305826, lng: 85.85480189999998};
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 15,
        center: la_fiesta,
        scrollwheel: false
    });

    var marker = new google.maps.Marker({
        position: la_fiesta,
        map: map
    });
}

// alert_markup
function alert_markup(alert_type, msg) {
    return '<div class="alert alert-' + alert_type + '" role="alert">' + msg + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>';
}

// MD5 Encoding
var MD5 = function (string) {

    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }

    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            } else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        } else {
            return (lResult ^ lX8 ^ lY8);
        }
    }

    function F(x, y, z) {
        return (x & y) | ((~x) & z);
    }

    function G(x, y, z) {
        return (x & z) | (y & (~z));
    }

    function H(x, y, z) {
        return (x ^ y ^ z);
    }

    function I(x, y, z) {
        return (y ^ (x | (~z)));
    }

    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    };

    function WordToHex(lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    };

    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    };

    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;

    string = Utf8Encode(string);

    x = ConvertToWordArray(string);

    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;

    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }

    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);

    return temp.toLowerCase();
};