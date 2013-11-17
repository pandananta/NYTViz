var pace = 1000;
var lead = "<h1>Others argue we were always dumb. The media is just accomodating.</h1><br><img id=\"imggrph\" src=\"assets/images/graph.png\">";
var takeQuiz = "<h1>So how is the New York Times accomodating? Click to find out!</h1><br><button class=\"btn btn-large btn-success\" id=\"quiz\" onClick=\"startQuiz()\"> CLICK ME </button>";

$(document).ready(function()
{   
    setTimeout(function(){$("div#outer").html(lead);}, pace);
    setTimeout(function(){$("div#outer").html(takeQuiz);}, pace+pace);
});


function startQuiz(){
    $("div#outer").html("<h1>Since 1981, title length of articles has been on the rise.</h1></br><iframe scrolling =\"no\" src=\"assets/js/index.html\"></iframe><br><button class=\"btn btn-large btn-success\" id=\"button2\" onClick=\"slide2()\"> NEXT </button>");  
}


function slide2(){
    $("div#outer").html("<h1>Index 1.</h1></br><iframe scrolling =\"no\" src=\"assets/js/index1.html\"></iframe><br><button class=\"btn btn-large btn-success\" id=\"button3\" onClick=\"slide3()\"> NEXT </button>");  
}

function slide3(){
    $("div#outer").html("<h1>Index 2.</h1></br><iframe scrolling =\"no\" src=\"assets/js/index2.html\"></iframe><br><button class=\"btn btn-large btn-success\" id=\"button4\" onClick=\"slide4()\"> NEXT </button>");  
}

function slide4(){
    $("div#outer").html("<h1>Index 3.</h1></br><iframe scrolling =\"no\" src=\"assets/js/index3.html\"></iframe><br><button class=\"btn btn-large btn-success\" id=\"button5\" onClick=\"slide5()\"> NEXT </button>");  
}

function slide5(){
    $("div#outer").html("<h1>oh Haiiiii</h1>")
}