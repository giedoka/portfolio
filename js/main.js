$(document).ready(function(){
    
    var targetOffset1 = $('#skills').offset().top-450;
    var targetOffset2 = $('#skills').offset().top-350;
    var $w = $(window).scroll(function() {
        if($w.scrollTop() > targetOffset1) {
            $('#skills li:first-child').animate({
                left: '10px',
                top: '10px'
            }, 1000);
            $('#skills li:nth-child(2)').animate({
                right: '10px',
                top: '10px'
            }, 1000);
        }
        if($w.scrollTop() > targetOffset2) {
            $('#skills li:nth-child(3)').animate({
                left: '10px',
                bottom: '30px'
            }, 1000);
            $('#skills li:nth-child(4)').animate({
                right: '10px',
                bottom: '30px'
            }, 1000);
        }
    });
    
    var skillInfoDistance = 0
    skillInfoDistance = (($('.skill-info').outerWidth(true) - $('.skill-info').outerWidth())/2);
    
    $('#skills li:first-child').hover(function(){
        ChangeSkillInfoHeader('HTML', 5, '#eb4e20', '#d9361e');
        if ($('.skill-info').not(':visible')) {
            $('.skill-info').fadeIn();
        }
        $('#skills li:first-child .line').animate({
            width: (skillInfoDistance-40)
        }, {
            queue: false,
            duration: 500
        });
        }, function () {
            if ($('.skill-info').is(':visible')){
            $('.skill-info').fadeOut();
        }
        $('#skills li:first-child .line').animate({
            width: '0'
        }, {
            queue: false,
            duration: 500
        });
    });
    $('#skills li:nth-child(2)').hover(function(){
        ChangeSkillInfoHeader('CSS', 3, '#2598d8', '#0b5bab');
        if ($('.skill-info').not(':visible')) {
            $('.skill-info').fadeIn();
        } 
        $('#skills li:nth-child(2) .line').animate({
            width: (skillInfoDistance-40)
        }, {
            queue: false,
            duration: 500
        });
        }, function () {
            if ($('.skill-info').is(':visible')){
            $('.skill-info').fadeOut();
        }
        $('#skills li:nth-child(2) .line').animate({
            width: '0'
        }, {
            queue: false,
            duration: 500
        });
    });
    $('#skills li:nth-child(3)').hover(function(){
        ChangeSkillInfoHeader('Java', 'Script', '#f9d929', '#eabe1e');
        if ($('.skill-info').not(':visible')) {
            $('.skill-info').fadeIn();
        } 
        $('#skills li:nth-child(3) .line').animate({
            width: (skillInfoDistance-70)
        }, {
            queue: false,
            duration: 500
        });
        }, function () {
            if ($('.skill-info').is(':visible')){
            $('.skill-info').fadeOut();
        }
        $('#skills li:nth-child(3) .line').animate({
            width: '0'
        }, {
            queue: false,
            duration: 500
        });
    });
    $('#skills li:nth-child(4)').hover(function(){
        ChangeSkillInfoHeader('Sass', '', '#c14b88');
        if ($('.skill-info').not(':visible')) {
            $('.skill-info').fadeIn();
        } 
        $('#skills li:nth-child(4) .line').animate({
            width: (skillInfoDistance-70)
        }, {
            queue: false,
            duration: 500
        });
        }, function () {
            if ($('.skill-info').is(':visible')){
            $('.skill-info').fadeOut();
        }
        $('#skills li:nth-child(4) .line').animate({
            width: '0'
        }, {
            queue: false,
            duration: 500
        });
    });
    
    $('.page-img').click(function() {
        $('.page-img-list').animate({
            top: '0px'
        }, 1500);
    });
});

var offset=0;
function circle1animate(){
    offset+=10;
    $('#grad stop').attr('offset',offset+'%');
}

var skillInfoHeader = $('.skill-info h1');

function ChangeSkillInfoHeader(text, span, color, spanColor) {
    skillInfoHeader.text(text);
    skillInfoHeader.append('<span>' + span + '</span>');
    skillInfoHeader.css('color', color);
    $('.skill-info h1 span').css('color', spanColor);
}