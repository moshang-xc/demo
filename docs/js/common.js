!function(e){"use strict";(e(".percent-bar").length&&e(".percent-bar").appear((function(){var t=e(this),n=t.data("percent");e(t).css("width",n).addClass("counted")}),{accY:-50}),e(".switch-grp").length)&&e(".switch-grp").each((function(){var t=e(this).data("grp-name"),n=e(this),a=n.find(".accrodion");n.addClass(t),n.find(".accrodion .accrodion-content").hide(),n.find(".accrodion.active").find(".accrodion-content").show(),a.each((function(){e(this).find(".accrodion-title").on("click",(function(){!1===e(this).parent().hasClass("active")&&(e(".switch-grp."+t).find(".accrodion").removeClass("active"),e(".switch-grp."+t).find(".accrodion").find(".accrodion-content").slideUp(),e(this).parent().addClass("active"),e(this).parent().find(".accrodion-content").slideDown())}))}))}));function t(t){let n=window.location.href.split("/").reverse()[0];t.find("li").each((function(){let t=e(this).find("a");e(t).attr("href")==n&&e(this).addClass("current")})),t.children("li").each((function(){e(this).find(".current").length&&e(this).addClass("current")})),""==n&&t.find("li").eq(0).addClass("current")}if(e(".expolre-carousel").length&&e(".expolre-carousel").owlCarousel({loop:!0,margin:30,nav:!1,smartSpeed:500,autoHeight:!1,autoplay:!0,dots:!0,autoplayTimeout:1e4,navText:['<span class="icon-left-arrow"></span>','<span class="icon-right-arrow"></span>'],responsive:{0:{items:1},600:{items:1},800:{items:2},1024:{items:2},1200:{items:2}}}),e(".feedback-carousel").length&&e(".feedback-carousel").owlCarousel({loop:!0,margin:30,nav:!0,smartSpeed:500,autoHeight:!1,autoplay:!0,dots:!1,autoplayTimeout:1e4,navText:['<span class="icon-right-arrow left"></span>','<span class="icon-right-arrow"></span>'],responsive:{0:{items:1},600:{items:1},800:{items:1},1024:{items:1},1200:{items:1.6}}}),e(".scroll-to-target").length&&e(".scroll-to-target").on("click",(function(){var t=e(this).attr("data-target");return e("html, body").animate({scrollTop:e(t).offset().top},1e3),!1})),e(".contact-form-validated").length&&e(".contact-form-validated").validate({rules:{name:{required:!0},email:{required:!0,email:!0},message:{required:!0},subject:{required:!0}},submitHandler:function(t){return e.post(e(t).attr("action"),e(t).serialize(),(function(n){e(t).parent().find(".result").append(n),e(t).find('input[type="text"]').val(""),e(t).find('input[type="email"]').val(""),e(t).find("textarea").val("")})),!1}}),e(".sy-email-form").length&&e(".sy-email-form").each((function(){var t=e(this),n=t.data("url"),a=t.parent().find(".mc-form__response");t.ajaxChimp({url:n,callback:function(e){a.append((function(){return'<p class="mc-message">'+e.msg+"</p>"})),"success"===e.result&&(t.removeClass("errored").addClass("successed"),a.removeClass("errored").addClass("successed"),t.find("input").val(""),a.find("p").fadeOut(1e4)),"error"===e.result&&(t.removeClass("successed").addClass("errored"),a.removeClass("successed").addClass("errored"),t.find("input").val(""),a.find("p").fadeOut(1e4))}})})),e(".sy-video-popup").length&&e(".sy-video-popup").magnificPopup({type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!0,fixedContentPos:!1}),e(".main-menu__list").length){t(e(".main-menu__list"))}if(e(".service-details__sidebar-service-list").length){t(e(".service-details__sidebar-service-list"))}if(e(".main-menu__list").length&&e(".mobile-nav__container").length){let e=document.querySelector(".main-menu__list").outerHTML;document.querySelector(".mobile-nav__container").innerHTML=e}if(e(".sticky-header__content").length){let e=document.querySelector(".main-menu").innerHTML;document.querySelector(".sticky-header__content").innerHTML=e}if(e(".mobile-nav__container .main-menu__list").length){e(".mobile-nav__container .main-menu__list .dropdown > a").each((function(){let t=e(this),n=document.createElement("BUTTON");n.setAttribute("aria-label","dropdown toggler"),n.innerHTML="<i class='fa fa-angle-down'></i>",t.append((function(){return n})),t.find("button").on("click",(function(t){t.preventDefault();let n=e(this);n.toggleClass("expanded"),n.parent().toggleClass("expanded"),n.parent().parent().children("ul").slideToggle()}))}))}(e(".mobile-nav__toggler").length&&e(".mobile-nav__toggler").on("click",(function(t){t.preventDefault(),e(".mobile-nav__wrapper").toggleClass("expanded"),e("body").toggleClass("locked")})),e(".search-toggler").length&&e(".search-toggler").on("click",(function(t){t.preventDefault(),e(".search-popup").toggleClass("active"),e(".mobile-nav__wrapper").removeClass("expanded"),e("body").toggleClass("locked")})),e(".odometer").length)&&e(".odometer").each((function(){e(this).appear((function(){var t=e(this).attr("data-count");e(this).html(t)}))}));e(".wow").length&&new WOW({boxClass:"wow",animateClass:"animated",mobile:!0,live:!0}).init();e(".add").on("click",(function(){e(this).prev().val()<999&&e(this).prev().val(+e(this).prev().val()+1)})),e(".sub").on("click",(function(){e(this).next().val()>1&&e(this).next().val()>1&&e(this).next().val(+e(this).next().val()-1)})),e(window).on("load",(function(){e(".preloader").length&&e(".preloader").fadeOut(),document.querySelectorAll(".thm-swiper__slider").forEach((function(e){const t=JSON.parse(e.dataset.swiperOptions);new Swiper(e,t)})),e(".circle-progress").length&&e(".circle-progress").appear((function(){e(".circle-progress").each((function(){let t=e(this),n=t.data("options");t.circleProgress(n)}))}))})),e(window).on("scroll",(function(){if(e(".sy-stricked-menu").length){var t=e(".sy-stricked-menu");e(window).scrollTop()>130?t.addClass("stricky-fixed"):e(this).scrollTop()<=130&&t.removeClass("stricky-fixed")}if(e(".scroll-to-top").length){e(window).scrollTop()>100?e(".scroll-to-top").fadeIn(500):e(this).scrollTop()<=100&&e(".scroll-to-top").fadeOut(500)}}))}(jQuery);