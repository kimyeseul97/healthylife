var resizeTimer;
$(window).bind('resize', function( ) {
    window.clearTimeout( resizeTimer );
    resizeTimer = window.setTimeout( resizeFunction, 500 );
});
function resizeFunction(){
//리사이즈시 실행할 코드
}