$(document).ready(function() {
    // var a = $("#Name").val();
    // var b = $("h2").html();
    // $("p").text(b);
    
    var hello = "hello";
    var space = " ";
    var world = "world";
    
    $("li").each(function (index,event) {
        console.log(index);
        console.log(event);
        console.log($(this).html());
        $(this).after("AFTER");
        $(this).append("APPEND");
        $(this).before("BEFORE");
        $(this).prepend("PREPEND");
        $(this).empty();
        //$(this).remove();
    })

    $("li").each(function () {
        console.log($(this).text());
    });

    $("li:eq(3)").html("number 3");
    $("li:eq(5)").append(hello,space,world);

});