$(document).ready(function () {

    // this prevents page reload on pressing enter
    $("form").submit(function (event) {
        event.preventDefault();
    });

    // click listener
    $('#btnSignIn').click(function () {
        if ($('input:text').val() == "admin" && $('input:password').val() == "patiocclcms") {
            window.location.replace("./admin/index.html");
        }
        else if ($('input:text').val() == "rkumar" && $('input:password').val() == "Rahul@123") {
            window.location.replace("./caller/index.html");
        }
        else if ($('input:text').val() == "hod" && $('input:password').val() == "hod@123") {
            window.location.replace("./hod/index.html");
        }
        else if ($('input:text').val() == "itadmin" && $('input:password').val() == "itadmin@123") {
            window.location.replace("./it_admin/index.html");
        }
        else {
            alert('Wrong !');
        }
    });

});
