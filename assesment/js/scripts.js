var drawLogo = function() {
    var canvas = document.getElementById("logo");
    var context = canvas.getContext("2d");

    context.fillStyle = "#FFFFFF"; // White color for the shapes
    context.strokeStyle = "#FFFFFF"; // White color for the shapes

    context.lineWidth = 2; 
    context.beginPath();
    context.moveTo(0, 40); 
    context.lineTo(30, 0);
    context.lineTo(60, 40 );
    context.lineTo(285, 40 );

    context.fill();   
    context.closePath();

    context.font = "italic 40px 'Arial'";
    context.fillStyle = "#552619"; // Dark brown color for the text
    context.fillText("AwesomeCo", 60, 36);

    context.save();
    context.translate(20, 20);
    context.fillRect(0, 0, 20, 20); 

    context.fillStyle = "#B2456E"; // Pink/purple color for the small shape
    context.strokeStyle = "#B2456E"; // Pink/purple color for the small shape

    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(0, 20); 
    context.lineTo(10, 0);
    context.lineTo(20, 20 );
    context.lineTo(0, 20 );

    context.fill();
    context.closePath();
    context.restore();
};

window.onload = function() {
    var canvas = document.getElementById("logo");
    if (canvas.getContext) {
        drawLogo();
    }
};