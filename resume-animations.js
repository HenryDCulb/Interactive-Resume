var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;
var counter5 = 0;
var counter6 = 0;

$("#title").click(function() {
    
    if(counter1 % 2 == 0) {
        $("#titleText").animate({left: "400px"}, "fast", function() {
            $("#titleText").animate({top: "-15px"}, "fast");
        });
        counter1++;
    }   else {
        if(counter1 % 2 != 0) {
            $("#titleText").animate({top:"20px"}, "fast", function(){
                $("#titleText").animate({left:"-600px"}, "fast")
            });
        };
        counter1++;
    }
    
});

$("#experience").click(function() {
    
    if(counter2 % 2 == 0) {
        $("#expText").animate({left: "400px"}, "fast", function() {
            $("#expText").animate({top: "-20px"}, "fast");
        });
        counter2++;
    }   else {
        if(counter2 % 2 != 0) {
            $("#expText").animate({top:"20px"}, "fast", function(){
                $("#expText").animate({left:"-600px"}, "fast")
            });
        };
        counter2++;
    }
    
});

$("#projects").click(function() {
    
    if(counter3 % 2 == 0) {
        $("#projectList").animate({left: "400px"}, "fast", function() {
            $("#projectList").animate({top: "-20px"}, "fast");
        });
        counter3++;
    }   else {
        if(counter3 % 2 != 0) {
            $("#projectList").animate({top:"20px"}, "fast", function(){
                $("#projectList").animate({left:"-1400px"}, "fast")
            });
        };
        counter3++;
    }
    
});

$("#skills").click(function() {
    
    if(counter4 % 2 == 0) {
        $("#skillsList").animate({left: "400px"}, "fast", function() {
            $("#skillsList").animate({top: "-20px"}, "fast");
        });
        counter4++;
    }   else {
        if(counter4 % 2 != 0) {
            $("#skillsList").animate({top:"20px"}, "fast", function(){
                $("#skillsList").animate({left:"-1200px"}, "fast")
            });
        };
        counter4++;
    }
    
});

$("#awards").click(function() {
    
    if(counter1 % 2 == 0) {
        $("#awardsList").animate({left: "400px"}, "fast", function() {
            $("#awardsList").animate({top: "-20px"}, "fast");
        });
        counter1++;
    }   else {
        if(counter1 % 2 != 0) {
            $("#awardsList").animate({top:"20px"}, "fast", function(){
                $("#awardsList").animate({left:"-1200px"}, "fast")
            });
        };
        counter1++;
    }
    
});

$("#misc").click(function() {
    
    if(counter1 % 2 == 0) {
        $("#miscText").animate({left: "400px"}, "fast", function() {
            $("#miscText").animate({top: "-20px"}, "fast");
        });
        counter1++;
    }   else {
        if(counter1 % 2 != 0) {
            $("#miscText").animate({top:"20px"}, "fast", function(){
                $("#miscText").animate({left:"-600px"}, "fast")
            });
        };
        counter1++;
    }
    
});