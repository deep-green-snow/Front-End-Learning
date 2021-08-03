$(document).ready(function () {

    $("#somebutton").click(function () {
        $("#sidelist").append("<li>NEW</li>");
    });
    /*
        $("#mybox").on("mouseover", function (event) {
            $(this).prepend(" x ");
        });
        */
    $("#mybox")
        .mouseenter(function (e) {
            $(this).text("OVER ME NOW");
        })
        .mouseout(function (e) {
            $(this).text("NO MOUSE HERE");
        })
        .mousemove(function (e) {
            console.log(e);
            $(this).text("MOUSE MOVING X" + e.clientX + " Y" + e.clientY);
        })
        .mousedown(function () {
            $(this).text("MOUSE CLICKED");
        })
        .mouseup(function () {
            $(this).text("MOUSE RELEASE");
        });

    $("#Name").keypress(function (e) {
        console.log(e);
        $("#mybox").text(e.which);
    });

    $("#Name").blur(function (e) {
        console.log(e);
        $("#mybox").text("BLUR");
    });

    $("#Name").focusout(function (e) {
        console.log(e);
        $("#mybox").text("FOCUSOUT");
    });

    $("#Name").focus(function (e) {
        console.log(e);
        $("#mybox").text("FOCUS");
    });

    $("#myForm").submit(function (e) {
        e.preventDefault();
        console.log(e);
        $("#mybox").text("SUBMITTED");
    });
    /*
    $("select").change(function (e) {
       console.log(e.target.value); 
    });
    */
    $("select").on("change",function(e) {
        console.log(e.target.value); 
    });
});