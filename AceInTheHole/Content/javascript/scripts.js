
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d');

    var points = new Array();

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    var radius = 40;
    var glass = document.getElementById("glass");


    document.onmousedown = function (event) {
        document.onmousemove = function (event) {
            context.save();
            context.beginPath();
            context.arc(Math.round(event.clientX), Math.round(event.clientY), radius, 0, 2 * Math.PI, true);
            context.clip();
            context.clearRect(Math.round((event.clientX) - radius), Math.round((event.clientY) - radius), radius * 2, radius * 2);
            context.restore();
        };
    };

    // first gear show
    context.save();
    context.beginPath();
    context.arc(Math.round(window.innerWidth), 0, radius * 2, 0, 2 * Math.PI, true);
    context.clip();
    context.clearRect(Math.round((window.innerWidth) - radius * 2), Math.round(0 - radius * 2), radius * 4, radius * 4);
    context.restore();



function modal_close() {
    var modal = document.getElementById("modal_wrapper");

    modal.style.display = "none";
}

function modal_show() {
    var modal = document.getElementById("modal_wrapper");

    modal.style.display = "table";
}

function message_close(id) {
    var message = document.getElementById(id);

    modal_close();
    message.style.display = "none";
}

function message_show(id) {
    var message = document.getElementById(id);

    modal_show();

    // Включаем анимацию заново
    message.style.display = "block";
    var newMes = message.cloneNode(true);
    message.parentNode.replaceChild(newMes, message);
}


function trim(str) {
    var len = str.length;

    if (str.charCodeAt(0)==32)
        str = trim(str.substring(1, len));

    if (str.charCodeAt(len-1)==32)
        str = trim(str.substring(0, len-1));
    return str;
}


// --------- ВАЛИДАЦИЯ ------------

var is_fname, is_sname, is_phone, is_email;

// Валидация телефона
function isPhone(phone) {
    var regex = /^\+?\d[\d\(\)\ -]{4,14}\d$/;
    return regex.test(phone)
}

function ValidPhone() {
    var phone = document.getElementById('phone_number');

    if (isPhone(phone.value)) {
        phone.classList.remove("error");
        phone.classList.add("success");
        is_phone = true;
    }
    else {
        phone.classList.remove("success");
        phone.classList.add("error");
        is_phone = false;
    }

    checkEverything();
}

// Валидация email
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function ValidEmail() {
    var email = document.getElementById("email");

    if (isEmail(email.value)) {
        email.classList.remove("error");
        email.classList.add("success");
        is_email = true;
    }
    else {
        email.classList.remove("success");
        email.classList.add("error");
        is_email = false;
    }

    checkEverything();
}

// Валидация имени и фамилии
function ValidName() {
    var name = document.getElementById("fname");

    if (trim(name.value) != "") {
        name.classList.remove("error");
        name.classList.add("success");
        is_fname = true;
    }
    else {
        name.classList.remove("success");
        name.classList.add("error");
        is_fname = false;
    }

    checkEverything();
}

function ValidSurname() {
    var surname = document.getElementById("sname");

    if (trim(surname.value) != "") {
        surname.classList.remove("error");
        surname.classList.add("success");
        is_sname = true;
    }
    else {
        surname.classList.remove("success");
        surname.classList.add("error");
        is_sname = false;
    }

    checkEverything();
}

function checkEverything() {
    var submitButton = document.getElementById("ok");

    if (is_fname && is_sname && is_email && is_phone) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}