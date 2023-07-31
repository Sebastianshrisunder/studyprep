$(document).ready(
    function(){
        $("#button").click(function(){
            $(".content").toggle();
            if($("#button").text() == "See More"){
                $(this).text( "See Less ");
            }
            else{
                $(this).text("See More");
            }
            // console.log("You cliecked")
        })
        $("#button4").click(function(){
            $(".content").toggle();
            if($("#button4").text() == "See More"){
                $(this).text( "See Less ");
            }
            else{
                $(this).text("See More");
            }
            // console.log("You cliecked")
        })
        $("#button3").click(function(){
            $(".content").toggle();
            if($("#button3").text() == "See More"){
                $(this).text( "See Less ");
            }
            else{
                $(this).text("See More");
            }
            // console.log("You cliecked")
        })
        $("#button5").click(function(){
            $(".content").toggle();
            if($("#button5").text() == "See More"){
                $(this).text( "See Less ");
            }
            else{
                $(this).text("See More");
            }
            // console.log("You cliecked")
        })
    }
)