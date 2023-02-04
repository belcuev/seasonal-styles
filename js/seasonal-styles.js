$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        //alert(season);

        //make the season lower case
        season = season.toLowerCase();

        switch(season){
            case "spring":
                $("#logo").attr("src","images/spring.gif");
                $("#wear").attr("src","images/spring-wear.jpg");
                $("html").css("background-color","#2B7129");
                $("h3")
                .css("font-style", "italic")
                .css("font-weight", "normal")
                $("h3").html("<b>Blossom by blossom the Spring flowers a merge and so does the begining of my closet!</b>");
                break;
               
            case "summer":
                $("#logo").attr("src","images/summer.gif");
                $("#wear").attr("src","images/summer-wear.jpg");
                $("html").css("background-color","#EBA52B");
                $("h3")
                .css("font-style", "italic")
                .css("font-weight", "normal")
                $("h3").html("<b>It's summer time, lets rotate the closet to the max!</b>");
                break;

            case "fall":
                $("#logo").attr("src","images/fall.gif");
                $("#wear").attr("src","images/fall-wear.jpg");
                $("html").css("background-color","#A81124");
                $("h3")
                .css("font-style", "italic")
                .css("font-weight", "normal")
                $("h3").html("<b>Fall where sweater weather is the best!</b>");
                break;  
                
            case "winter":
                $("#logo").attr("src","images/winter.gif");
                $("#wear").attr("src","images/winter-wear.jpg");
                $("html").css("background-color","#005393");
                $("h3")
                .css("font-style", "italic")
                .css("font-weight", "normal")
                $("h3").html("<b>Winter is the time for comfort, family, good food and new clothes!</b>");
                break;
  
            default:
                alert("No case matches");
                $("#logo").attr("src","images/four-seasons.gif");
               
                break;
               
        }

        
    });
});




