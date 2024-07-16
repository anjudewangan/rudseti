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


// Form Options
$(".vtp").hide();
$(".other").hide();
$('input[type="radio"]').click(function () {
    var inputValue = $(this).attr("value");
    var targetBox = $("." + inputValue);
    $(".targetForm").not(targetBox).hide();
    $(targetBox).show();
});

// Form Image Color
$("#formImg2, #formImg3").addClass("imgGrayScale");
$("#formImgColor1").addClass("formImgColor");
$("#studentRadio").click(function () {
    $("#formImg2, #formImg3").addClass("imgGrayScale");
    $("#formImg1").removeClass("imgGrayScale");
    $("#formImgColor1").addClass("formImgColor");
    $("#formImgColor2, #formImgColor3").removeClass("formImgColor");
});

$("#vtpRadio").click(function () {
    $("#formImg1, #formImg3").addClass("imgGrayScale");
    $("#formImg2").removeClass("imgGrayScale");
    $("#formImgColor2").addClass("formImgColor");
    $("#formImgColor1, #formImgColor3").removeClass("formImgColor");
});

$("#otherRadio").click(function () {
    $("#formImg1, #formImg2").addClass("imgGrayScale");
    $("#formImg3").removeClass("imgGrayScale");
    $("#formImgColor3").addClass("formImgColor");
    $("#formImgColor1, #formImgColor2").removeClass("formImgColor");
});

// Select District and Cities
var Balod = ["Gundardehi", "Sanjari Balod", "Daundi", "Daundi-Lohara", "Gurur", "Arjunda", "Marri ", "Bungalow (Deori)"];
var Balodabazar = ["Balodabazar", "Bhatapara", "Bilaigarh", "Kasdol", "Palari", "Simga", "Lavan", "Tundra", "Sonakhan"];
var Balrampur = ["Ramanujganj", "Balrampur", "Wadrafnagar", "Rajpur", "Shankargarh", "Kusmi", "Ramchandrapur", "Samri"];
var Bastar = ["Bastar", "Jagdalpur", "Darbha", "Tokapal", "Bastanar", "Lohandiguda", "Bakavand", "Nangur", "Bhanpuri"];
var Bemetara = ["Bemetara", "Saja", "Berla", "Nawagarh", "Than Khamharia", "Deokar", "Bhimbhauri"];
var Bijapur = ["Bhopalpatnam", "Bijapur", "Usoor", "Bhairamgarh"];
var Bilashpur = ["Takhatpur", "Bilaspur", "Kota", "Masturi", "Bilha", "Sakri", "Ratanpur", "Belgahna", "Beltara"];
var Dantewada = ["Geedam", "Dantewada", "Katekalyan", "Kuakonda", "Bade Bacheli"];
var Dhamtari = ["Kurud", "Dhamtari", "Magarlod", "Sihawa-Nagri", "Bhakhara", "Belargaon"];
var Durg = ["Durg", "Dhamdha", "Patan", "Bori", "Bhila"];
var Gariaband = ["Rajim", "Gariaband", "Chhura", "Devbhag", "Mainpur", "Amlipadar"];
var JanjgirChampa = ["Akaltara", "Janjgir", "Baloda", "Nawagarh", "Champa", "Pamgarh", "Shivrinarayan", "Bamhinidih", "Saragaon"];
var Jashpur = ["Bagicha", "Duldula", "Jashpur", "Farsabahar", "Kansabel", "Kunkuri", "Manora", "Pathalgaon", "Sanna"];
var Kanker = ["Narharpur", "Charama", "Kanker", "Bhanupratappur", "Antagarh", "Durgkondal", "Pakhanjur"];
var KabirDham = ["Pandariya", "Bodla", "Kabirdham", "Sahaspur-Lohara", "Rengakhar"];
var KhairagarhChhuikhadanGandai = ["Gandai", "Chhuikhadan", "Khairagarh", "Salhewara"];
var Korba = ["Pali", "Korba", "Katghora", "Kartla", "Podi-Uproda", "Darri", "Hardibazar", "Deepka"];
var KondaGaon = ["Keshkal", "Bade Rajpur", "Farsgaon", "Kondagaon", "Makdi", "Mardapal", "Dhanora"];
var Koriya = ["Baikunthpur", "Sonhat", "Patna", "Podi (Bachra)"];
var Mahasamund = ["Bagbahra", "Mahasamund", "Saraipali", "Basna", "Pithora", "Komakhan"];
var Manendragarh = ["Manendragarh", "Kelhari", "Bharatpur", "Kharagwan", "Chirmiri", "Kotadole"];
var Mungeli = ["Mungeli", "Lormi", "Patharia", "Lalpur Police Station", "Jarhagaon"];
var MohlaManpur = ["Ambagarh Chowki", "Mohla", "Manpur", "Khargaon", "Aundhi"];
var Narayanpur = ["Narayanpur", "Orchha"];
var PendraGaurelaMarwahi = ["Gorella - 1 (Pendra)", "Gorella - 2 (Pendra Road)", "Marwahi"];
var Raigarh = ["Pusaur", "Raigarh", "Gharghoda", "Tamnar", "Dharamjaygarh", "Kharsia", "Lailunga", "Mukdega"];
var Raipur = ["Dharsinwa", "Tilda", "Arang", "Abhanpur", "Kharora", "Gobra Navapara", "Mandir Hasaud", "Dharsiwa"];
var Rajnandgaon = ["Churia", "Dongargarh", "Rajnandgaon", "Dongargaon", "Lal Bahadur Nagar"];
var SarangarhBilaigarh = ["Sarangarh", "Barmakela", "Bilaigarh", "Sariya"];
var Sakti = ["Sakti", "Malkharoda", "Jaijaipur", "Dabhra", "Baradwar"];
var Sukma = ["Chhindgarh", "Sukma", "Konta", "Gadiras", "Tongpal"];
var Surajpur = ["Pratappur", "Odgi", "Bhaiyathan", "Surajpur", "Ramanuj Nagar", "Prem Nagar", "Latori"];
var Surguja = ["Lakhanpur", "Udaipur", "Ambikapur", "Darima", "Lundra", "Batauli", "Sitapur", "Mainpat"];


