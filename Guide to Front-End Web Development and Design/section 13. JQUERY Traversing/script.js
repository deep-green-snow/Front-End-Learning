$(document).ready(function(){
    console.log($(".childtwo").parent());
    console.log($(".childtwo").parents());

    console.log($(".parentone").children().html("<p>Child</p>"));

    // $("#container").children().each(function (index){
    //     $(this).text(index + "NEW DIV");
    // })

    $(".parentone").children("div.childone").html("<p>PICK ME</p>");

    // $(".parentone div.childone").siblings().html("<p>SIB of CHILD ONE</p>");
    // $(".parentone div.childone").siblings("div").html("<p>SIB in a Paragraph</p>");
    // $(".parentone div.childone").next().html("<p>NEXT to CHILD ONE</p>");
    //$(".parentone div.childthree").nextAll().html("<p>NEXT</p>");

    $("li").filter(".topmenu").html("<li><a href=\"#TOPMENU\" > TOP MENU UPDATE</a></li>");

});