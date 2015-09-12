$(document).ready(function() {
    var menuHeight = $('#adsense-ref').outerHeight();
    var windowHeight = $( window ).height();
    
    var adSenseHeight = windowHeight - menuHeight - 50;
    console.log('now adding css to adsense container' + (adSenseHeight.toString() + 'px'));
    $('.custom-adsense').css('max-height', (adSenseHeight.toString() + 'px'));
    
});