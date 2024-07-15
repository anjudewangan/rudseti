if (localStorage.getItem("color"))
    $("#color").attr("href", "../assets/css/" + localStorage.getItem("color") + ".css");
if (localStorage.getItem("dark"))
    $("body").attr("class", "dark-only");
$('   <div class="customizer-links"> <div class="nav flex-column nac-pills" id="c-pills-tab" role="tablist" aria-orientation="vertical"><a class="nav-link active" id="c-pills-home-tab" data-bs-toggle="pill" href="#c-pills-home" role="tab" aria-controls="c-pills-home" aria-selected="true" data-original-title="" title=""> <div class="settings buy bg-primary"><i class="fa fa-question-circle-o" aria-hidden="true"></i></div> </a></div> </div> <div class="customizer-contain"> <div class="tab-content" id="c-pills-tabContent"> <div class="customizer-header"> <i class="fa fa-times icofont-close icon-close"></i> <h5>Form</h5> <p class="mb-0">Application for Enrollment <i class="fa fa-thumbs-o-up txt-primary"></i></p> </div> <div class="customizer-body custom-scrollbar"> <div class="tab-pane fade show active" id="c-pills-home" role="tabpanel" aria-labelledby="c-pills-home-tab"> <form class="needs-validation" novalidate=""> <div class="row mb-3 gy-3"> <div class="col-md-12"> <label class="control-label">Domain Name</label> <input class="form-control" type="text" placeholder="Domain Name" required="required"> <div class="valid-feedback">Looks good!</div> <div class="invalid-feedback"> Please provide a valid domain name. </div> </div> <div class="col-md-12"> <label class="control-label">Customer Name</label> <input class="form-control" type="text" placeholder="Customer Name" required="required"> <div class="valid-feedback">Looks good!</div> <div class="invalid-feedback"> Please provide a valid customer name. </div> </div> <div class="col-md-12"> <label class="control-label">Customer Mobile Number</label> <input class="form-control" type="number" placeholder="Customer Mobile Number" required="required"> <div class="valid-feedback">Looks good!</div> <div class="invalid-feedback"> Please provide a valid customer mobile no.. </div> </div> <div class="col-md-12"> <label class="control-label">Mail ID</label> <input class="form-control" type="email" placeholder="Mail ID" required="required"> <div class="valid-feedback">Looks good!</div> <div class="invalid-feedback"> Please provide a valid customer mail id. </div> </div> <div class="col-md-12"> <label class="control-label">Division</label> <select class="form-select" aria-label="Default select example" required="required"> <option selected disabled value=""> Select Division </option> <option value="">General</option> <option value="">.In Registry Division</option> <option value="">IRINN Division</option> <option value="">Internet Exchange</option> </select> <div class="valid-feedback">Looks good!</div> <div class="invalid-feedback"> Please provide a valid division. </div> </div> <div class="col-md-12"> <label class="control-label">Issue</label> <select class="form-select js-example-placeholder-multiple" aria-label="Default select example" multiple="multiple" required="required"> <option value="Domain hold issue">Domain hold issue </option> <option value="Domain server hold issue">Domain server hold issue </option> <option value="Domain Hold issue he was already sent mail but he did not get any response"> Domain Hold issue he was already sent mail but he did not get any response </option> <option value="Domain suspended">Domain suspended</option> <option value="KYC status related">KYC status related</option> <option value="Domain hold related">Domain hold related</option> <option value="209209 tickets status">209209 tickets status</option> <option value="Document submit related">Document submit related</option> </select> <div class="valid-feedback">Looks good!</div> <div class="invalid-feedback"> Please provide a valid issue. </div> </div> <div class="col-md-12"> <label class="control-label">Remark</label> <textarea class="form-control" placeholder="Remark" rows="3" required="required"></textarea> <div class="valid-feedback">Looks good!</div> <div class="invalid-feedback"> Please provide a valid remark. </div> </div> </div> <button class="btn btn-success" type="submit"> Submit </button> </form> </div> </div> </div> </div>').appendTo($('body'));
(function (){})();

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})();


