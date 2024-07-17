$(document).ready(function () {

    // this prevents page reload on pressing enter
    $("form").submit(function (event) {
        event.preventDefault();
    });

    // click listener
    $('#btnSignIn').click(function () {
        if ($('input:text').val() == "admin" && $('input:password').val() == "admin@1234") {
            window.location.replace("./admin/index.html");
        }
        else if ($('input:text').val() == "caller" && $('input:password').val() == "caller@1234") {
            window.location.replace("./caller/index.html");
        }
        else if ($('input:text').val() == "nixi" && $('input:password').val() == "nixi@1234") {
            window.location.replace("./rudseti-admin/index.html");
        }
        else {
            alert('Wrong !');
        }
    });

});
