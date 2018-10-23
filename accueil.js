$(function () {

    function sleep(seconds) {
        var waitUntil = new Date().getTime() + seconds * 1000;
        while (new Date().getTime() < waitUntil) true;
    }

    sleep(1);
    $('.loader').fadeOut(500);

    $('.rectangle').animate({
        "opacity": "1"
    }, 900);

    $('.rect').animate({
        "width": "25%",
        "box-shadow": "0 0 20px gray"
    }, 1000, 'easeInOutCirc');

    $('.accueil .titre').animate({
        'top': '5%',
        'left': '5%',
        'opacity': '1'
    }, 1300);


    $('.accueil .contenu').animate({
        'bottom': '18%',
        'right': '10%',
        'opacity': '1'
    }, 1600);

    $('.accueil .titre').animate({
        'top': '5%',
        'left': '5%'
    }, 300);


    $('.accueil .contenu').animate({
        'bottom': '18%',
        'right': '10%'
    }, 300);

    $('.arrow_left').css('opacity', '0');

    $('.arrow_right').click(function () {
        $('.rect').animate({
            "width": "0%",
            "box-shadow": "0"
        }, 2500, 'easeOutCirc');

        $('.accueil').fadeOut(900);


        $(this).animate({
            "opacity": "0"
        }, 900);

        $('.arrow_left').css('display', 'block');

        $('.arrow_left').animate({
            "opacity": "1"
        }, 2000);



        $('.accueil .contenu').animate({
            'bottom': '130%',
            'right': '130%',
            'opacity': '0',
        }, 1100, 'linear');

        $('.accueil .titre').animate({
            'top': '-30%',
            'left': '-30%',
            'opacity': '0',
        }, 350, 'linear');





    });

    $('.arrow_left').click(function () {
        $('.rect').animate({
            "width": "25%",
            "box-shadow": "0 0 20px gray"
        }, 1000, 'easeOutCirc');
        $('.accueil').fadeIn(1);

        $(this).animate({
            "opacity": "0"
        }, 900);

        $('.accueil .contenu').fadeIn(10);


        $('.arrow_right').animate({
            "opacity": "1"
        }, 2000);

        $('.accueil .titre').animate({
            'top': '5%',
            'left': '5%',
            'opacity': '1'
        }, 1300);


        $('.accueil .contenu').animate({
            'bottom': '18%',
            'right': '10%',
            'opacity': '1'
        }, 1600);


    });

    $('.inscrip_contact_actu').fadeOut(1);
    $('.arrow_left_inscript').fadeOut(1);


    $('.button_inscription').click(function () {
        $('.arrow_left_inscript').fadeIn(1000);
        $('.inscrip_contact_actu').css("opacity", "1");
        $('.inscrip_contact_actu').fadeIn(1000);
        window.scrollTo(0, 0);
        $('.bandeau').fadeOut(1);

    });

    $('.arrow_left_inscript ').click(function () {
        $('.arrow_left_inscript').fadeOut(1000);
        $('.inscrip_contact_actu').css("opacity", "0");
        $('.inscrip_contact_actu').fadeOut(1);
        window.scrollTo(0, 0);
        $('.bandeau').fadeIn(1);

    });





})