//live customizer js
$(document).ready(function () {
     $(".customizer-color li").on('click', function() {
        $(".customizer-color li").removeClass('active');
        $(this).addClass("active");
        var color = $(this).attr("data-attr");
        var primary = $(this).attr("data-primary");
        var secondary = $(this).attr("data-secondary");
        localStorage.setItem("color", color);
        localStorage.setItem("primary", primary);
        localStorage.setItem("secondary", secondary);
        localStorage.removeItem("dark");
        $("#color" ).attr("href", "../assets/css/"+color+".css" );
        $(".dark-only").removeClass('dark-only');
        location.reload(true);
    }); 

    $(".customizer-color.dark li").on('click', function() {
        $(".customizer-color.dark li").removeClass('active');
        $(this).addClass("active");
        $("body").attr("class", "dark-only");
        localStorage.setItem("dark", "dark-only");
    });

    if(localStorage.getItem("primary") != null) {
        document.documentElement.style.setProperty('--theme-deafult', localStorage.getItem("primary"));
    }
    if(localStorage.getItem("secondary") != null) {
        document.documentElement.style.setProperty('--theme-secondary', localStorage.getItem("secondary"));
    }
    $(".customizer-links #c-pills-home-tab, .customizer-links #c-pills-layouts-tab").click(function () {
        $(".customizer-contain").addClass("open");
        $(".customizer-links").addClass("open");
    });

    $(".close-customizer-btn").on('click', function () {
        $(".floated-customizer-panel").removeClass("active");
    });

    $(".customizer-contain .icon-close").on('click', function () {
        $(".customizer-contain").removeClass("open");
        $(".customizer-links").removeClass("open");
    });

    $(".color-apply-btn").click(function(){
        location.reload(true);
    });

    var primary = document.getElementById("ColorPicker1").value;
    document.getElementById("ColorPicker1").onchange = function () {
      primary = this.value;
      localStorage.setItem("primary", primary);
      document.documentElement.style.setProperty('--theme-primary', primary);
    };

    var secondary = document.getElementById("ColorPicker2").value;
    document.getElementById("ColorPicker2").onchange = function () {
      secondary = this.value;
      localStorage.setItem("secondary", secondary);
      document.documentElement.style.setProperty('--theme-secondary', secondary);
    };
    $(".customizer-color.dark li").on('click', function () {
        $(".customizer-color.dark li").removeClass('active');
        $(this).addClass("active");
        $("body").attr("class", "dark-only");
        localStorage.setItem("dark", "dark-only");
    });
    $(".customizer-mix li").on('click', function () {
        $(".customizer-mix li").removeClass('active');
        $(this).addClass("active");
        var mixLayout = $(this).attr("data-attr");
        $("body").attr("class", mixLayout);
    });
    $('.sidebar-setting li').on('click', function () {
        $(".sidebar-setting li").removeClass('active');
        $(this).addClass("active");
        var sidebar = $(this).attr("data-attr");
        $(".sidebar-wrapper").attr("sidebar-layout", sidebar);
    });

    $('.sidebar-main-bg-setting li').on('click', function () {
        $(".sidebar-main-bg-setting li").removeClass('active')
        $(this).addClass("active")
        var bg = $(this).attr("data-attr");
        $(".sidebar-wrapper").attr("class", "sidebar-wrapper " + bg);
    });

    $('.sidebar-type li').on('click', function () {
        $("body").append('');
        var type = $(this).attr("data-attr");

        var boxed = "";
        if ($(".page-wrapper").hasClass("box-layout")) {
            boxed = "box-layout";
        }
        switch (type) {
            case 'compact-sidebar': {
                $(".page-wrapper").attr("class", "page-wrapper compact-wrapper " + boxed);
                $(this).addClass("active");
                localStorage.setItem('page-wrapper', 'compact-wrapper');
                break;
            }
            case 'normal-sidebar': {
                $(".page-wrapper").attr("class", "page-wrapper horizontal-wrapper " + boxed);
                $(".logo-wrapper").find('img').attr('src', '../assets/images/logo/logo.png');
                
                localStorage.setItem('page-wrapper', 'horizontal-wrapper');
                break;
            }
            case 'box-layout': {                
                $(".page-wrapper").attr("class", "page-wrapper compact-wrapper box-layout " + boxed);
                localStorage.setItem('page-wrapper', 'compact-wrapper box-layout');
                break;
            }
            default: {
                $(".page-wrapper").attr("class", "page-wrapper compact-wrapper " + boxed);
                localStorage.setItem('page-wrapper', 'compact-wrapper');
                break;
            }
        }
        // $(this).addClass("active");
        location.reload(true);
    });

    $('.main-layout li').on('click', function () {
        $(".main-layout li").removeClass('active');
        $(this).addClass("active");
        var layout = $(this).attr("data-attr");
        $("body").attr("class", layout);
        $("html").attr("dir", layout);
    });

    $('.main-layout .box-layout').on('click', function () {
        $(".main-layout .box-layout").removeClass('active');
        $(this).addClass("active");
        var layout = $(this).attr("data-attr");
        $("body").attr("class", "box-layout");
    });
    $("body").attr("class", localStorage.getItem("body-wrapper")||'');
});