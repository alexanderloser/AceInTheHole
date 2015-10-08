        var canvas = document.getElementById('canvas'),
                context = canvas.getContext('2d');

        var points = new Array();

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        context.fillStyle = "white";
        context.fillRect(0, 0, canvas.width, canvas.height);

        var radius = 40;
        var glass = document.getElementById("glass");


        document.onmousedown = function(event) {
            document.onmousemove = function(event) {
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
            context.arc(Math.round(window.innerWidth), 0, radius*2, 0, 2 * Math.PI, true);
            context.clip();
            context.clearRect(Math.round((window.innerWidth) - radius*2), Math.round(0 - radius*2), radius * 4, radius * 4);
            context.restore();


function modal_close() {
    var modal = document.getElementById("modal_wrapper");

    modal.style.display = "none";
}

function modal_show() {
    var modal = document.getElementById("modal_wrapper");

    modal.style.display = "table";
}
