var pace = 1500;
var lead = "<h1>Others argue we were always dumb. The media is just accomodating.</h1";
var takeQuiz = "<h1>So how Dumb does NYT Think You Are? Take This Quiz to Find Out!</h1><br><button class=\"btn btn-large btn-success\" id=\"quiz\" onClick=\"startQuiz()\"> CLICK ME </button>";

$(document).ready(function()
{   
    setTimeout(function(){$("div#outer").html(lead);console.log("1");}, pace);
    setTimeout(function(){$("div#outer").html(takeQuiz);console.log("1");}, pace+pace);
});


function startQuiz(){
    alert( "LOL YOU CLICKED THE BUTTON" );
}