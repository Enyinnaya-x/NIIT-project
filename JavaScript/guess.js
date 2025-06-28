var feed = document.getElementById("feed")
var disBal = document.getElementById("myBal")
disBal.innerHTML = `₦${localStorage.getItem("balance")}` //Displays the balance the user sees
function guess(){
    var input = document.getElementById("myinput").value;
    var randomNum = Math.ceil(Math.random() * 10) //generates random number users input will be compared to
    if(input > 10 || input < 1 || input == ""){ //Checks if the input is between 1-10
        feed.style.fontWeight = "bold";
        feed.innerHTML = "Feedback : Invalid input, Try again! ❌"
        return
    }
    if(localStorage.getItem("balance") < 100){
        feed.style.fontWeight = "bold";
        feed.innerHTML = "Feedback : Insufficient balance💔";  //Stops user from gambling with less than 100 balance
        return
    }
    document.getElementById("mylabel").innerHTML = randomNum; //displays the random number generated for the user to see
    var ogBalance = localStorage.getItem("balance")
    var newBal = ogBalance - 100;
    localStorage.setItem("balance", newBal) //Updates balance after a guess has been made
    disBal.innerHTML = `₦${localStorage.getItem("balance")}`
    if(input == randomNum){ //displays depending on outcome
        feed.style.fontWeight = "bold";
        feed.innerHTML = "Feedback : Correct! You just won ₦300 🎉"
        var winnings = 300
        var total = winnings + newBal //Updates balance if you win a bet
    localStorage.setItem("balance", total)
    disBal.innerHTML = `₦${localStorage.getItem("balance")}`
    }else{
        feed.style.fontWeight = "bold";
        feed.innerHTML = "Feedback : Tough luck, Try again 😢"
    }
}

function reset(){ //resets balance back to 5000
    localStorage.setItem("balance", 5000) 
    disBal.innerHTML = `₦${localStorage.getItem("balance")}`
    document.getElementById("mylabel").innerHTML = "0";  //Resets guessed number back to 0
}