$("#inputDistrict1").change(function () {
    var districtSelected = $(this).val();
    var optionsList;
    var htmlString = "";

    switch (districtSelected) {
        case "Balod":
            optionsList = Balod;
            break;
        case "Balodabazar":
            optionsList = Balodabazar;
            break;
        case "Balrampur":
            optionsList = Balrampur;
            break;
        case "Bastar":
            optionsList = Bastar;
            break;
        case "Bemetara":
            optionsList = Bemetara;
            break;
        case "Bijapur":
            optionsList = Bijapur;
            break;
        case "Bilashpur":
            optionsList = Bilashpur;
            break;
        case "Dantewada":
            optionsList = Dantewada;
            break;
        case "Dhamtari":
            optionsList = Dhamtari;
            break;
        case "Durg":
            optionsList = Durg;
            break;
        case "Gariaband":
            optionsList = Gariaband;
            break;
        case "Janjgir Champa":
            optionsList = JanjgirChampa;
            break;
        case "Jashpur":
            optionsList = Jashpur;
            break;
        case "Kanker":
            optionsList = Kanker;
            break;
        case "Kabir Dham":
            optionsList = KabirDham;
            break;
        case "Khairagarh-Chhuikhadan-Gandai":
            optionsList = KhairagarhChhuikhadanGandai;
            break;
        case "Korba":
            optionsList = Korba;
            break;
        case "Konda Gaon":
            optionsList = KondaGaon;
            break;
        case "Koriya":
            optionsList = Koriya;
            break;
        case "Mahasamund":
            optionsList = Mahasamund;
            break;
        case "Manendragarh":
            optionsList = Manendragarh;
            break;
        case "Mungeli":
            optionsList = Mungeli;
            break;
        case "Mohla Manpur":
            optionsList = MohlaManpur;
            break;
        case "Narayanpur":
            optionsList = Narayanpur;
            break;
        case "Pendra Gaurela Marwahi":
            optionsList = PendraGaurelaMarwahi;
            break;
        case "Raigarh":
            optionsList = Raigarh;
            break;
        case "Raipur":
            optionsList = Raipur;
            break;
        case "Rajnandgaon":
            optionsList = Rajnandgaon;
            break;
        case "Sarangarh Bilaigarh":
            optionsList = SarangarhBilaigarh;
            break;
        case "Sakti":
            optionsList = Sakti;
            break;
        case "Sukma":
            optionsList = Sukma;
            break;
        case "Surajpur":
            optionsList = Surajpur;
            break;
        case "Surguja":
            optionsList = Surguja;
            break;
    }


    for (var i = 0; i < optionsList.length; i++) {
        htmlString = htmlString + "<option value='" + optionsList[i] + "'>" + optionsList[i] + "</option>";
    }
    $("#inputCity1").html(htmlString);

});


