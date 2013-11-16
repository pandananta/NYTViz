var pace = 7000;
var lead = "<h1>Others argue we were always dumb. The media is just accomodating.</h1><br><img id=\"imggrph\" src=\"assets/images/graph.png\">";
var takeQuiz = "<h1>So how is the New York Times accomodating? Click to find out!</h1><br><button class=\"btn btn-large btn-success\" id=\"quiz\" onClick=\"startQuiz()\"> CLICK ME </button>";

$(document).ready(function()
{   
    setTimeout(function(){$("div#outer").html(lead);}, pace);
    setTimeout(function(){$("div#outer").html(takeQuiz);}, pace+pace);
});


function startQuiz(){
    $("div#outer").html("<h1>Since 1981, Title length has been on the rise</h1><br><button class=\"btn btn-large btn-success\" id=\"button2\" onClick=\"slide2()\"> NEXT </button>");
}


function slide2(){
    $("div#outer").html("<h1>lol</h1></br><button class=\"btn btn-large btn-success\" id=\"button2\" onClick=\"slide2()\"> NEXT </button>");
}