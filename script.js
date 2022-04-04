
var scream = document.getElementById("cucumberScream");
var laugh = document.getElementById("evilLaugh");
var ya = document.getElementById("ya");
var beatThing = document.getElementById("blablobla");
var chatBox = document.getElementById("ask-questions");
var cucumberNormal = document.getElementById("cucumbernormal");
var cResponse = document.getElementById("cResponse");
var cucumberSpeechBubble = document.getElementById("cucumberSpeechBubble");


 var response = prompt("Are you vegetarian? (answer with y/n)");


function veganAsk(){
 if (response === "Yes" || response === "yes"){
    beatThing.play();
 } else if (response === "no" || response === "No"){
     scream.play();
     cucumberSpeechBubble.style.visibility= "visible";
     cResponse.innerHTML = "WHAT!?";
     setTimeout(function(){ 
         cResponse.innerHTML = "Better figure out your <br> ways, then.";
     }, 2000);
     setTimeout(function(){
         cResponse.innerHTML = "";
         cucumberSpeechBubble.style.visibility = "hidden";
     }, 4000);
 } 
}

veganAsk();



function showFriends(){
    cucumberNormal.src="friends.png";
    setTimeout(function(){
        cucumberNormal.src="costume1.png";
    }, 1000);
        
} 


function eats(){
    cucumberNormal.src = "eats.png";            
    ya.play();
    setTimeout(function(){
        cucumberNormal.src="costume1.png";
    }, 700);
}

function beatThingPlay(){
    
        beatThing.play();

}


window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(key) {
 if (key.keyCode == "84") {
chatBox.style.visibility = "visible";  
 } if (key.keyCode == "69") { //nice
     eats();  
} if (key.keyCode == "66") {  
     
} 
    
}
function cucumberResponse(){
    var userResponse = document.getElementById("askBox").value;
    
    if(userResponse === "What's your favorite color" || userResponse === "whats your favorite color" || userResponse === "Whats your favorite color" || userResponse === "what's your favorite color" || userResponse === "What's your favourite colour" || userResponse === "whats your favourite colour" || userResponse === "Whats your favourite colour" || userResponse === "what's your favourite colour"){
        
        cucumberSpeechBubble.style.visibility = "visible";
        cResponse.innerHTML = "Green, obviously.";
        chatBox.style.visibility = "hidden";
        
        userResponse = "";
        setTimeout(function(){
        cucumberSpeechBubble.style.visibility = "hidden";
        cResponse.innerHTML= "";
    }, 2000);
        
        
    } else if (userResponse === "play some music" || userResponse === "Play some music"){
        
        cucumberSpeechBubble.style.visibility = "visible";
        cResponse.innerHTML = "I'm not your servant, <br> but fine."
        userResponse = "";
        chatBox.style.visibility = "hidden";
        
        setTimeout(function(){
            
            beatThingPlay();
            cucumberSpeechBubble.style.visibility = "hidden";
            cResponse.innerHTML = "";
            
            
        }, 2000);
    }
    
    chatBox.style.visibility = "hidden";
} 