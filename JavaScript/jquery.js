/*jslint browser: true*/
/*global $, jQuery, alert*/

/*$(document).ready(function () {
    $('#subscribe-field').keyup(function (e) {
		if (e.which === 13) {
			alert("Thank you for subscribing. You should receive an email confirmation shortly.");
        }
    });
});*/

$(document).ready(function () {
    $('#subscribe-button').click(function (e) {
        'use strict';
        e.preventDefault();// this will prevent the browser to redirect to the href
        // if js is disabled nothing should change and the link will work normally
        var url = $(this).attr('href');
        var windowName = $(this).attr('id');
        window.location.href = "mailto:LISTSERV@LISTSERV.AMHERST.EDU?Body=subscribe%20acoc-l";
    });
    
    $('.fb-wrapper').click(function (e) {
        'use strict';
        e.preventDefault();
        var url = $(this).attr('href');
        var windowName = $(this).attr('id');
        window.open("https://facebook.com/groups/452994708114537/", windowName, "height=600, width=800");
    });
    
    $('#contact-button').click(function (e) {
        'use strict';
        e.preventDefault();
        var url = $(this).attr('href');
        var windowName = $(this).attr('id');
        window.location.href = "mailto:acoc@amherst.edu";
    });
    
    
    
});

    
 //$('.section').css('min-height', $(window).innerHeight());
//$('.section_text').css('padding-top', $(window).innerHeight() / 2);
//});

//$('input[type="text"]').click(function(e) {
//			alert("Thank you for subscribing. You should receive an email confirmation shortly.");
      //  }
//    });
//$('input[type="text"]').keyup(function(e) {
//		if (e.which === 13) {
//			alert("Thank you for subscribing. You should receive an email confirmation shortly.");
//        }
//    });
//$(window).resize(function () {
    //$('.section').css('min-height', $(window).innerHeight());
    //$('.section').css('padding-top', $(window).innerHeight() / 2);
//});
    