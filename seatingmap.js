$(document).ready(function(){

    getMapHeight();

    $( ".MapSectionInfo .section" ).hover(
        function() {
            var thisID = $( this ).attr('id');
            var imgID = '#map_'+thisID;
            $(imgID).siblings('.detailedImg').addClass('faded');
        }, function() {
            $('.detailedImg').removeClass('faded');
        }
    );


    var resizeTimer;
    $(window).on('resize', function(e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            getMapHeight();
            // makeFixed();
        }, 250);
    });


    $('.triCard h2 a').click(function(){
        var id = $(this).attr('id');

        $('.MapSectionInfo ._fullSeason').css('display','none');
        $('.MapSectionInfo ._halfSeason').css('display','none');
        $('.MapSectionInfo ._flexPack').css('display','none');

        $('.smallCopy ._fullSeason').css('display','none');
        $('.smallCopy ._halfSeason').css('display','none');
        $('.smallCopy ._flexPack').css('display','none');

        $('.MapSectionInfo .'+ id ).css('display','block');
        $('.smallCopy .'+ id ).css('display','block');


    });

});

function getMapHeight(){
    var imgHeight = $('#mapNumbers').height();
    $('#MapCanvasWrapper').css('height',imgHeight+'px');

}