$("#inputDistrict2").change(function () {
    var districtSelected = $(this).val();
    var optionsList;
    var htmlString = "";

    switch (districtSelected) {
        case "Balod":
            optionsList = Balod;
            break;
        case "Balodabazar":
            optionsList = Balodabazar;
            break;
        case "Balrampur":
            optionsList = Balrampur;
            break;
        case "Bastar":
            optionsList = Bastar;
            break;
        case "Bemetara":
            optionsList = Bemetara;
            break;
        case "Bijapur":
            optionsList = Bijapur;
            break;
        case "Bilashpur":
            optionsList = Bilashpur;
            break;
        case "Dantewada":
            optionsList = Dantewada;
            break;
        case "Dhamtari":
            optionsList = Dhamtari;
            break;
        case "Durg":
            optionsList = Durg;
            break;
        case "Gariaband":
            optionsList = Gariaband;
            break;
        case "Janjgir Champa":
            optionsList = JanjgirChampa;
            break;
        case "Jashpur":
            optionsList = Jashpur;
            break;
        case "Kanker":
            optionsList = Kanker;
            break;
        case "Kabir Dham":
            optionsList = KabirDham;
            break;
        case "Khairagarh-Chhuikhadan-Gandai":
            optionsList = KhairagarhChhuikhadanGandai;
            break;
        case "Korba":
            optionsList = Korba;
            break;
        case "Konda Gaon":
            optionsList = KondaGaon;
            break;
        case "Koriya":
            optionsList = Koriya;
            break;
        case "Mahasamund":
            optionsList = Mahasamund;
            break;
        case "Manendragarh":
            optionsList = Manendragarh;
            break;
        case "Mungeli":
            optionsList = Mungeli;
            break;
        case "Mohla Manpur":
            optionsList = MohlaManpur;
            break;
        case "Narayanpur":
            optionsList = Narayanpur;
            break;
        case "Pendra Gaurela Marwahi":
            optionsList = PendraGaurelaMarwahi;
            break;
        case "Raigarh":
            optionsList = Raigarh;
            break;
        case "Raipur":
            optionsList = Raipur;
            break;
        case "Rajnandgaon":
            optionsList = Rajnandgaon;
            break;
        case "Sarangarh Bilaigarh":
            optionsList = SarangarhBilaigarh;
            break;
        case "Sakti":
            optionsList = Sakti;
            break;
        case "Sukma":
            optionsList = Sukma;
            break;
        case "Surajpur":
            optionsList = Surajpur;
            break;
        case "Surguja":
            optionsList = Surguja;
            break;
    }


    for (var i = 0; i < optionsList.length; i++) {
        htmlString = htmlString + "<option value='" + optionsList[i] + "'>" + optionsList[i] + "</option>";
    }
    $("#inputCity2").html(htmlString);

});