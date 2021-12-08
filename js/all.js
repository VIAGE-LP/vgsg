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
    $('.buybtn,a[href="#size"]').click(function (e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#size').offset().top,
        }, 900);
    });

    // 日本的modal
    $('.modal-open-button').click(function () {
        $('#modal-wrap').css('position', 'absolute');
    });

    //週年慶活動辦法下拉選單
    // $(".anniversary_2,.SP_anniversary_2").hide();
    // $('.anniversary_1, .SP_anniversary_1').click(function (e) {
    //     e.preventDefault();
    //     $(".anniversary_2,.SP_anniversary_2").toggle();;
    // });
    // $('.anniversary_2, .SP_anniversary_2').click(function (e) {
    //     e.preventDefault();
    //     $(".anniversary_2, .SP_anniversary_2").hide();
    // });

    // 影片在iOS自動播放
    var promise = document.querySelector('video').play();

    if (promise !== undefined) {
        promise.catch(error => {
            // Auto-play was prevented
            // Show a UI element to let the user manually start playback
            promise;
        }).then(() => {
            // Auto-play started
            promise;
        });
    }
});