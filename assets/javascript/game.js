// jQuery detecting the state of readiness for the document. 
$(document).ready(function() {

    
    var Random = Math.floor(Math.random() * 101 + 19);
    
    
    $('#randomNumber').text(Random);
    var num1= Math.floor(Math.random()*11 +1);
    var num2= Math.floor(Math.random()*11 +1);
    var num3= Math.floor(Math.random()*11 +1);
    var num4= Math.floor(Math.random()*11 +1);
    
    var userTotal = 0;
    var wins = 0;
    var losses = 0;
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);
    
    


    function reset() {
        Random = Math.floor(Math.random() * 101 + 19);
        console.log(Random);
        $('#randomNumber').text(Random);
        var gem1= Math.floor(Math.random()*11 +1);
        var gem2= Math.floor(Math.random()*11 +1);
        var gem3= Math.floor(Math.random()*11 +1);
        var gem4= Math.floor(Math.random()*11 +1);
        userTotal = 0;
        $('#finalScore').text(userTotal);
    }
    
    
    function winner() {
        alert("You won!");
        wins++;
        $('#numberWins').text(wins);
    }
    
    
    function loser() {
        alert("You lose!");
        losses++;
        $('#numberLosses').text(losses);
        reset();
    }
    
    
    $('#gem1').on("click", function() {
        userTotal = userTotal + num1;
        console.log("New userTotal= " + userTotal);
        $('#finalScore').text(userTotal);
        
    
    if (userTotal == Random) {
        winner();
    }		
    else if (userTotal > Random) {
        loser();
    }
    
    }); 
    
    
    $('#gem2').on("click", function() {
        userTotal = userTotal + num2;
        console.log("New userTotal= " + userTotal);
        $('#finalScore').text(userTotal);
    
    if (userTotal == Random) {
        winner();
    }		
    else if (userTotal > Random) {
        loser();
    }
    }); 
    

    $('#gem3').on("click", function() {
        userTotal = userTotal + num3;
        console.log("New userTotal= " + userTotal);
        $('#finalScore').text(userTotal);
    
    if (userTotal == Random) {
        winner();
    }		
    else if (userTotal > Random) {
        loser();
    }
    });
    
    
    $('#gem4').on("click", function() {
        userTotal = userTotal + num4;
        console.log("New userTotal= " + userTotal);
        $('#finalScore').text(userTotal);
    
    if (userTotal == Random) {
        winner();
    }		
    else if (userTotal > Random) {
        loser();
    }
    
    }); 
    
    }); 