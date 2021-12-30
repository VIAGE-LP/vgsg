$(document).ready(function () {
    // 圖片lozad
    const observer = lozad('.lozad', {
        rootMargin: "150px 0px"
    });
    observer.observe();
    // 立即購買btn動態
    $('.offerbtn, .offerbtn_m').click(function (e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#size').offset().top,
        }, 900);
    });
    // 立即訂購btn動態
    $('.buybtn').click(function (e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#size').offset().top,
        }, 900);
    });

    //偵測sns line btn 手機版還是電腦版，連結不同
    var vw = $(window).width();
    if (vw <= 768) {
        $(".line_link").attr("href", "https://bit.ly/2Bpg9M6");
    } else {
        $(".line_link").attr("href", "https://line.me/R/ti/p/%40fhl1857j");
    }

    //QA下拉選單
    // Q1
    $(".A1").hide();
    $('.Q1').click(function (e) {
        e.preventDefault();
        $(".A1").toggle();;
    });
    $('.A1').click(function (e) {
        e.preventDefault();
        $(".A1").hide();
    });
    // Q2
    $(".A2").hide();
    $('.Q2').click(function (e) {
        e.preventDefault();
        $(".A2").toggle();;
    });
    $('.A2').click(function (e) {
        e.preventDefault();
        $(".A2").hide();
    });
    // Q3
    $(".A3").hide();
    $('.Q3').click(function (e) {
        e.preventDefault();
        $(".A3").toggle();;
    });
    $('.A3').click(function (e) {
        e.preventDefault();
        $(".A3").hide();
    });
    // Q4
    $(".A4").hide();
    $('.Q4').click(function (e) {
        e.preventDefault();
        $(".A4").toggle();;
    });
    $('.A4').click(function (e) {
        e.preventDefault();
        $(".A4").hide();
    });
    // Q5
    $(".A5").hide();
    $('.Q5').click(function (e) {
        e.preventDefault();
        $(".A5").toggle();;
    });
    $('.A5').click(function (e) {
        e.preventDefault();
        $(".A5").hide();
    });
    // Q6
    $(".A6").hide();
    $('.Q6').click(function (e) {
        e.preventDefault();
        $(".A6").toggle();;
    });
    $('.A6').click(function (e) {
        e.preventDefault();
        $(".A6").hide();
    });
    // Q7
    $(".A7").hide();
    $('.Q7').click(function (e) {
        e.preventDefault();
        $(".A7").toggle();;
    });
    $('.A7').click(function (e) {
        e.preventDefault();
        $(".A7").hide();
    });

    // 抓取網址參數後跳轉至vgsgeng
    var getUrlString = location.href;
    var url = new URL(getUrlString);
    $('.test').click(function (e) {
        e.preventDefault();
        window.open(`https://viagebeautybra.com/sg/vgsgeng/${url.search}`);
    });
});
