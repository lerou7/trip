$(function () {

    // init feather icons
    feather.replace();

    // init tooltip & popovers
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    //page scroll
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 20
        }, 1000);
        event.preventDefault();
    });

    // slick slider
    $('.slick-about').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false
    });

    //toggle scroll menu
    var scrollTop = 0;
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        //adjust menu background
        if (scroll > 80) {
            if (scroll > scrollTop) {
                $('.smart-scroll').addClass('scrolling').removeClass('up');
            } else {
                $('.smart-scroll').addClass('up');
            }
        } else {
            // remove if scroll = scrollTop
            $('.smart-scroll').removeClass('scrolling').removeClass('up');
        }

        scrollTop = scroll;

        // adjust scroll to top
        if (scroll >= 600) {
            $('.scroll-top').addClass('active');
        } else {
            $('.scroll-top').removeClass('active');
        }
        return false;
    });

    var BotStar={appId:"s5e30b070-f16a-11ed-8c7b-45d7dd970431",mode:"livechat"};
    !function(t,a){var e=function(){(e.q=e.q||[]).push(arguments)};
    e.q=e.q||[],t.BotStarApi=e;!function(){var t=a.createElement("script");
    t.type="text/javascript",t.async=1,t.src="https://widget.botstar.com/static/js/widget.js";
    var e=a.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}();}
    (window,document)
    
});

document.getElementById('chatbot-toggle').addEventListener('click', () => {
    const chatbotContainer = document.querySelector('.chatbot-container');
    const iframe = chatbotContainer.querySelector('iframe');

    if (chatbotContainer.classList.contains('minimized')) {
        chatbotContainer.classList.remove('minimized');
        iframe.style.height = '430px'; // Ensure iframe has height when expanded
        iframe.style.opacity = '1';
        iframe.style.pointerEvents = 'auto';
    } else {
        iframe.style.opacity = '0';
        iframe.style.height = '0';
        iframe.style.pointerEvents = 'none';
        setTimeout(() => {
            chatbotContainer.classList.add('minimized');
        }, 300); // Wait for the transition to complete before minimizing
    }
});